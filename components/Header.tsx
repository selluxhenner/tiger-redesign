"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { StatusChip } from "@/components/StatusChip";
import { IconChevronRight, IconClose, IconFacebook, IconMail, IconMenu, IconPhone } from "@/components/icons";

const NAV_ITEMS = [
  { id: "ueberuns", label: "Über uns" },
  { id: "menu", label: "Menu" },
  { id: "kontakt", label: "Kontakt" },
  { id: "galerie", label: "Galerie", href: "/galerie" },
  { id: "events", label: "Events", href: "/events" },
];

const SPY_IDS = ["tag", "thai", "erwarten", "ueberuns", "galerie", "menu", "events", "zeiten", "kontakt"];

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

      <motion.header
        className="top"
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="nav" aria-label="Hauptnavigation">
          <Link className="nav-logo" href={isHome ? "#top" : "/"} aria-label="Tiger Wil – zur Startseite">
            <motion.span
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-flex" }}
            >
              <Image src="/images/logo.png" alt="Tiger Wil Logo" width={140} height={44} style={{ height: 44, width: "auto" }} priority />
            </motion.span>
            <StatusChip variant="nav" />
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
          <motion.ul
            className="nav-links"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
            }}
          >
            {NAV_ITEMS.map((item) =>
              item.href ? (
                <motion.li
                  key={item.id}
                  variants={{ hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                    {item.label}
                  </Link>
                </motion.li>
              ) : (
                <motion.li
                  key={item.id}
                  variants={{ hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={anchorHref(item.id)} aria-current={isHome && activeId === item.id ? "true" : undefined}>
                    {item.label}
                  </Link>
                </motion.li>
              )
            )}
            <motion.li variants={{ hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.4 }}>
              <Link className="nav-cta" href={anchorHref("reservieren")}>
                Reservieren
              </Link>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.header>

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
