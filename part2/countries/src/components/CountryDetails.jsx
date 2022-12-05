import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const CountryDetails = ({ country }) => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        const owmKey = process.env.REACT_APP_API_KEY;

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=${owmKey}&units=metric`
            )
            .then((response) => setWeather(response.data));
        // eslint-disable-next-line
    }, []);

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
            {Boolean(weather.main) && (
                <>
                    <h3>Weather in {name}</h3>
                    <p>Temperature: {weather.main.temp} Celcius</p>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt=""
                    />
                    <p>Wind: {weather.wind.speed} m/s</p>
                </>
            )}
        </div>
    );
};

export default CountryDetails;
