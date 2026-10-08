import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/CookieBanner";
import { IconInfo, IconMail, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Restaurant Tiger Wil, Grabenstrasse 21, 9500 Wil SG.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <div className="seiten-hero">
        <div className="wrap">
          <span className="eyebrow hand">was mit dine Date passiert</span>
          <h1>Datenschutz</h1>
        </div>
      </div>

      <section className="recht" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <p className="vorlage">
            <IconInfo />
            <span>
              <strong>Vorlage:</strong> Diese Datenschutzerklärung ist ein Entwurf und muss vom Betreiber vor der
              Veröffentlichung geprüft und ergänzt werden.
            </span>
          </p>

          <h2>Verantwortlich</h2>
          <div className="karte">
            <p style={{ marginBottom: 4 }}>
              <strong>Restaurant Tiger Wil</strong>
            </p>
            <p style={{ marginBottom: 4 }}>Marc Gähwiler-Wongprasert</p>
            <p style={{ marginBottom: 12 }}>
              Grabenstrasse 21
              <br />
              9500 Wil SG
              <br />
              Schweiz
            </p>
            <p className="kontakt-zeile" style={{ marginBottom: 4 }}>
              <IconPhone />
              <a href="tel:+41719102353">071 910 23 53</a>
            </p>
            <p className="kontakt-zeile" style={{ marginBottom: 0 }}>
              <IconMail />
              <a href="mailto:tiger_wil@hotmail.ch">tiger_wil@hotmail.ch</a>
            </p>
          </div>

          <h2>Grundsatz</h2>
          <p>
            Wir bearbeiten Personendaten nur so weit, wie es für den Betrieb dieser Website und die Beantwortung
            deiner Anfragen nötig ist – im Einklang mit dem Schweizer Datenschutzgesetz (DSG).
          </p>

          <h2>Hosting und Server-Logfiles</h2>
          <p>
            Diese Website wird bei <strong>[Hosting-Anbieter – noch zu ergänzen]</strong> betrieben. Beim Aufruf
            einer Seite verarbeitet der Anbieter technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, die
            aufgerufene Seite und den verwendeten Browser. Diese Daten dienen nur dem sicheren und stabilen Betrieb
            und werden nicht mit anderen Daten zusammengeführt.
          </p>

          <h2>Kontakt und Reservation per E-Mail</h2>
          <p>
            Das Reservationsformular sendet keine Daten an unseren Server. Es öffnet dein eigenes E-Mail-Programm mit
            einer vorbereiteten Nachricht. Deine Angaben (Name, Telefon, Datum, Anzahl Personen) erreichen uns erst,
            wenn du diese E-Mail selbst abschickst. Wir verwenden sie nur, um deine Reservation oder Anfrage zu
            bearbeiten.
          </p>
          <p>
            Unser E-Mail-Postfach wird von Microsoft (Outlook.com) betrieben. E-Mails können dabei auch auf Servern
            ausserhalb der Schweiz gespeichert werden.
          </p>

          <h2>Google Maps</h2>
          <p>
            Auf der Startseite kann eine Karte von Google Maps (Google Ireland Limited bzw. Google LLC, USA)
            eingebettet werden. Die Karte wird <strong>erst nach deiner Einwilligung</strong> geladen. Dann
            überträgt dein Browser Daten wie deine IP-Adresse an Google, und Google kann Cookies setzen. Details
            findest du in der{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
              Datenschutzerklärung von Google
            </a>
            .
          </p>
          <p>
            Deine Einwilligung kannst du jederzeit widerrufen: <CookieSettingsButton />
          </p>

          <h2>Cookies und lokale Speicherung</h2>
          <p>
            Wir selbst setzen keine Cookies. Deine Wahl zur Google-Karte speichern wir nur lokal in deinem Browser
            (localStorage, Eintrag «tiger-consent»). Diese Angabe wird nicht an uns übertragen.
          </p>

          <h2>Keine Analyse-Tools, Schriften lokal</h2>
          <p>
            Wir verwenden keine Analyse- oder Tracking-Dienste. Die Schriften dieser Website werden von unserem
            eigenen Server ausgeliefert – es besteht dafür keine Verbindung zu Google Fonts.
          </p>

          <h2>Links zu Facebook</h2>
          <p>
            Unsere Website verlinkt auf unsere Facebook-Gruppe. Erst wenn du einen solchen Link anklickst, verlässt du
            unsere Website. Für Facebook gelten die Datenschutzbestimmungen von Meta.
          </p>

          <h2>Deine Rechte</h2>
          <p>
            Du kannst jederzeit Auskunft über deine bei uns gespeicherten Daten verlangen und deren Berichtigung oder
            Löschung beantragen. Du kannst der Bearbeitung widersprechen und eine Einwilligung jederzeit widerrufen.
            Schreib uns dazu an{" "}
            <a href="mailto:tiger_wil@hotmail.ch">tiger_wil@hotmail.ch</a>. Ausserdem kannst du dich beim
            Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) beschweren.
          </p>

          <h2>Änderungen</h2>
          <p>Wir passen diese Datenschutzerklärung an, wenn sich unsere Website ändert. Stand: Oktober 2026.</p>
        </div>
      </section>
    </>
  );
}
