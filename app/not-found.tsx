import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="seiten-hero">
        <div className="wrap">
          <span className="eyebrow hand">da isch de Tiger falsch abbogen</span>
          <h1>Seite nicht gefunden</h1>
          <p>
            Diese Seite gibt es nicht – aber der Tiger schon. Schau dir die Speisekarte an oder reserviere gleich
            einen Tisch.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap nf-aktionen">
          <Link className="btn btn-gold" href="/">
            Zur Startseite
          </Link>
          <p className="nf-links">
            <Link href="/#menu">Speisekarte</Link>
            <Link href="/#reservieren">Tisch reservieren</Link>
          </p>
        </div>
      </section>
    </>
  );
}
