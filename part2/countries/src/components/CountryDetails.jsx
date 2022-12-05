import React from "react";

const CountryDetails = ({ country }) => {
    const {
        name: { common: name },
        capital: { 0: capital },
        area,
        languages,
        flags: { png: flag },
    } = country;
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
};

export default CountryDetails;
