"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/hooks/useConsent";
import { IconMapPin } from "@/components/icons";

export function MapEmbed() {
  const consent = useConsent();

  return (
    <div className="map-embed">
      {consent === "ja" ? (
        <iframe
          src="https://maps.google.com/maps?q=Grabenstrasse%2021%2C%209500%20Wil&z=16&output=embed"
          title="Karte: Restaurant Tiger Wil, Grabenstrasse 21, 9500 Wil SG"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="map-platzhalter">
          <IconMapPin />
          <p>
            <strong>Restaurant Tiger Wil</strong>
            <br />
            Grabenstrasse 21, 9500 Wil SG
          </p>
          <button type="button" className="btn btn-ghost-dark" onClick={() => setConsent("ja")}>
            Karte laden (Google Maps)
          </button>
          <p className="klein">
            Beim Laden der Karte erhält Google Daten wie deine IP-Adresse. <Link href="/datenschutz">Datenschutz</Link>
          </p>
        </div>
      )}
    </div>
  );
}
