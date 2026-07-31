import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/Hero";
import { TigerzeitDial } from "@/components/TigerzeitDial";
import { ReservationForm } from "@/components/ReservationForm";
import { Gallery, TEASER_GALLERY_IMAGES } from "@/components/Gallery";
import { OpeningHoursTable } from "@/components/OpeningHoursTable";
import { StatusChip } from "@/components/StatusChip";
import {
  IconCalendar,
  IconCup,
  IconFacebook,
  IconImage,
  IconMail,
  IconMapPin,
  IconMask,
  IconMoon,
  IconMugHot,
  IconPhone,
  IconSparkles,
  IconSun,
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
          <Reveal>
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
          </Reveal>
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
            <Reveal>
              <span className="eyebrow">de Abig ghört Thailand</span>
              <h3 className="big">Authentische Thai-Küche, jeden Abend frisch</h3>
              <p className="lead">
                Ab 18:00 Uhr übernimmt Alex die Küche und bringt asiatische Aromen direkt aus Bangkok nach Wil.
                Alles wird frisch zubereitet – so wie es sein muss. Die Karte wechselt laufend, damit es nie
                langweilig wird.
              </p>
            </Reveal>
          </div>

          <Reveal as="div" className="stat-row">
            <div className="stat">
              <div className="n">2–7</div>
              <p>wechselnde Thai-Gerichte zur Auswahl – die Karte variiert mit den Menüs.</p>
            </div>
            <div className="stat">
              <div className="n">100% frisch</div>
              <p>Alles kommt frisch aus dem Wok. Keine vegetarischen und veganen Gerichte.</p>
            </div>
            <div className="stat">
              <div className="n">ab 4 Pers.</div>
              <p>Reservation 1 Tag im Voraus erforderlich – damit alles frisch für euch bereitsteht.</p>
            </div>
          </Reveal>

          <ReservationForm />
        </div>
      </section>

      <section className="dark" id="erwarten">
        <div className="wrap">
          <span className="eyebrow">was dich erwartet</span>
          <h3 className="big">
            Kein Schnickschnack.
            <br />
            Dafür echt.
          </h3>
          <div className="erwarten-list">
            <Reveal as="div" className="erw">
              <span className="ico">
                <IconUtensils />
              </span>
              <div>
                <h4>Ehrliches Essen</h4>
                <p>Tagsüber Schweizer Klassiker, abends Thai wie in Bangkok – beides ohne Kompromisse.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="erw">
              <span className="ico">
                <IconCup />
              </span>
              <div>
                <h4>Beiz-Atmosphäre</h4>
                <p>
                  Ungezwungen, laut wenn&apos;s lustig wird, ruhig wenn&apos;s passt. Man kennt sich – oder lernt
                  sich kennen.
                </p>
              </div>
            </Reveal>
            <Reveal as="div" className="erw">
              <span className="ico">
                <IconSun />
              </span>
              <div>
                <h4>Garten im Sommer</h4>
                <p>Sobald die Sonne mitmacht, sitzt man draussen – Feierabendbier inklusive.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="erw">
              <span className="ico">
                <IconMask />
              </span>
              <div>
                <h4>Legendäre Feste</h4>
                <p>Die Tiger-Fasnacht und die Metzgete sind in Wil Kult. Wer einmal dabei war, kommt wieder.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="erw">
              <span className="ico">
                <IconSparkles />
              </span>
              <div>
                <h4>Feste feiern</h4>
                <p>Geburtstage, Apéros, Catering &amp; Party-Catering – wir richten&apos;s, ihr geniesst&apos;s.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="erw">
              <span className="ico">
                <IconUsers />
              </span>
              <div>
                <h4>Alle willkommen</h4>
                <p>Vom Lehrling bis zur Chefin, vom Handwerker bis zum Bänker – hier hat&apos;s Platz für alle.</p>
              </div>
            </Reveal>
          </div>
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
          <div className="crew">
            <Reveal as="article" className="person">
              <span className="seit">seit Oktober 2010</span>
              <h4>Marc «Gägi»</h4>
              <p>
                Der Gastgeber. Gägi wirtet seit über 15 Jahren auf dem Tiger und ist das Gesicht des Hauses – vorne
                an der Bar, mitten im Geschehen.
              </p>
            </Reveal>
            <Reveal as="article" className="person">
              <span className="seit">seit 2016</span>
              <h4>Alex</h4>
              <p>
                Der Mann am Wok. Alex schwingt abends die Woks in der Küche und bringt authentische Thai-Küche nach
                Wil – jeden Abend frisch.
              </p>
            </Reveal>
            <Reveal as="article" className="person">
              <span className="seit">seit Juni 2024</span>
              <h4>Heinz</h4>
              <p>
                Der Tageskoch. Heinz bewirtet tagsüber mit einer kleinen, feinen Karte gutbürgerlicher Küche –
                währschaft und ehrlich.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="galerie">
        <div className="wrap">
          <span className="eyebrow">es Bitzli Iiblick</span>
          <h3 className="big">Galerie</h3>
          <p className="lead">Vo de Bar über d&apos;Chuchi bis zur Fasnacht – e churzi Uswahl. Meh gits i eusere Galerie.</p>
          <Gallery images={TEASER_GALLERY_IMAGES} />
          <Reveal as="div" className="mehr-row">
            <Link className="btn btn-gold" href="/galerie">
              <IconImage /> Ganzi Galerie ah luege
            </Link>
          </Reveal>
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
          <div className="menu-cols">
            <Reveal as="div" className="menu-card day">
              <h4>
                <IconSun /> Tagsüber – Gutbürgerlich
              </h4>
              <ul>
                <li>Kleine Karte mit Schweizer Klassikern, gekocht von Heinz</li>
                <li>Kafi, Gipfeli &amp; Znüni ab 08:30 Uhr</li>
                <li>Gutbürgerliche Küche abends auf Vorbestellung</li>
              </ul>
            </Reveal>
            <Reveal as="div" className="menu-card night">
              <h4>
                <IconMoon /> Abends – Thai ab 18:00
              </h4>
              <ul>
                <li>Immer 2 bis 7 Thai-Gerichte zur Auswahl</li>
                <li>Alles frisch aus dem Wok von Alex</li>
                <li>Keine vegetarischen und veganen Gerichte</li>
                <li>Ab 4 Personen: Reservation 1 Tag im Voraus</li>
              </ul>
            </Reveal>
          </div>
          <Reveal as="div" className="menu-note">
            <strong>Wir empfehlen uns auch für:</strong> Geburtstage, Apéros, Catering &amp; Party-Catering. Für
            Informationen erreicht ihr uns unter{" "}
            <a href="tel:+41719102353">
              <strong>071 910 23 53</strong>
            </a>{" "}
            oder per{" "}
            <a href="mailto:tiger_wil@hotmail.ch">
              <strong>E-Mail</strong>
            </a>
            .
          </Reveal>
        </div>
      </section>

      <section className="dark" id="events">
        <div className="wrap">
          <span className="eyebrow">im Tiger lauft immer öppis</span>
          <h3 className="big">Events</h3>
          <div className="event-legend">
            <Reveal as="div" className="ev">
              <span className="hand">D&apos;Tiger-Fasnacht</span>
              <p>
                Legendär und weit über Wil hinaus bekannt. Das ganze Lokal wird verwandelt – ein Fest, das man
                erlebt haben muss.
              </p>
            </Reveal>
            <Reveal as="div" className="ev">
              <span className="hand">D&apos;Metzgete</span>
              <p>Tradition pur: Wenn die Metzgete ansteht, ist der Tiger voll. Frühzeitig reservieren lohnt sich.</p>
            </Reveal>
          </div>
          <Reveal as="div" className="mehr-row">
            <Link className="btn btn-gold" href="/events">
              <IconCalendar /> Alle Events ansehen
            </Link>
          </Reveal>
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
            <Reveal>
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
            </Reveal>
            <Reveal as="div" className="kontakt-card" id="kontakt">
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
            </Reveal>
          </div>
          <div className="map-embed">
            <iframe
              src="https://maps.google.com/maps?q=Grabenstrasse%2021%2C%209500%20Wil&z=16&output=embed"
              title="Karte: Restaurant Tiger Wil, Grabenstrasse 21, 9500 Wil SG"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
           </div>
      </section>
    </>
  );
}
