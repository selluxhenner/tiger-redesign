"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { OPEN_EVENT, openConsentBanner, setConsent, useConsent, type Consent } from "@/hooks/useConsent";

export function CookieBanner() {
  const consent = useConsent();
  const [wiederOffen, setWiederOffen] = useState(false);
  const ersterKnopf = useRef<HTMLButtonElement | null>(null);
  const zurueck = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const oeffnen = () => {
      zurueck.current = document.activeElement as HTMLElement | null;
      setWiederOffen(true);
    };
    window.addEventListener(OPEN_EVENT, oeffnen);
    return () => window.removeEventListener(OPEN_EVENT, oeffnen);
  }, []);

  useEffect(() => {
    if (wiederOffen) ersterKnopf.current?.focus();
  }, [wiederOffen]);

  // Erst nach dem Mount rendern (undefined = Server) und nur, solange keine Wahl getroffen wurde
  // oder der Banner über «Cookie-Einstellungen» wieder geöffnet ist.
  if (consent === undefined || (consent !== null && !wiederOffen)) return null;

  function schliessen() {
    setWiederOffen(false);
    zurueck.current?.focus();
  }

  function waehlen(v: Consent) {
    setConsent(v);
    if (wiederOffen) schliessen();
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape" && consent !== null) schliessen();
  }

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie-Hinweis" onKeyDown={onKeyDown}>
      <p>
        Wir verwenden Cookies nur für die eingebettete Google-Karte.{" "}
        <Link href="/datenschutz">Mehr in der Datenschutzerklärung</Link>
      </p>
      {consent !== null && (
        <p className="cb-stand">Aktuell: {consent === "ja" ? "akzeptiert" : "abgelehnt"}</p>
      )}
      <div className="cb-knoepfe">
        <button ref={ersterKnopf} type="button" onClick={() => waehlen("ja")}>
          Akzeptieren
        </button>
        <button type="button" onClick={() => waehlen("nein")}>
          Ablehnen
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button type="button" className="link-knopf" onClick={openConsentBanner}>
      Cookie-Einstellungen
    </button>
  );
}
