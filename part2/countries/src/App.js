import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
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
                const {
                    name: { common: name },
                    capital: { 0: capital },
                    area,
                    languages,
                    flags: { png: flag },
                } = searchResults[0];
                return (
                    <div>
                        <h1>{name}</h1>
                        <p>Capital: {capital}</p>
                        <p>Area: {area}</p>
                        <p>
                            <strong>Languages:</strong>
                        </p>
                        <ul>
                            {Object.keys(languages).map((lang) => (
                                <li key={lang}>{languages[lang]}</li>
                            ))}
                        </ul>
                        <img src={flag} alt="flag" />
                    </div>
                );
            }
            if (len <= 10) {
                return searchResults.map((country) => (
                    <p key={country.cca3}>{country.name.common}</p>
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
