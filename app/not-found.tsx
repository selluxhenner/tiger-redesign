import Link from "next/link";
import { IconImage, IconMail, IconUtensils } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <div className="seiten-hero">
        <div className="wrap">
          <span className="eyebrow hand">da isch de Tiger falsch abbogen</span>
          <h1>Seite nicht gefunden</h1>
          <p>
            Diese Seite gibt es nicht – aber der Tiger schon. Schau dir die Speisekarte an, wirf einen Blick in die
            Galerie oder reserviere gleich einen Tisch.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="mehr-row" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 0 }}>
            <Link className="btn btn-gold" href="/#menu">
              <IconUtensils /> Zur Speisekarte
            </Link>
            <Link className="btn btn-ghost-dark" href="/galerie">
              <IconImage /> Zur Galerie
            </Link>
            <Link className="btn btn-ghost-dark" href="/#reservieren">
              <IconMail /> Tisch reservieren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
