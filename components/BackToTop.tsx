"use client";

import { useEffect, useState } from "react";
import { IconArrowUp } from "@/components/icons";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="nachoben"
      className={show ? "an" : ""}
      aria-label="Nach oben scrollen"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <IconArrowUp />
    </button>
  );
}
