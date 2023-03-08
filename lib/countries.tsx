import countries from "@/countries/info.json";

export type CountryJSON = {
  name: {
    common: string,
    official: string
  },
  svg: string,
  capital: string
}

export function getCountriesJSON(): CountryJSON[] {
  return countries;
}
