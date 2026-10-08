"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconChevronRight, IconClose, IconFacebook, IconMail, IconMenu, IconPhone } from "@/components/icons";

const NAV_ITEMS = [
  { id: "menu", label: "Speisekarte" },
  { id: "zeiten", label: "Kontakt" },
  { id: "galerie", label: "Galerie", href: "/galerie" },
  { id: "events", label: "Events", href: "/events" },
];

const SPY_IDS = ["tag", "thai", "ueberuns", "galerie", "menu", "events", "zeiten"];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const anchorHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("gsperrt");
      closeBtnRef.current?.focus();
    } else {
      document.body.classList.remove("gsperrt");
    }
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!isHome || !("IntersectionObserver" in window)) return;
    const els = SPY_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => spy.observe(el));
    return () => spy.disconnect();
  }, [isHome]);

  return (
    <>
      <a className="skip" href="#top">
        Zum Inhalt springen
      </a>

      <header className="top">
        <nav className="nav" aria-label="Hauptnavigation">
          <Link className="nav-logo" href={isHome ? "#top" : "/"} aria-label="Tiger Wil – zur Startseite">
            <Image src="/images/logo.png" alt="Tiger Wil Logo" width={140} height={44} style={{ height: 44, width: "auto" }} priority />
          </Link>
          <button
            className="nav-toggle"
            aria-expanded={drawerOpen}
            aria-controls="drawer"
            onClick={() => setDrawerOpen(true)}
            aria-label="Menü öffnen"
          >
            <IconMenu />
          </button>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) =>
              item.href ? (
                <li key={item.id}>
                  <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.id}>
                  <Link href={anchorHref(item.id)} aria-current={isHome && activeId === item.id ? "true" : undefined}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link className="nav-cta" href={anchorHref("reservieren")}>
                Reservieren
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={"drawer-backdrop" + (drawerOpen ? " an" : "")}
        onClick={() => setDrawerOpen(false)}
      />
      <aside className={"drawer" + (drawerOpen ? " open" : "")} id="drawer" aria-label="Mobiles Menü" aria-hidden={!drawerOpen}>
        <div className="drawer-kopf">
          <Image src="/images/logo.png" alt="Tiger Wil" width={120} height={40} style={{ height: 40, width: "auto" }} />
          <button ref={closeBtnRef} className="drawer-zu" onClick={() => setDrawerOpen(false)} aria-label="Menü schliessen">
            <IconClose />
          </button>
        </div>
        <ul className="drawer-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href ?? anchorHref(item.id)}
                aria-current={item.href ? (pathname === item.href ? "page" : undefined) : undefined}
                onClick={() => setDrawerOpen(false)}
              >
                {item.label} <IconChevronRight />
              </Link>
            </li>
          ))}
        </ul>
        <div className="drawer-cta">
          <Link className="btn btn-gold" href={anchorHref("reservieren")} onClick={() => setDrawerOpen(false)}>
            <IconMail /> Tisch reservieren
          </Link>
        </div>
        <div className="drawer-fuss">
          <div className="titel">Folg em Tiger</div>
          <div className="sozial">
            <a
              href="https://www.facebook.com/groups/124167024309517/"
              target="_blank"
              rel="noopener"
              aria-label="Tiger Wil auf Facebook"
            >
              <IconFacebook />
            </a>
            <a href="mailto:tiger_wil@hotmail.ch" aria-label="E-Mail an den Tiger">
              <IconMail />
            </a>
            <a href="tel:+41719102353" aria-label="Tiger Wil anrufen">
              <IconPhone />
            </a>
          </div>
          <p className="drawer-adr">
            Restaurant Tiger Wil
            <br />
            Grabenstrasse 21, 9500 Wil SG
            <br />
            071 910 23 53
          </p>
        </div>
      </aside>
    </>
  );
}
