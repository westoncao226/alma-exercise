import { countries as countryData } from "countries-list";

export const countries = Object.keys(countryData);

export const countryOptions = Object.entries(countryData).map(
  ([code, info]) => ({
    value: code,
    label: info.name,
  })
);
