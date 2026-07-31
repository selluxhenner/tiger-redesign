"use client";

import { useOpenStatus } from "@/hooks/useOpenStatus";

export function StatusChip({ variant = "nav" }: { variant?: "nav" | "gross" }) {
  const { offen, label, sub, ready } = useOpenStatus();
  const cls = variant === "nav" ? "status-chip" : "status-gross";

  return (
    <span className={cls + (offen ? " offen" : "")} role="status">
      <span className="dot" aria-hidden="true" />
      <span className="txt">
        {ready ? (
          <>
            {label} <span className="txt-lang">· {sub}</span>
          </>
        ) : null}
      </span>
    </span>
  );
}
