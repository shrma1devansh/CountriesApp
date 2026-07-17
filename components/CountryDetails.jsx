import React from "react";
import countriesData from "../CountriesData";
import { useLocation, useParams } from "react-router-dom";

export default function CountryDetail() {
  // const countryName = decodeURIComponent(
  //   new URLSearchParams(window.location.search).get("name"),
  // );
  const params = useParams();
  const lucky = useLocation();
  console.log(lucky);
  const countryName = params.country;
  console.log(countryName);
  const country = countriesData.find(
    (item) => item.name.common === countryName,
  );
  console.log(country);
  if (!country) {
    return <h1>Loading...</h1>;
  }

  // Native Name
  const nativeName = Object.values(country.name.nativeName || {})[0]?.common;

  // Currencies
  const currencies = Object.values(country.currencies || {})
    .map((currency) => currency.name)
    .join(", ");

  // Languages
  const languages = Object.values(country.languages || {}).join(", ");

  // Border Countries
  const borderCountries = country.borders
    ?.map((border) => {
      const borderCountry = countriesData.find((item) => item.cca3 === border);
      return borderCountry?.name.common;
    })
    .filter(Boolean)
    .join(", ");

  return (
    <main>
      <div className="country-details-container">
        <span
          className="back-button"
          onClick={() => window.history.back()}
          style={{ cursor: "pointer", marginBottom: "2px" }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>

        <div className="country-details">
          <img
            src={country.flags.svg}
            alt={country.flags.alt || country.name.common}
            style={{
              width: "350px",
              height: "auto",
            }}
          />

          <div className="details-text-container">
            <h1>{country.name.common}</h1>

            <div className="details-text">
              <p>
                <b>Native Name:</b> {nativeName}
              </p>

              <p>
                <b>Population:</b> {country.population.toLocaleString("en-IN")}
              </p>

              <p>
                <b>Region:</b> {country.region}
              </p>

              <p>
                <b>Sub Region:</b> {country.subregion}
              </p>

              <p>
                <b>Capital:</b> {country.capital?.join(", ") || "N/A"}
              </p>

              <p>
                <b>Top Level Domain:</b> {country.tld?.join(", ") || "N/A"}
              </p>

              <p>
                <b>Currencies:</b> {currencies || "N/A"}
              </p>

              <p>
                <b>Languages:</b> {languages || "N/A"}
              </p>
            </div>

            <div className="border-countries">
              <b>Border Countries:</b>{" "}
              {borderCountries || "No Border Countries"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
