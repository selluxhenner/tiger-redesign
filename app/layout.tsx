import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
});

const SITE_URL = "https://tiger-wil.ch";
const DEFAULT_TITLE = "Restaurant Tiger Wil – Bar & Thai-Restaurant in Wil SG";
const DEFAULT_DESCRIPTION =
  "S'Tigerli in Wil SG: Restaurant, Bar und Treffpunkt an der Grabenstrasse. Tagsüber Schweizer Küche, abends authentisch Thai frisch aus dem Wok.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Restaurant Tiger Wil",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Tiger Wil",
    "Restaurant Wil",
    "Thai Wil",
    "Bar Wil",
    "Tigerli Wil",
    "asiatisch Wil",
    "Restaurant Wil SG",
    "Thai Restaurant Wil SG",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: "Restaurant Tiger Wil",
    locale: "de_CH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#241108",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restaurant Tiger Wil",
  alternateName: ["Tiger Wil", "Tigerli Wil", "s'Tigerli", "Restaurant Tiger"],
  description: DEFAULT_DESCRIPTION,
  image: `${SITE_URL}/images/exterior.jpg`,
  url: SITE_URL,
  telephone: "+41719102353",
  email: "tiger_wil@hotmail.ch",
  servesCuisine: ["Thai", "Asiatisch", "Schweizerisch"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grabenstrasse 21",
    postalCode: "9500",
    addressLocality: "Wil SG",
    addressCountry: "CH",
  },
  geo: { "@type": "GeoCoordinates", latitude: 47.4614, longitude: 9.043 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "16:00", closes: "24:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "08:30", closes: "24:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "08:30", closes: "02:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:30", closes: "18:00" },
  ],
  acceptsReservations: "True",
  sameAs: ["https://www.facebook.com/groups/124167024309517/"],
  hasMenu: {
    "@type": "Menu",
    name: "Speisekarte Restaurant Tiger Wil",
    description:
      "Tagsüber gutbürgerliche Schweizer Küche, abends 2 bis 7 wechselnde Thai-Gerichte frisch aus dem Wok. Die Karte variiert mit den Menüs.",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Tagsüber – Gutbürgerlich",
        description:
          "Kleine Karte mit Schweizer Klassikern, gekocht von Heinz. Kafi, Gipfeli und Znüni ab 08:30 Uhr. Gutbürgerliche Küche abends auf Vorbestellung.",
      },
      {
        "@type": "MenuSection",
        name: "Abends – Thai ab 18:00 Uhr",
        description:
          "Immer 2 bis 7 wechselnde Thai-Gerichte zur Auswahl, alles frisch aus dem Wok von Alex. Keine vegetarischen oder veganen Gerichte. Ab 4 Personen Reservation 1 Tag im Voraus.",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${bricolage.variable} ${caveat.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
