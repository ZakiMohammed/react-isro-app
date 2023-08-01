export interface Country {
  flags: Flags;
  name: Name;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  eng: Eng;
  smo: Smo;
}

export interface Eng {
  official: string;
  common: string;
}

export interface Smo {
  official: string;
  common: string;
}
