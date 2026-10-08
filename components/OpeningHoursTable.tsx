"use client";

import { useNow } from "@/hooks/useNow";
import { OZ_ROWS } from "@/lib/hours";

export function OpeningHoursTable() {
  const today = useNow()?.getDay() ?? null;

  return (
    <table className="oz" id="oztable">
      <tbody>
        {OZ_ROWS.map((row) => (
          <tr key={row.day} className={row.day === today ? "heute" : undefined}>
            <td>{row.label}</td>
            <td>{row.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
