"use client";

import { useEffect, useState } from "react";
import { openState, statusText, type OpenState } from "@/lib/hours";

export function useOpenStatus() {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const update = () => setState(openState(new Date()));
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  if (!state) return { offen: false, label: "", sub: "", ready: false as const };
  const { label, sub } = statusText(state);
  return { offen: state.offen, label, sub, ready: true as const };
}
