export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  bio: string;
  hue: number;
  likesYou: boolean;
}

/** Fictional deck. `likesYou` is the mutual-match flag — no server. */
export const PROFILES: Profile[] = [
  {
    id: "ioana",
    name: "Ioana Marinescu",
    age: 29,
    city: "Cluj-Napoca",
    bio: "Hikes around Cheile Turzii. Will argue about espresso.",
    hue: 350,
    likesYou: true,
  },
  {
    id: "matei",
    name: "Matei Pop",
    age: 31,
    city: "Cluj-Napoca",
    bio: "Jazz vinyl and terrible puns. Looking for a third for board games.",
    hue: 210,
    likesYou: false,
  },
  {
    id: "sofia",
    name: "Sofia Rossi",
    age: 27,
    city: "Milan / Cluj",
    bio: "Architecture grad. Weekend trains, weekday sketches.",
    hue: 28,
    likesYou: true,
  },
  {
    id: "andrei",
    name: "Andrei Vasilescu",
    age: 34,
    city: "Bucharest",
    bio: "Cooks for a crowd. Does not cook for a crowd of one — yet.",
    hue: 160,
    likesYou: false,
  },
  {
    id: "lara",
    name: "Lara Nguyen",
    age: 26,
    city: "Berlin",
    bio: "Open-source by day, long novels by night.",
    hue: 265,
    likesYou: true,
  },
  {
    id: "nico",
    name: "Nico Berg",
    age: 32,
    city: "Vienna",
    bio: "Cyclist who still gets lost on purpose.",
    hue: 195,
    likesYou: false,
  },
];
