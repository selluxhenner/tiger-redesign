import Link from "next/link";
import Image from "next/image";
import { IconFacebook, IconMail } from "@/components/icons";

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <Image src="/images/hero-badge.png" alt="Abgmacht, im Tiger! z'Wil" width={220} height={60} style={{ height: 52, width: "auto" }} loading="lazy" />
        <ul className="foot-links">
          <li>
            <Link href="/#ueberuns">Über uns</Link>
          </li>
          <li>
            <Link href="/galerie">Galerie</Link>
          </li>
          <li>
            <Link href="/#menu">Menu</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/#zeiten">Öffnungszeiten</Link>
          </li>
          <li>
            <Link href="/#kontakt">Kontakt</Link>
          </li>
          <li>
            <Link href="/impressum">Impressum</Link>
          </li>
        </ul>
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
        </div>
        <p className="copy">© Tiger-Wil 2026 · Alle Rechte vorbehalten · Abgmacht, im Tiger!</p>
      </div>
    </footer>
  );
}
