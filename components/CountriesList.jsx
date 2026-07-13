import React, { useEffect, useState } from "react";
import CountriesData from "../CountriesData";
import CountryCard from "./CountryCard";

export default function CountriesContainer({ query }) {
  // const [countriesData, setCountriesData] = useState([]);
  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((data) => data.json())
  //     .then((res) => setCountriesData(res));
  // }, []);
  return (
    <>
      {/* <input
        type="text"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      /> */}
      <div className="countries-container">
        {CountriesData.filter((country) =>
          country.name.common.toLowerCase().includes(query),
        ).map((county) => {
          // console.log(county);
          return (
            <CountryCard
              key={county.name.common}
              name={county.name.common}
              flag={county.flags.svg}
              population={county.population}
              region={county.region}
              capital={county.capital?.[0]}
            />
          );
        })}
      </div>
    </>
  );
}
