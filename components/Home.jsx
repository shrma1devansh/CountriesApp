import React ,{useState} from 'react'
// import "./App.css";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesList";


export default function Home() {
      const [query, setQuery] = useState("");

  return (
    <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesContainer query={query} />
      </main>
  )
}
