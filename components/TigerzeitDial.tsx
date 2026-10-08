"use client";

import { useNow } from "@/hooks/useNow";
import { fmt, offenZwischen, openState, PHASEN } from "@/lib/hours";

// Vier gleich breite Abschnitte, passend zu den vier Spalten darunter. [von, bis) in Minuten ab Mitternacht
// (über 1440 = nach Mitternacht). `kern` ist die Zeit, in der das Angebot wirklich läuft – danach wird gedimmt.
const SEGMENTE = [
  { von: 510, bis: 690, kern: [510, 690], t: "08:30", l: "Kafi & Gipfeli", text: "Der Tag beginnt am Stammtisch." },
  { von: 690, bis: 1080, kern: [690, 840], t: "Mittag", l: "Gut\u00adbürgerlich", text: "Heinz tischt Schweizer Klassiker auf." },
  { von: 1080, bis: 1320, kern: [1080, 1320], t: "18:00", l: "Thai-Küche", text: "Alex feuert die Woks an – mit Reservation." },
  { von: 1320, bis: 1560, kern: [1320, 1560], t: "Spät", l: "Bar-Betrieb", text: "Fr & Sa bis 02:00 Uhr. Abgmacht." },
] as const;

function lageAm(now: Date) {
  let mins = now.getHours() * 60 + now.getMinutes();
  let tag = now.getDay();
  // Bis 02:00 gehört die Nacht noch zum Vortag.
  if (mins < 120) {
    mins += 1440;
    tag = (tag + 6) % 7;
  }
  const s = openState(now);
  const seg = s.offen ? SEGMENTE.findIndex((x) => mins >= x.von && mins < x.bis) : -1;
  const marker = seg >= 0 ? (seg + (mins - SEGMENTE[seg].von) / (SEGMENTE[seg].bis - SEGMENTE[seg].von)) * 25 : null;

  let phase: string;
  if (s.offen) phase = PHASEN.find(([a, b]) => mins >= a && mins < b)?.[2] ?? "offen";
  else phase = s.heute ? `geschlossen, ab ${fmt(s.ab)} Uhr offen` : `geschlossen, morgen ab ${fmt(s.ab)} Uhr offen`;

  const zu = SEGMENTE.map((x, i) => i !== seg && !offenZwischen(tag, x.kern[0], x.kern[1]));
  return { marker, phase, zu };
}

export function TigerzeitDial() {
  const now = useNow();
  const lage = now ? lageAm(now) : null;

  return (
    <div className="zeitstrip">
      <div className="wrap">
        <p className="dial-titel hand">En Tag im Tiger</p>
        {lage && <p className="sr-only">Jetzt: {lage.phase}</p>}
        <div className="dial-track" aria-hidden="true">
          <div className="dial-segs">
            {SEGMENTE.map((x, i) => (
              <span key={x.t} className={"dial-seg" + (lage?.zu[i] ? " zu" : "")} />
            ))}
          </div>
          {lage?.marker != null && <span className="dial-marker" style={{ left: `${lage.marker}%` }} />}
        </div>
        <ol className="dial-ticks">
          {SEGMENTE.map((x, i) => (
            <li key={x.t} className={"dial-tick" + (lage?.zu[i] ? " zu" : "")}>
              <span className="t">{x.t}</span>
              <span className="l">{x.l}</span>
              <span className="d">{x.text}</span>
              {lage?.zu[i] && <span className="sr-only"> (heute nicht)</span>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
