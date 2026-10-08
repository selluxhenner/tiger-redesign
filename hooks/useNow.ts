"use client";

import { useSyncExternalStore } from "react";

function subscribe(cb: () => void) {
  const id = setInterval(cb, 30_000);
  window.addEventListener("focus", cb);
  document.addEventListener("visibilitychange", cb);
  return () => {
    clearInterval(id);
    window.removeEventListener("focus", cb);
    document.removeEventListener("visibilitychange", cb);
  };
}

const getSnapshot = () => Math.floor(Date.now() / 60_000);
const getServerSnapshot = () => null;

/** Aktuelle Zeit auf die Minute genau – `null` beim Server-Rendern und während der Hydration. */
export function useNow(): Date | null {
  const minute = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return minute === null ? null : new Date(minute * 60_000);
}
