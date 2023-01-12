export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: Date;
  ended: null;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Nextepisode;
  previousepisode: Nextepisode;
  nextepisode: Nextepisode;
}

export interface Nextepisode {
  href: string;
}

export interface Externals {
  tvrage: null;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number;
}

export interface Schedule {
  time: string;
  days: string[];
}
