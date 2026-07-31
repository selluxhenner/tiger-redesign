"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { openState, fmt, PHASEN } from "@/lib/hours";

const easeOut = [0.22, 1, 0.36, 1] as const;

const TICKS = [
  { t: "08:30", l: "Kafi & Gipfeli", text: "Der Tag beginnt am Stammtisch." },
  { t: "Mittag", l: "Gutbürgerlich", text: "Heinz tischt Schweizer Klassiker auf." },
  { t: "18:00", l: "Thai-Küche", text: "Alex feuert die Woks an – mit Reservation." },
  { t: "Spät", l: "Bar-Betrieb", text: "Fr & Sa bis 02:00 Uhr. Abgmacht." },
];

export function TigerzeitDial() {
  const [marker, setMarker] = useState<{ left: number } | null>(null);
  const [phase, setPhase] = useState("–");

  useEffect(() => {
    const render = () => {
      const now = new Date();
      let mins = now.getHours() * 60 + now.getMinutes();
      if (mins < 120) mins += 1440;
      const s = openState(now);
      if (mins >= 510 && mins <= 1560 && s.offen) {
        const p = ((mins - 510) / (1560 - 510)) * 100;
        setMarker({ left: p });
        let label = "Offe";
        for (const [a, b, l] of PHASEN) {
          if (mins >= a && mins < b) {
            label = l;
            break;
          }
        }
        setPhase(label);
      } else {
        setMarker(null);
        setPhase(s.offen ? "Offe" : s.heute ? `de Tiger schlaft no – ab ${fmt(s.ab)} Uhr für dich da` : "de Tiger schlaft – bis morn!");
      }
    };
    render();
    const id = setInterval(render, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="zeitstrip" aria-label="Ein Tag im Tiger – live">
      <div className="wrap">
        <motion.div
          className="dial-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="hand">En Tag im Tiger</span>
          <span className="dial-now" role="status">
            Jetzt: <strong>{phase}</strong>
          </span>
        </motion.div>
        <motion.div
          className="dial-track"
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.25, ease: easeOut }}
          style={{ transformOrigin: "left center" }}
        >
          <motion.span
            className={"dial-marker" + (marker ? " an" : "")}
            style={marker ? { left: `${marker.left}%` } : undefined}
            title="Jetzt"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 1.05, ease: easeOut }}
          />
        </motion.div>
        <motion.div
          className="dial-ticks"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14, delayChildren: 0.45 } },
          }}
        >
          {TICKS.map((tick) => (
            <motion.div
              className="dial-tick"
              key={tick.t}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
            >
              <div className="t">{tick.t}</div>
              <div className="l">{tick.l}</div>
              {tick.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
