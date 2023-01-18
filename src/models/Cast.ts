export interface Cast {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: Date;
  deathday: null;
  gender: string;
  image: Image;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Image {
  medium: string;
  original: string;
}
