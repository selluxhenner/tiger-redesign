import type { Metadata } from "next";
import { Gallery, ALL_GALLERY_IMAGES } from "@/components/Gallery";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Galerie – Bilder von Bar, Küche & Fasnacht",
  description:
    "Bilder aus dem Tiger Wil: asiatische und Schweizer Küche, die Bar, die legendäre Tiger-Fasnacht und das Restaurant an der Grabenstrasse in Wil SG.",
  alternates: { canonical: "/galerie" },
  openGraph: {
    title: "Galerie – Restaurant Tiger Wil",
    description:
      "Bilder aus dem Tiger Wil: gutbürgerliche und asiatische Küche, die Bar, die legendäre Tiger-Fasnacht und Impressionen vom Restaurant in Wil SG.",
    url: "/galerie",
    locale: "de_CH",
  },
};

export default function GaleriePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Galerie", path: "/galerie" }]} />
      <div className="seiten-hero">
        <div className="wrap">
          <span className="eyebrow hand">es Bitzli Iiblick</span>
          <h1>Galerie</h1>
          <p>
            E Momänt im Tiger Wil – vo de gutbürgerliche Chuchi über d&apos;Thai-Wok-Gerichter bis zur Bar und
            de legendäre Fasnacht. So gseht&apos;s bi eus us, s&apos;Tigerli mitten in Wil SG.
          </p>
        </div>
      </div>

      <section style={{ paddingTop: 64 }}>
        <div className="wrap">
          <Gallery images={ALL_GALLERY_IMAGES} variant="masonry" />
        </div>
      </section>
    </>
  );
}
