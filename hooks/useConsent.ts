"use client";

import { useSyncExternalStore } from "react";

export type Consent = "ja" | "nein";

const KEY = "tiger-consent";
const CONSENT_EVENT = "tiger-consent";
export const OPEN_EVENT = "tiger-consent-oeffnen";

// Fallback, falls localStorage blockiert ist (z. B. privates Fenster): Die Wahl gilt dann bis zum Neuladen.
let imSpeicher: Consent | null = null;

function lesen(): Consent | null {
  try {
    const v = window.localStorage.getItem(KEY);
    if (v === "ja" || v === "nein") return v;
  } catch {
    // Speicher blockiert – Fallback unten
  }
  return imSpeicher;
}

function subscribe(cb: () => void) {
  window.addEventListener(CONSENT_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CONSENT_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

/** `undefined` = noch unbekannt (Server-Rendering), `null` = noch keine Wahl getroffen. */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore(subscribe, lesen, () => undefined);
}

export function setConsent(v: Consent) {
  imSpeicher = v;
  try {
    window.localStorage.setItem(KEY, v);
  } catch {
    // Speicher blockiert – imSpeicher reicht für diese Sitzung
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function openConsentBanner() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}
