"use client";

import { useEffect, useState } from "react";
import { OZ_ROWS } from "@/lib/hours";

export function OpeningHoursTable() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(new Date().getDay());
  }, []);

  return (
    <table className="oz" id="oztable">
      <tbody>
        {OZ_ROWS.map((row) => (
          <tr key={row.day} className={row.day === today ? "heute" : undefined}>
            <td>
              {row.label}
              {row.day === today && <span className="heute-tag">Heute</span>}
            </td>
            <td>{row.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
