import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { IconExternalLink, IconMail, IconMask, IconPhone, IconUtensils } from "@/components/icons";
import { POSTS } from "@/lib/posts";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Events – Fasnacht, Metzgete & Feste",
  description:
    "Events im Restaurant Tiger Wil: die legendäre Tiger-Fasnacht, die traditionelle Metzgete und private Feste – Geburtstage, Apéros und Catering in Wil SG.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events im Tiger Wil",
    description:
      "Die legendäre Tiger-Fasnacht, die traditionelle Metzgete und private Feste im Restaurant Tiger Wil.",
    url: "/events",
    locale: "de_CH",
  },
};

export default function EventsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Events", path: "/events" }]} />
      <div className="seiten-hero">
        <div className="wrap">
          <span className="eyebrow hand">im Tiger lauft immer öppis</span>
          <h1>Events im Tiger</h1>
          <p>
            Von der legendären Fasnacht bis zur traditionellen Metzgete – im Tiger wird gefeiert, wie es sich
            gehört. Und wenn gerade nichts ansteht, richten wir dein eigenes Fest aus.
          </p>
        </div>
      </div>

      <section className="dark" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <span className="eyebrow">was als Nächstes chunt</span>
          <h2 className="big">Nächste Events</h2>
          <Reveal as="div" className="ev-none">
            Zurzeit sind keine Events geplant.
            <br />
            Aktuelle Ankündigungen gibt&apos;s immer zuerst auf{" "}
            <a
              href="https://www.facebook.com/groups/124167024309517/"
              target="_blank"
              rel="noopener"
              style={{ color: "var(--gold-hell)", fontWeight: 600 }}
            >
              Facebook <IconExternalLink />
            </a>{" "}
            – es lohnt sich, wieder vorbeizuschauen.
          </Reveal>

          <div style={{ marginTop: 56 }}>
            <span className="eyebrow">immer up to date</span>
            <h2 className="big">Neuigkeiten</h2>
            <div className="news-grid">
              {POSTS.map((post) => (
                <Reveal as="article" className="news-card" key={post.title}>
                  {post.date && <span className="datum">{post.date}</span>}
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dark" style={{ background: "var(--nacht2)", paddingTop: 64 }}>
        <div className="wrap">
          <span className="eyebrow">d&apos;Klassiker</span>
          <h2 className="big">Zwei Feste, die man kennt</h2>

          <Reveal as="div" className="ev-gross">
            <div className="bild">
              <Image
                src="/images/fassnacht25_10.jpg"
                alt="Festlich dekorierte Bar an der legendären Tiger-Fasnacht"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="text">
              <h3 className="hand">D&apos;Tiger-Fasnacht</h3>
              <p>
                Legendär und weit über Wil hinaus bekannt: An der Fasnacht wird das ganze Lokal verwandelt – Deko
                bis unter die Decke, Musik, Kostüme und eine Stimmung, die man erlebt haben muss. Wer einmal dabei
                war, kommt wieder.
              </p>
              <span className="merk">
                <IconMask /> Jeweils zur Fasnachtszeit
              </span>
            </div>
          </Reveal>

          <Reveal as="div" className="ev-gross">
            <div className="text">
              <h3 className="hand">D&apos;Metzgete</h3>
              <p>
                Tradition pur: Wenn die Metzgete ansteht, ist der Tiger voll. Währschafte Küche, wie sie sein muss –
                und Plätze, die schnell weg sind. Frühzeitig reservieren lohnt sich.
              </p>
              <span className="merk">
                <IconUtensils /> Jeweils im Herbst
              </span>
            </div>
            <div className="bild">
              <Image
                src="/images/metzgete2.jpg"
                alt="Marc präsentiert Blutwurst und Sauerkraut an der Tiger-Metzgete"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal as="div" className="privat-box">
            <div>
              <h3>Dein Fest im Tiger</h3>
              <p>
                Geburtstage, Apéros, Firmenanlässe, Catering &amp; Party-Catering – wir richten&apos;s, ihr
                geniesst&apos;s. Meldet euch, wir finden zusammen das passende Format.
              </p>
            </div>
            <div className="privat-actions">
              <a className="btn btn-gold" href="mailto:tiger_wil@hotmail.ch?subject=Anfrage%20Fest%20im%20Tiger">
                <IconMail /> Fest anfragen
              </a>
              <a className="btn btn-ghost-dark" href="tel:+41719102353">
                <IconPhone /> 071 910 23 53
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
