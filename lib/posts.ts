export type Post = {
  title: string;
  date?: string;
  excerpt: string;
};

export const POSTS: Post[] = [
  {
    title: "Neui Website für's Tiger",
    date: "Juli 2026",
    excerpt:
      "Ab sofort findet ihr eus online no besser – mit allne Infos zu Chuchi, Bar, Öffnungszeiten und Events z'Wil.",
  },
  {
    title: "D'Tiger-Fasnacht chunt wieder",
    excerpt:
      "Wie jedes Jahr wird bi eus gross Fasnacht gfiiert. De genau Termin wird hie und uf Facebook rechtzeitig bekannt gäh.",
  },
  {
    title: "D'Metzgete im Herbst",
    excerpt:
      "Wenn d'Metzgete-Zeit chunt, isch de Tiger schnell voll. Wär sicher ga wott, reserviert am beschte früezitig.",
  },
];
