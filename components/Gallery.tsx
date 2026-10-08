"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight, IconClose } from "@/components/icons";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  portrait?: boolean;
};

export const ALL_GALLERY_IMAGES: GalleryImage[] = [
  // Die ersten 4 bilden den Teaser auf der Startseite (Grid-Klassen g1–g4).
  { src: "/images/exterior.jpg", alt: "Aussenansicht Restaurant Tiger an der Grabenstrasse in Wil SG", caption: "De Tiger a de Grabestrass 21", className: "g1" },
  { src: "/images/teller15.jpg", alt: "Schnitzel mit Rösti und Tiger-Fähnchen", caption: "Gutbürgerlich, wie's sy muess", className: "g2", portrait: true },
  { src: "/images/fassnacht25_10.jpg", alt: "Festlich dekorierte Bar an der Tiger-Fasnacht in Wil", caption: "D'legendäri Tiger-Fasnacht", className: "g3" },
  { src: "/images/gemeinsam1.jpg", alt: "Gäste sitzen zusammen am Stammtisch beim Fondue", caption: "Am Stammtisch isch immer Platz", className: "g4" },
  { src: "/images/teller9.jpg", alt: "Thai-Wokgericht mit Gemüse und Reis", caption: "Frisch us em Wok vo Alex", },
  { src: "/images/tiger10.jpg", alt: "Restaurant Tiger bei Nacht mit beleuchteter Fassade", caption: "De Tiger bi Nacht", portrait: true },
  { src: "/images/fassnacht25_3.jpg", alt: "Aufwendig dekorierte Ecke an der Tiger-Fasnacht", caption: "Jedes Jahr es neus Thema" },
  { src: "/images/teller16.jpg", alt: "Geschmortes Fleisch mit Rösti", caption: "Währschaft und ehrlich", portrait: true },
  { src: "/images/gastwirtschaft2.jpg", alt: "Sonnige Gartenterrasse vom Restaurant Tiger in Wil", caption: "Im Summer isch de Garte offe" },
  { src: "/images/teller20.jpg", alt: "Gebratene Thai-Nudeln mit Limette", caption: "Nudle wie z'Bangkok", portrait: true },
  { src: "/images/fassnacht1.jpg", alt: "Dekorierte Gaststube an der Tiger-Fasnacht", caption: "D'Fasnacht verwandlet s'ganze Lokal" },
  { src: "/images/gemeinsam2.jpg", alt: "Festlich gedeckte Tische in der Gaststube vom Tiger Wil", caption: "Parat für's nächste Fest", portrait: true },
  { src: "/images/teller4.jpg", alt: "Thai-Wokgericht mit Reis und Cashewnüssen", caption: "Frisch us de Thai-Chuchi" },
  { src: "/images/tiger4.jpg", alt: "Gartenterrasse mit Feuerkörben am Abend", caption: "Gmüetlich am Füür im Garte" },
  { src: "/images/fassnacht25_13.jpg", alt: "Fantasievoll dekorierter Barraum an der Tiger-Fasnacht", caption: "Deko bis under d'Decki" },
  { src: "/images/teller2.jpg", alt: "Thai-Curry mit Poulet und Gemüse", caption: "Curry, wo's värmt", portrait: true },
  { src: "/images/event5.jpg", alt: "Volles Festzelt an einem Anlass vom Restaurant Tiger Wil", caption: "Wenn de Tiger lädt, chömed alli" },
  { src: "/images/teller17.jpg", alt: "Wurst an Sauce mit Salzkartoffeln", caption: "Us de gutbürgerliche Chuchi", portrait: true },
  { src: "/images/fassnacht25_1.jpg", alt: "Bemalte Kulisse mit Beleuchtung an der Tiger-Fasnacht", caption: "D'Fasnacht-Deko im Detail" },
  { src: "/images/tiger3.jpg", alt: "Terrasse mit Weihnachtsbeleuchtung vor dem Tiger", caption: "Wiehnachtsstimmig uf de Terrasse" },
  { src: "/images/teller6.jpg", alt: "Frisches Wokgemüse mit Poulet und Reis", caption: "Frisch und knackig us em Wok", portrait: true },
  { src: "/images/fassnacht17.jpg", alt: "Gäste feiern an der Tiger-Fasnacht", caption: "Volls Huus a de Fasnacht" },
  { src: "/images/gemeinsam3.jpg", alt: "Gäste in der Gaststube vom Tiger", caption: "Zäme fiire i de Stube" },
  { src: "/images/teller8.jpg", alt: "Thai-Teller mit Reisturm auf schwarzem Geschirr", caption: "Immer 2 bis 7 Gricht zur Uswahl" },
  { src: "/images/fassnacht2.jpg", alt: "Stimmungsvoll dekoriertes Lokal an der Fasnacht", caption: "Stimmig wie kei anderi" },
  { src: "/images/tiger5.jpg", alt: "Beleuchteter Eingang vom Restaurant Tiger", caption: "Willkomme im Tiger" },
  { src: "/images/teller12.jpg", alt: "Frische Suppe mit Poulet und Gemüse", caption: "E feini Suppe zum Zmittag" },
  { src: "/images/fassnacht25_12.jpg", alt: "Handgemachte Fasnachtskulisse im Tiger", caption: "Handgmachti Kulisse" },
  { src: "/images/gemeinsam4.jpg", alt: "Blick in die Gaststube vom Restaurant Tiger", caption: "D'Gaststube vom Tiger", portrait: true },
  { src: "/images/thai-plate-poulet.jpg", alt: "Asiatisches Thai-Gericht mit Poulet, Gemüse und Reis", caption: "Poulet, Gmües und Riis" },
  { src: "/images/event4.jpg", alt: "Viehschau an einem Stadtfest in Wil", caption: "Wil fiiret – de Tiger isch derbi" },
  { src: "/images/tiger7.jpg", alt: "Aussenbar mit Tannenzweigen und Lichterketten", caption: "D'Ussebar im Winter-Kleid", portrait: true },
  { src: "/images/fassnacht5.jpg", alt: "Fasnachtsdeko mit bemalten Wänden im Tiger", caption: "Jedes Eggli liebevoll dekoriert" },
  { src: "/images/fassnach10.jpg", alt: "Alpenkulisse als Fasnachtsdeko im Tiger", caption: "Es neus Sujet, jedes Jahr" },
  { src: "/images/fassnacht28.jpg", alt: "Bunt beleuchtetes Lokal an der Tiger-Fasnacht", caption: "Farbe, Liechter und guti Luune" },
  { src: "/images/gastwirtschaft.jpg", alt: "Grosser Tisch unter Sonnenschirmen im Garten", caption: "De grossi Tisch im Garte" },
  { src: "/images/teller5.jpg", alt: "Scharfes Thai-Wokgericht mit Poulet und Reis", caption: "Scharf, frisch und feini Sache" },
  { src: "/images/fassnacht25_6.jpg", alt: "Bar mit Baum-Deko an der Tiger-Fasnacht", caption: "D'Bar mitte im Fasnachts-Wald" },
  { src: "/images/event12.jpg", alt: "Strassenfest mit gelben Sonnenschirmen in Wil", caption: "Fescht uf de Gass" },
  { src: "/images/event7.jpg", alt: "Abendstimmung im Festzelt", caption: "Bis spat i d'Nacht" },
];

export const TEASER_GALLERY_IMAGES: GalleryImage[] = ALL_GALLERY_IMAGES.slice(0, 4);

export function Gallery({
  images = ALL_GALLERY_IMAGES,
  variant = "grid",
}: {
  images?: GalleryImage[];
  variant?: "grid" | "masonry";
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [idx, setIdx] = useState(0);

  const show = (i: number) => {
    setIdx((i + images.length) % images.length);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <div className={variant === "masonry" ? "gal-masonry" : "gal"} id="gal">
        {images.map((img, i) => (
          <figure
            key={img.src}
            className={variant === "grid" ? img.className ?? "" : ""}
            tabIndex={0}
            role="button"
            aria-label={`Bild vergrössern: ${img.caption}`}
            onClick={() => show(i)}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show(i);
              }
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.portrait ? 600 : 800}
              height={img.portrait ? 800 : 600}
              sizes={
                variant === "grid"
                  ? "(max-width: 760px) 100vw, min(800px, 60vw)"
                  : "(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
              }
              loading="lazy"
            />
            <figcaption>{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      <dialog className="lb" ref={dialogRef} aria-label="Bildansicht">
        <div className="lb-inner">
          <button className="lb-btn lb-close" aria-label="Schliessen" onClick={() => dialogRef.current?.close()}>
            <IconClose />
          </button>
          <button className="lb-btn lb-prev" aria-label="Vorheriges Bild" onClick={() => show(idx - 1)}>
            <IconChevronLeft />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[idx].src} alt={images[idx].alt} />
          <button className="lb-btn lb-next" aria-label="Nächstes Bild" onClick={() => show(idx + 1)}>
            <IconChevronRight />
          </button>
          <p className="lb-cap">{images[idx].caption}</p>
        </div>
      </dialog>
    </>
  );
}
