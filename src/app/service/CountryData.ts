export default interface CountryData {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: { latlng: number[] };
  car: { signs: string[]; side: string };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: { png: string; svg: string };
  continents: string[];
  currencies: { EUR: { name: string; symbol: string } };
  demonyms: { eng: { f: string; m: string }; fra: { f: string; m: string } };
  fifa: string;
  flag: string;
  flags: { png: string; svg: string; alt: string };
  gini: { 2018: number };
  idd: { root: string; suffixes: string[] };
  independent: boolean;
  landlocked: boolean;
  languages: { deu: string; fra: string; nld: string };
  latlng: number[];
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName: {
      deu: { official: string; common: string };
      fra: { official: string; common: string };
      nld: { official: string; common: string };
    };
  };
  population: number;
  postalCode: { format: string; regex: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    ara: { official: string; common: string };
    bre: { official: string; common: string };
    ces: { official: string; common: string };
    cym: { official: string; common: string };
    deu: { official: string; common: string };
  };
  unMember: boolean;
}
