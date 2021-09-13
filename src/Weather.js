import React from 'react'
import { useEffect, useState } from 'react'
import { fetchWeather } from './fetchWeather';
import Select from 'react-select';
import { CITY } from './cityData';

export default function Weather() {

    const [city, setCity] = useState('colombo');
    const [weather, setWeather] = useState('');
    const [cityList, setCityList] = useState(null);



    useEffect(() => {

        if (!cityList) {
            setCityList(CITY.cities.map(i => ({
                value: i, label: i
            })));
        }
    }, [])


    const searchWeather = async (selectedCity) => {
        const data = await fetchWeather(selectedCity);  //setState is async, .. send Selected val. direct to fetch data
        setWeather(data);

        console.log(data)
    }

    const handleChange = (e) => {
        if (e) {

            setCity(e.value);

            searchWeather(e.value);

        }

    };



    return (
        <div>
            <Select options={cityList}
                onChange={handleChange}
                value={city}
            />

            {weather && weather.main && (
                <div>
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        <h1>උෂ්ණත්වය
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup></h1>

                        <h2>ඇඟට දැනෙනවා {Math.round(weather.main.feels_like)}
                            <sup>&deg;C</sup>
                            වගේ..</h2>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

