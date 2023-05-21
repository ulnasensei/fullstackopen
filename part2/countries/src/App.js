import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";
import ToggleItem from "./components/ToggleItem";
const App = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios
            .get("https://studies.cs.helsinki.fi/restcountries/api/all")
            .then((response) => setCountries(response.data));
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearch(query);
        query === ""
            ? setSearchResults([])
            : setSearchResults(
                  countries.filter(
                      (counry) => ~counry.name.common.toLowerCase().indexOf(query.toLowerCase())
                  )
              );
    };

    const showResults = () => {
        const len = searchResults.length;
        if (len > 0) {
            if (len === 1) {
                return <CountryDetails country={searchResults[0]} />;
            }
            if (len <= 10) {
                return searchResults.map((country) => (
                    <React.Fragment key={country.cca3}>
                        <span>{country.name.common}</span>
                        <ToggleItem country={country} /> <br />
                    </React.Fragment>
                ));
            }
            return <p>Too many matches. Please be more specific.</p>;
        }
        return null;
    };
    return (
        <div>
            <div>
                find countries:&nbsp;
                <input type={"text"} value={search} onChange={handleSearch} />
            </div>
            {showResults()}
        </div>
    );
};

export default App;
