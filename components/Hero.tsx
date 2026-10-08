import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" style={{ padding: "64px 0 0" }} aria-label="Willkommen im Tiger">
      <h1 className="sr-only">
        Restaurant Tiger Wil – Bar, Thai-Restaurant und Beiz in Wil SG
      </h1>
      <div className="hero-half hero-tag">
        <div className="hero-photo">
          <Image src="/images/teller15.jpg" alt="" fill sizes="50vw" priority style={{ objectFit: "cover" }} />
        </div>
        <div className="hero-overlay" />
        <span className="hero-zeit">Tagsüber · ab 08:30</span>
        <h2>
          Kafi, Znüni &amp;
          <br />
          gutbürgerliche Küche
        </h2>
        <p>
          Heinz kocht ehrliche Schweizer Kost – unkompliziert, fein und für alle. Die Beiz ist offen, der Stammtisch
          auch.
        </p>
        <span className="hand">wie deheim, eifach besser bedient</span>
      </div>

      <div className="hero-half hero-nacht">
        <div className="hero-photo">
          <Image src="/images/teller4.jpg" alt="" fill sizes="50vw" priority style={{ objectFit: "cover" }} />
        </div>
        <div className="hero-overlay" />
        <span className="hero-zeit">Abends · ab 18:00</span>
        <h2>
          Authentisch Thai,
          <br />
          frisch us em Wok
        </h2>
        <p>
          Alex kocht jeden Abend frisch – keine Fertigsaucen, kein Buffet. Dafür braucht&apos;s eine Reservation. Es
          lohnt sich.
        </p>
        <span className="hand">so schmeckt Thailand z&apos;Wil</span>
      </div>

      <div className="hero-badge">
        <Image
          src="/images/hero-badge.png"
          alt="Abgmacht, im Tiger! z'Wil – Restaurant Tiger Logo"
          width={560}
          height={220}
          priority
        />
        {/*<span className="sub">
          Bar · Restaurant · Treffpunkt &nbsp;—&nbsp; Grabenstrasse 21, Wil SG
        </span>*/}
      </div>
    </section>
  );
}
