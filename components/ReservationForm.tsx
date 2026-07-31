"use client";

import { useEffect, useRef, useState } from "react";
import { IconMail, IconInfo, IconPhone } from "@/components/icons";

const iso = (x: Date) =>
  x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0");

export function ReservationForm() {
  const [today, setToday] = useState("");
  const [datum, setDatum] = useState("");
  const [pers, setPers] = useState("2");
  const nameRef = useRef<HTMLInputElement | null>(null);
  const datumRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const t = iso(new Date());
    setToday(t);
    setDatum(t);
  }, []);

  const zeigeHinweis = parseInt(pers || "0", 10) >= 4 && datum === today;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = nameRef.current?.value.trim() ?? "";
    if (!datum || !name) {
      (datum ? nameRef.current : datumRef.current)?.focus();
      return;
    }
    const zeit = (form.elements.namedItem("r-zeit") as HTMLSelectElement).value;
    const tel = (form.elements.namedItem("r-tel") as HTMLInputElement).value.trim();
    const datumCH = datum.split("-").reverse().join(".");
    const subject = `Reservation ${datumCH} – ${pers} Person${Number(pers) > 1 ? "en" : ""}`;
    const body =
      "Hallo Tiger-Team\n\nIch möchte gerne reservieren:\n\n" +
      "Datum: " + datumCH + "\nUhrzeit: " + zeit + "\nAnzahl Personen: " + pers +
      "\nName: " + name + "\nTelefon: " + (tel || "–") +
      "\n\nMerci und bis bald!";
    window.location.href =
      "mailto:tiger_wil@hotmail.ch?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  return (
    <div className="resa-box reveal in" id="reservieren">
      <div className="intro">
        <h4>Platz sichern – direkt per E-Mail</h4>
        <p>
          Datum, Zeit und Anzahl Personen wählen – wir bereiten deine Reservationsanfrage als E-Mail vor. Absenden,
          fertig. Wir melden uns mit der Bestätigung.
        </p>
        <p>Lieber persönlich? Kein Problem:</p>
        <div className="resa-alt">
          <a className="btn btn-ghost-dark" href="tel:+41719102353">
            <IconPhone /> 071 910 23 53
          </a>
        </div>
      </div>
      <form className="resa-form" onSubmit={handleSubmit} noValidate>
        <div className="feld">
          <label htmlFor="r-datum">Datum</label>
          <input
            ref={datumRef}
            type="date"
            id="r-datum"
            name="r-datum"
            min={today}
            value={datum}
            onChange={(e) => setDatum(e.target.value)}
            required
          />
        </div>
        <div className="feld">
          <label htmlFor="r-zeit">Uhrzeit</label>
          <select id="r-zeit" name="r-zeit" defaultValue="19:00">
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
            <option>21:00</option>
            <option value="tagsüber">Tagsüber (gutbürgerlich)</option>
          </select>
        </div>
        <div className="feld">
          <label htmlFor="r-pers">Personen</label>
          <input
            type="number"
            id="r-pers"
            name="r-pers"
            min={1}
            max={40}
            value={pers}
            onChange={(e) => setPers(e.target.value)}
            required
          />
        </div>
        <div className="feld">
          <label htmlFor="r-name">Name</label>
          <input ref={nameRef} type="text" id="r-name" name="r-name" placeholder="Vor- und Nachname" autoComplete="name" required />
        </div>
        <div className="feld voll">
          <label htmlFor="r-tel">
            Telefon <span style={{ opacity: 0.6, textTransform: "none" }}>(für Rückfragen)</span>
          </label>
          <input type="tel" id="r-tel" name="r-tel" placeholder="z. B. 079 123 45 67" autoComplete="tel" />
        </div>
        <p className={"resa-hinweis" + (zeigeHinweis ? " an" : "")}>
          <IconInfo />
          <span>
            Ab 4 Personen bitte mindestens <strong>1 Tag im Voraus</strong> reservieren – wähle ein Datum ab morgen.
          </span>
        </p>
        <button className="btn btn-gold" type="submit">
          <IconMail /> Reservationsanfrage senden
        </button>
      </form>
    </div>
  );
}
