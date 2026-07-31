export type OpenState =
  | { offen: true; bis: number }
  | { offen: false; ab: number; heute: boolean };

// [start, end] in minutes since midnight, per weekday (0=Sun..6=Sat). End can exceed 1440 for after-midnight closing.
const SCHED: Record<number, [number, number][]> = {
  0: [[570, 1080]],
  1: [[960, 1440]],
  2: [[510, 1440]],
  3: [[510, 1440]],
  4: [[510, 1440]],
  5: [[510, 1560]],
  6: [[510, 1560]],
};

export function fmt(min: number): string {
  if (min === 1440) return "24:00";
  min = min % 1440;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
}

export function openState(now: Date): OpenState {
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const gest = (day + 6) % 7;
  for (const [, b] of SCHED[gest]) {
    if (b > 1440 && mins < b - 1440) return { offen: true, bis: b - 1440 };
  }
  for (const [a, b] of SCHED[day]) {
    if (mins >= a && mins < b) return { offen: true, bis: b };
    if (mins < a) return { offen: false, ab: a, heute: true };
  }
  const morn = (day + 1) % 7;
  return { offen: false, ab: SCHED[morn][0][0], heute: false };
}

export const PHASEN: [number, number, string][] = [
  [510, 690, "Kafi & Gipfeli"],
  [690, 840, "Gutbürgerlicher Zmittag"],
  [840, 1080, "Kafi, Bier & Stammtisch"],
  [1080, 1320, "Thai-Zeit – Alex am Wok"],
  [1320, 1560, "Bar-Zeit"],
];

export function statusText(s: OpenState): { label: string; sub: string } {
  if (s.offen) {
    return { label: "Jetzt offen", sub: `bis ${fmt(s.bis)} Uhr` };
  }
  if (s.heute) {
    return { label: "Geschlossen", sub: `öffnet um ${fmt(s.ab)} Uhr` };
  }
  return { label: "Geschlossen", sub: `öffnet morgen um ${fmt(s.ab)} Uhr` };
}

export const OZ_ROWS: { day: number; label: string; hours: string }[] = [
  { day: 1, label: "Montag", hours: "16:00 – 24:00 Uhr" },
  { day: 2, label: "Dienstag", hours: "08:30 – 24:00 Uhr" },
  { day: 3, label: "Mittwoch", hours: "08:30 – 24:00 Uhr" },
  { day: 4, label: "Donnerstag", hours: "08:30 – 24:00 Uhr" },
  { day: 5, label: "Freitag", hours: "08:30 – 02:00 Uhr" },
  { day: 6, label: "Samstag", hours: "08:30 – 02:00 Uhr" },
  { day: 0, label: "Sonntag", hours: "09:30 – 18:00 Uhr" },
];
