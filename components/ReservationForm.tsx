"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { useNow } from "@/hooks/useNow";
import { bietet, type Angebot } from "@/lib/hours";
import { IconInfo, IconMail, IconMoon, IconSun } from "@/components/icons";

const MAIL = "tiger_wil@hotmail.ch";
const GRUPPE_AB = 4; // ab so vielen Personen: 1 Tag im Voraus
const MAX_PERS = 40;
const VORLAUF = 30; // Minuten, die eine Anfrage für heute mindestens vor der gewünschten Zeit eintreffen soll

const hm = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3));

// `bis` = späteste Minute, zu der der Slot heute noch wählbar ist.
const SLOTS: Record<Angebot, { label: string; bis: number }[]> = {
  abig: ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map((t) => ({ label: t, bis: hm(t) })),
  // Provisorisch, bis die Mittagszeiten mit dem Tiger geklärt sind.
  tag: [
    { label: "Mittag", bis: 780 },
    { label: "Nachmittag", bis: 1020 },
  ],
};
const STANDARD_ZEIT: Record<Angebot, string> = { abig: "19:00", tag: "Mittag" };
const ANGEBOT_NAME: Record<Angebot, string> = { abig: "Thai-Abig", tag: "Tagsüber" };

const TAG_KURZ = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
const TAG_LANG = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const MONAT = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const MONAT_KURZ = ["Jan", "Feb", "März", "Apr", "Mai", "Juni", "Juli", "Aug", "Sep", "Okt", "Nov", "Dez"];

const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const ausIso = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const plusTage = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const personen = (n: number) => `${n} Person${n > 1 ? "en" : ""}`;

export function ReservationForm() {
  const now = useNow();
  const [wann, setWann] = useState<Angebot>("abig");
  const [persText, setPersText] = useState("2");
  const [datum, setDatum] = useState("");
  const [anders, setAnders] = useState(false);
  const [zeit, setZeit] = useState(STANDARD_ZEIT.abig);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [versucht, setVersucht] = useState(false);
  const [gesendet, setGesendet] = useState(false);

  const datumRef = useRef<HTMLFieldSetElement | null>(null);
  const zeitRef = useRef<HTMLFieldSetElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const pers = Math.min(MAX_PERS, Math.max(1, parseInt(persText, 10) || 1));
  const heute = now ? iso(now) : "";
  const jetztMin = now ? now.getHours() * 60 + now.getMinutes() : 0;

  const freieZeiten = (d: string, w: Angebot) =>
    SLOTS[w].filter((s) => d !== heute || s.bis >= jetztMin + VORLAUF).map((s) => s.label);

  function sperrgrund(d: string, w: Angebot, p: number): string | null {
    if (d < heute) return "Dieses Datum liegt in der Vergangenheit.";
    const tag = ausIso(d).getDay();
    if (!bietet(tag, w)) {
      return w === "abig" ? `Am ${TAG_LANG[tag]}abend gibt es keine Thai-Küche.` : `Am ${TAG_LANG[tag]} gibt es tagsüber keine Küche.`;
    }
    if (d === heute && p >= GRUPPE_AB) return `Ab ${GRUPPE_AB} Personen bitte mindestens 1 Tag im Voraus reservieren.`;
    if (freieZeiten(d, w).length === 0) return "Für heute ist es dafür schon zu spät.";
    return null;
  }

  // Ein Datum aus den Chips, das durch eine Änderung ungültig wird, wird abgewählt.
  // Ein selbst eingetipptes Datum («Anderes Datum») bleibt stehen und zeigt den Grund an.
  function behalteDatum(w: Angebot, p: number) {
    const ok = !datum || anders || !sperrgrund(datum, w, p);
    if (!ok) setDatum("");
    return ok ? datum : "";
  }

  function waehleWann(w: Angebot) {
    setWann(w);
    const d = behalteDatum(w, pers);
    const frei = d ? freieZeiten(d, w) : SLOTS[w].map((s) => s.label);
    setZeit(frei.includes(STANDARD_ZEIT[w]) ? STANDARD_ZEIT[w] : "");
  }

  function setzePers(text: string) {
    setPersText(text);
    if (text) behalteDatum(wann, Math.min(MAX_PERS, Math.max(1, parseInt(text, 10) || 1)));
  }

  function waehleDatum(d: string) {
    setDatum(d);
    if (d && !freieZeiten(d, wann).includes(zeit)) setZeit("");
  }

  const zeitFrei = !datum || freieZeiten(datum, wann).includes(zeit);
  const fehler = {
    datum: datum ? sperrgrund(datum, wann, pers) : anders ? "Bitte ein Datum eingeben." : "Bitte ein Datum wählen.",
    zeit: !zeit ? "Bitte eine Zeit wählen." : zeitFrei ? null : "Diese Zeit ist für heute schon vorbei.",
    name: name.trim() ? null : "Bitte deinen Namen angeben.",
  };
  const zeige = {
    datum: (versucht || (anders && !!datum)) && fehler.datum,
    zeit: (versucht || !zeitFrei) && fehler.zeit,
    name: versucht && fehler.name,
  };

  const datumText = datum
    ? (() => {
        const d = ausIso(datum);
        return `${TAG_KURZ[d.getDay()]}, ${d.getDate()}. ${MONAT[d.getMonth()]}`;
      })()
    : "Datum?";
  // Geschützte Leerzeichen: «4 Personen» und das «·» bleiben beim Umbruch zusammen.
  const zusammenfassung = [datumText, zeit || "Zeit?", personen(pers).replace(" ", "\u00a0"), ANGEBOT_NAME[wann]].join(
    "\u00a0· "
  );

  function absenden(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setVersucht(true);
    if (fehler.datum) {
      const sel = anders ? 'input[type="date"]' : 'input[type="radio"]:not(:disabled)';
      datumRef.current?.querySelector<HTMLInputElement>(sel)?.focus();
      return;
    }
    if (fehler.zeit) {
      zeitRef.current?.querySelector<HTMLInputElement>("input:not(:disabled)")?.focus();
      return;
    }
    if (fehler.name) {
      nameRef.current?.focus();
      return;
    }

    const d = ausIso(datum);
    const datumCH = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
    const subject = `Reservation ${TAG_KURZ[d.getDay()]}, ${datumCH} – ${personen(pers)}, ${ANGEBOT_NAME[wann]}`;
    const body =
      "Hallo Tiger-Team\n\nIch möchte gerne reservieren:\n\n" +
      `Datum: ${TAG_LANG[d.getDay()]}, ${d.getDate()}. ${MONAT[d.getMonth()]} ${d.getFullYear()}\n` +
      `Zeit: ${zeit} (${ANGEBOT_NAME[wann]})\n` +
      `Personen: ${pers}\n` +
      `Name: ${name.trim()}\n` +
      `Telefon: ${tel.trim() || "–"}\n\n` +
      "Merci und bis bald!";
    setGesendet(true);
    window.location.href = `mailto:${MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const tage = now ? Array.from({ length: 7 }, (_, i) => plusTage(now, i)) : [];

  return (
    <div className="resa-box" id="reservieren">
      <div className="resa-kopf">
        <h4>Platz sichern – direkt per E-Mail</h4>
        <p>
          Wähl aus, wann und mit wie vielen Personen du kommst – wir bereiten die Anfrage als E-Mail vor. Wir melden
          uns mit der Bestätigung.
        </p>
      </div>

      <form className="resa-form" onSubmit={absenden} noValidate>
        <div className="resa-spalte">
          <fieldset className="resa-gruppe">
            <legend>Wann?</legend>
            {/* Wie die geteilte Startseite: Tag links, Abig rechts – die gewählte Hälfte «geht an». */}
            <div className="wann-wahl">
              <label className="wann tag">
                <input
                  type="radio"
                  name="r-wann"
                  value="tag"
                  className="sr-only"
                  checked={wann === "tag"}
                  onChange={() => waehleWann("tag")}
                />
                <Image className="wann-foto" src="/images/teller11.jpg" alt="" fill sizes="(max-width: 860px) 50vw, 240px" />
                <span className="wann-inhalt">
                  <IconSun />
                  <span>
                    <span className="wann-zeit">ab 08:30</span>
                    <span className="wann-titel">Tagsüber</span>
                    <span className="wann-sub hand">gutbürgerlich</span>
                  </span>
                </span>
              </label>
              <label className="wann abig">
                <input
                  type="radio"
                  name="r-wann"
                  value="abig"
                  className="sr-only"
                  checked={wann === "abig"}
                  onChange={() => waehleWann("abig")}
                />
                <Image className="wann-foto" src="/images/teller5.1.jpg" alt="" fill sizes="(max-width: 860px) 50vw, 240px" />
                <span className="wann-inhalt">
                  <IconMoon />
                  <span>
                    <span className="wann-zeit">ab 18:00</span>
                    <span className="wann-titel">Abig</span>
                    <span className="wann-sub hand">Thai us em Wok</span>
                  </span>
                </span>
              </label>
              <span className="wann-balken" aria-hidden="true" />
            </div>
          </fieldset>

          <div className="resa-gruppe">
            <label className="resa-label" htmlFor="r-pers">
              Personen
            </label>
            <div className="stepper">
              <button
                type="button"
                aria-label="Eine Person weniger"
                disabled={pers <= 1}
                onClick={() => setzePers(String(pers - 1))}
              >
                −
              </button>
              <input
                id="r-pers"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={persText}
                onChange={(e) => setzePers(e.target.value.replace(/\D/g, "").slice(0, 2))}
                onBlur={() => setPersText(String(pers))}
              />
              <button
                type="button"
                aria-label="Eine Person mehr"
                disabled={pers >= MAX_PERS}
                onClick={() => setzePers(String(pers + 1))}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="resa-spalte">
          <fieldset className="resa-gruppe" ref={datumRef} aria-describedby={zeige.datum ? "f-datum" : undefined}>
            <legend>Datum</legend>
            <div className="chip-raster">
              {now
                ? tage.map((d, i) => {
                    const wert = iso(d);
                    const grund = sperrgrund(wert, wann, pers);
                    return (
                      <label key={wert} className="chip datum-chip">
                        <input
                          type="radio"
                          name="r-datum"
                          value={wert}
                          className="sr-only"
                          checked={!anders && datum === wert}
                          disabled={!!grund}
                          onChange={() => {
                            setAnders(false);
                            waehleDatum(wert);
                          }}
                        />
                        <span className="wt">{i === 0 ? "Heute" : TAG_KURZ[d.getDay()]}</span>
                        <span className="dt">
                          {d.getDate()}. {MONAT_KURZ[d.getMonth()]}
                        </span>
                        {grund && <span className="sr-only"> – {grund}</span>}
                      </label>
                    );
                  })
                : Array.from({ length: 7 }, (_, i) => <span key={i} className="chip datum-chip leer" />)}
              <label className="chip datum-chip">
                <input
                  type="radio"
                  name="r-datum"
                  value="anders"
                  className="sr-only"
                  checked={anders}
                  onChange={() => setAnders(true)}
                />
                <span className="wt">Anderes</span>
                <span className="dt">Datum</span>
              </label>
            </div>
            {anders && (
              <input
                type="date"
                className="resa-datum"
                aria-label="Datum wählen"
                min={heute}
                value={datum}
                aria-invalid={zeige.datum ? true : undefined}
                onChange={(e) => waehleDatum(e.target.value)}
              />
            )}
            {pers >= GRUPPE_AB && (
              <p className="resa-hinweis">
                <IconInfo />
                <span>
                  Ab {GRUPPE_AB} Personen reservieren wir mindestens <strong>1 Tag im Voraus</strong> – «Heute» ist
                  darum nicht wählbar. Kurzfristig? Ruf an: <a href="tel:+41719102353">071 910 23 53</a>
                </span>
              </p>
            )}
            {zeige.datum && (
              <p className="fehler" id="f-datum">
                {fehler.datum}
              </p>
            )}
          </fieldset>

          <fieldset className="resa-gruppe" ref={zeitRef} aria-describedby={zeige.zeit ? "f-zeit" : undefined}>
            <legend>Uhrzeit</legend>
            <div className={"chip-raster" + (wann === "tag" ? " zwei" : "")}>
              {SLOTS[wann].map((s) => (
                <label key={s.label} className="chip">
                  <input
                    type="radio"
                    name="r-zeit"
                    value={s.label}
                    className="sr-only"
                    checked={zeit === s.label}
                    disabled={!!datum && !freieZeiten(datum, wann).includes(s.label)}
                    onChange={() => setZeit(s.label)}
                  />
                  {s.label}
                </label>
              ))}
            </div>
            {zeige.zeit && (
              <p className="fehler" id="f-zeit">
                {fehler.zeit}
              </p>
            )}
          </fieldset>
        </div>

        <div className="resa-kontakt">
          <div className="feld">
            <label htmlFor="r-name">Name</label>
            <input
              ref={nameRef}
              id="r-name"
              type="text"
              autoComplete="name"
              placeholder="Vor- und Nachname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={zeige.name ? true : undefined}
              aria-describedby={zeige.name ? "f-name" : undefined}
              required
            />
            {zeige.name && (
              <p className="fehler" id="f-name">
                {fehler.name}
              </p>
            )}
          </div>
          <div className="feld">
            <label htmlFor="r-tel">
              Telefon <span className="optional">(optional)</span>
            </label>
            <input
              id="r-tel"
              type="tel"
              autoComplete="tel"
              placeholder="z. B. 079 123 45 67"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
        </div>

        <div className="resa-abschluss">
          <div className="zettel">
            <span className="zettel-titel">Deine Anfrage</span>
            <p>{zusammenfassung}</p>
          </div>
          <div className="resa-senden">
            <button className="btn btn-gold" type="submit">
              <IconMail /> Anfrage per E-Mail senden
            </button>
            <p className="klein">
              Öffnet dein E-Mail-Programm. Lieber telefonisch? <a href="tel:+41719102353">071 910 23 53</a>
            </p>
            {gesendet && (
              <p className="klein" role="status">
                Kein E-Mail-Programm aufgegangen? Schreib uns direkt an <a href={`mailto:${MAIL}`}>{MAIL}</a>.
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
