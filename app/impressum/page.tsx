import type { Metadata } from "next";
import { IconMail, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Restaurant Tiger Wil, Grabenstrasse 21, 9500 Wil SG.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <div className="seiten-hero">
        <div className="wrap">
          <span className="eyebrow hand">rechtlichs, churz und bündig</span>
          <h1>Impressum</h1>
        </div>
      </div>

      <section className="recht" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <h2>Betreiber der Website</h2>
          <div className="karte">
            <p style={{ marginBottom: 4 }}>
              <strong>Restaurant Tiger Wil</strong>
            </p>
            <p style={{ marginBottom: 4 }}>Marc Gähwiler-Wongprasert</p>
            <p style={{ marginBottom: 12 }}>
              Grabenstrasse 21
              <br />
              9500 Wil SG
              <br />
              Schweiz
            </p>
            <p className="kontakt-zeile" style={{ marginBottom: 4 }}>
              <IconPhone />
              <a href="tel:+41719102353">071 910 23 53</a>
            </p>
            <p className="kontakt-zeile" style={{ marginBottom: 0 }}>
              <IconMail />
              <a href="mailto:tiger_wil@hotmail.ch">tiger_wil@hotmail.ch</a>
            </p>
          </div>

          <h2>Haftungsausschluss</h2>
          <p>
            Der Betreiber übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
            Vollständigkeit der Informationen auf dieser Website. Haftungsansprüche gegen den Betreiber wegen
            Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der
            veröffentlichten Informationen entstehen, werden im gesetzlich zulässigen Rahmen ausgeschlossen.
          </p>
          <p>
            Angaben wie Öffnungszeiten, Menüs und Events können ändern. Massgebend sind die aktuellen Informationen
            vor Ort oder auf Anfrage.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Verweise und Links auf Websites Dritter liegen ausserhalb unseres Verantwortungsbereichs. Der Zugriff
            und die Nutzung solcher Websites erfolgen auf eigene Gefahr der Nutzerin oder des Nutzers.
          </p>

          <h2>Urheberrechte</h2>
          <p>
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website
            gehören ausschliesslich dem Restaurant Tiger Wil oder den speziell genannten Rechtsinhabern. Für die
            Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus
            einzuholen.
          </p>
        </div>
      </section>
    </>
  );
}
