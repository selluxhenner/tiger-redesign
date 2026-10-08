import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/Hero";
import { TigerzeitDial } from "@/components/TigerzeitDial";
import { ReservationForm } from "@/components/ReservationForm";
import { Gallery, TEASER_GALLERY_IMAGES } from "@/components/Gallery";
import { OpeningHoursTable } from "@/components/OpeningHoursTable";
import { MapEmbed } from "@/components/MapEmbed";
import {
  IconCalendar,
  IconChevronRight,
  IconCup,
  IconFacebook,
  IconImage,
  IconMail,
  IconMapPin,
  IconMugHot,
  IconPhone,
  IconTree,
  IconUsers,
  IconUtensils,
} from "@/components/icons";

export default function HomePage() {
  return (
    <>
      <Hero />

      <TigerzeitDial />

      <section id="tag">
        <div className="wrap split">
          <div>
            <span className="eyebrow">e Beiz für alli</span>
            <h3 className="big">
              Vom Handwerker
              <br />
              bis zum Bänker
            </h3>
            <p className="lead">
              Der Tiger ist mehr als ein Restaurant und eine Bar in Wil SG – er ist der Treffpunkt der Stadt. Am
              Morgen der Kafi mit den Frühaufstehern, am Mittag die währschafte Küche, am Feierabend das Bier an
              der Bar. Hier sitzen alle am gleichen Tisch: Jung und Alt, Blaumann und Anzug.
            </p>
            <div className="pill-row">
              <span className="pill">
                <IconCup /> Bar &amp; Restaurant
              </span>
              <span className="pill">
                <IconTree /> Garten im Sommer offen
              </span>
              <span className="pill">
                <IconMugHot /> Stammtisch-Kultur
              </span>
              <span className="pill">
                <IconUsers /> Von Jung bis Alt
              </span>
            </div>
          </div>
          <Reveal as="div" className="foto">
            <Image src="/images/exterior.jpg" alt="Das Restaurant Tiger an der Grabenstrasse 21 in Wil" width={800} height={600} loading="lazy" />
            <span className="foto-tag">dihei a de Grabestrass</span>
          </Reveal>
        </div>
      </section>

      <section className="dark" id="thai">
        <div className="wrap">
          <div className="split">
            <Reveal as="div" className="foto">
              <Image
                src="/images/teller4.jpg"
                alt="Frisch gekochtes Thai-Wokgericht mit Reis, angerichtet mit Blüten"
                width={800}
                height={600}
                loading="lazy"
              />
              <span className="foto-tag">frisch us em Wok vo Alex</span>
            </Reveal>
            <div>
              <span className="eyebrow">de Abig ghört Thailand</span>
              <h3 className="big">Authentische Thai-Küche, jeden Abend frisch</h3>
              <p className="lead">
                Ab 18:00 Uhr übernimmt Alex die Küche – so schmeckt Thailand z&apos;Wil.
                Alles wird frisch zubereitet – so wie es sein muss. Immer 2 bis 7 Gerichte stehen zur Auswahl,
                und die Karte wechselt laufend, damit es nie langweilig wird.
              </p>
            </div>
          </div>

          <ReservationForm />
        </div>
      </section>

      <section id="ueberuns">
        <div className="wrap">
          <span className="eyebrow">wer dahinter steckt</span>
          <h3 className="big">Drei Männer, ein Tiger</h3>
          <p className="lead">
            Seit über 15 Jahren wird im Tiger – im Volksmund liebevoll s&apos;Tigerli genannt – gewirtet, gekocht
            und gelacht. Der Tiger ist auch bekannt für seine legendäre Fasnacht sowie die Metzgete.
          </p>
          <ul className="crew">
            <li className="person">
              <div className="person-kopf">
                <span className="seit">seit Oktober 2010</span>
                <h4>Marc «Gägi»</h4>
              </div>
              <p>
                <strong>Der Gastgeber.</strong> Gägi wirtet seit über 15 Jahren auf dem Tiger und ist das Gesicht des
                Hauses – vorne an der Bar, mitten im Geschehen.
              </p>
            </li>
            <li className="person">
              <div className="person-kopf">
                <span className="seit">seit 2016</span>
                <h4>Alex</h4>
              </div>
              <p>
                <strong>Der Mann am Wok.</strong> Alex schwingt abends die Woks in der Küche und bringt authentische
                Thai-Küche nach Wil – jeden Abend frisch.
              </p>
            </li>
            <li className="person">
              <div className="person-kopf">
                <span className="seit">seit Juni 2024</span>
                <h4>Heinz</h4>
              </div>
              <p>
                <strong>Der Tageskoch.</strong> Heinz bewirtet tagsüber mit einer kleinen, feinen Karte gutbürgerlicher
                Küche – währschaft und ehrlich.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="galerie">
        <div className="wrap">
          <span className="eyebrow">es Bitzli Iiblick</span>
          <h3 className="big">Galerie</h3>
          <p className="lead">Vo de Bar über d&apos;Chuchi bis zur Fasnacht – e churzi Uswahl. Meh gits i eusere Galerie.</p>
          <Gallery images={TEASER_GALLERY_IMAGES} />
          <div className="mehr-row">
            <Link className="btn btn-gold" href="/galerie">
              <IconImage /> Ganzi Galerie ah luege
            </Link>
          </div>
        </div>
      </section>

      <section id="menu">
        <div className="wrap">
          <span className="eyebrow">was uf de Charte staht</span>
          <h3 className="big">Speisekarte</h3>
          <p className="lead">
            Schweizer Küche tagsüber, asiatische Thai-Gerichte am Abend – die Speisekarte variiert mit wechselnden
            Menüs, frisch bleibt sie immer.
          </p>
          <div className="karte">
            <article className="karte-teil tag">
              <div className="karte-foto">
                <Image
                  src="/images/teller19.jpg"
                  alt="Gesottenes Fleisch mit Salzkartoffeln – gutbürgerlich aus der Tiger-Küche"
                  fill
                  sizes="(max-width: 800px) 100vw, 540px"
                />
              </div>
              <div className="karte-text">
                <span className="karte-zeit">Tagsüber · ab 08:30</span>
                <h4>Gutbürgerlich</h4>
                <span className="hand karte-koch">Heinz am Herd</span>
                <dl className="karte-liste">
                  <div>
                    <dt>Kafi, Gipfeli &amp; Znüni</dt>
                    <dd>ab 08:30</dd>
                  </div>
                  <div>
                    <dt>Zmittag</dt>
                    <dd>Schweizer Klassiker</dd>
                  </div>
                  <div>
                    <dt>Abends</dt>
                    <dd>auf Vorbestellung</dd>
                  </div>
                </dl>
              </div>
            </article>
            <article className="karte-teil nacht">
              <div className="karte-foto">
                <Image
                  src="/images/teller21.jpg"
                  alt="Pad Thai mit Limette und Sprossen, frisch aus dem Wok"
                  fill
                  sizes="(max-width: 800px) 100vw, 540px"
                />
              </div>
              <div className="karte-text">
                <span className="karte-zeit">Abends · ab 18:00</span>
                <h4>Thai</h4>
                <span className="hand karte-koch">Alex am Wok</span>
                <dl className="karte-liste">
                  <div>
                    <dt>Gerichte</dt>
                    <dd>2 bis 7 zur Auswahl</dd>
                  </div>
                  <div>
                    <dt>Zubereitung</dt>
                    <dd>frisch aus dem Wok</dd>
                  </div>
                  <div>
                    <dt>Vegetarisch &amp; vegan</dt>
                    <dd>leider nicht</dd>
                  </div>
                  <div>
                    <dt>Ab 4 Personen</dt>
                    <dd>1 Tag im Voraus</dd>
                  </div>
                </dl>
                <a className="karte-link" href="#reservieren">
                  Thai-Znacht reservieren <IconChevronRight />
                </a>
              </div>
            </article>
          </div>
          <div className="karte-fest">
            <span className="hand">Öppis z&apos;fiire?</span>
            <p>Geburtstage, Apéros, Catering &amp; Party-Catering – wir richten&apos;s, ihr geniesst&apos;s.</p>
            <div className="karte-fest-links">
              <a href="tel:+41719102353">
                <IconPhone /> 071 910 23 53
              </a>
              <a href="mailto:tiger_wil@hotmail.ch">
                <IconMail /> E-Mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="dark" id="events">
        <div className="wrap">
          <span className="eyebrow">im Tiger lauft immer öppis</span>
          <h3 className="big">Events</h3>
          <div className="event-legend">
            <div className="ev">
              <span className="hand">D&apos;Tiger-Fasnacht</span>
              <p>
                Legendär und weit über Wil hinaus bekannt. Das ganze Lokal wird verwandelt – ein Fest, das man
                erlebt haben muss.
              </p>
            </div>
            <div className="ev">
              <span className="hand">D&apos;Metzgete</span>
              <p>Tradition pur: Wenn die Metzgete ansteht, ist der Tiger voll. Frühzeitig reservieren lohnt sich.</p>
            </div>
          </div>
          <div className="mehr-row">
            <Link className="btn btn-gold" href="/events">
              <IconCalendar /> Alle Events ansehen
            </Link>
          </div>
        </div>
      </section>

      <section id="zeiten">
        <div className="wrap">
          <span className="eyebrow">wänn de Tiger wach isch</span>
          <div className="zeiten-head">
            <h3 className="big" style={{ marginBottom: 0 }}>
              Öffnungszeiten &amp; Kontakt
            </h3>
          </div>
          <div className="zeiten-grid">
            <div>
              <OpeningHoursTable />
              <p className="oz-note">
                <IconUtensils />
                <span>
                  Thai-Küche jeweils ab 18:00 Uhr geöffnet. Bei Gruppen ab 4 Personen: Reservation 1 Tag im Voraus
                  erforderlich.
                </span>
              </p>
              <p className="oz-note">
                <IconFacebook />
                <span>
                  Die Öffnungszeiten können abweichen – aktuelle Infos auf{" "}
                  <a
                    href="https://www.facebook.com/groups/124167024309517/"
                    target="_blank"
                    rel="noopener"
                    style={{ fontWeight: 600 }}
                  >
                    Facebook
                  </a>
                  .
                </span>
              </p>
            </div>
            <div className="kontakt-card" id="kontakt">
              <h4>Kontakt</h4>
              <p>
                <strong>Restaurant Tiger Wil</strong>
                <br />
                Grabenstrasse 21
                <br />
                9500 Wil SG
              </p>
              <p style={{ marginTop: 14, marginBottom: 10 }}>Marc Gähwiler-Wongprasert</p>
              <p className="kontakt-zeile">
                <IconPhone />
                <a href="tel:+41719102353">071 910 23 53</a>
              </p>
              <p className="kontakt-zeile">
                <IconMail />
                <a href="mailto:tiger_wil@hotmail.ch">tiger_wil@hotmail.ch</a>
              </p>
              <a className="btn btn-gold" href="#reservieren">
                <IconMail /> Tisch reservieren
              </a>
              <a className="kontakt-zeile" style={{ marginTop: 60, fontSize: ".9rem", opacity: 0.8 }}
                  href="https://www.google.com/maps/search/?api=1&query=Restaurant+Tiger+Grabenstrasse+21+9500+Wil"
                  target="_blank"
                  rel="noopener"
                >
                  <IconMapPin /> 
                  Route auf Google Maps planen
                </a>
              <p style={{ fontSize: ".9rem", opacity: 0.8 }}>
                Mitten in der Wiler Altstadt, wenige Gehminuten vom Bahnhof Wil.
              </p>
            </div>
          </div>
          <MapEmbed />
           </div>
      </section>
    </>
  );
}
