import React from 'react'
import { useEffect, useState } from 'react'
import { fetchWeather } from './fetchWeather';
import Select from 'react-select';
import { CITY } from './cityData';

export default function Weather() {

    const [city, setCity] = useState('Colombo');
    const [weather, setWeather] = useState('');
    const [cityList, setCityList] = useState(null);

    useEffect(() => {

        setCityList(CITY.cities.map(i => ({
            value: i, label: i
        })));

    }, [])

    const searchWeather = async (e) => {
        e.preventDefault();
        const data = await fetchWeather(city);
        setWeather(data);

        console.log(data);

    }

    const handleChange = (e) => {
        setCity(e.value);
        console.log(city)
    };

    /* let options;
    if (cityList) {
        options = CITY.cities.map(i => ({
            value: i, label: i
        }));

    } */

    /* const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ] */


    /* 
        const options = test.map(v => ({
            label: v,
            value: v
          })); */


    return (
        <div>

            <form action="" onSubmit={searchWeather}>


                <Select options={cityList}
                    onChange={handleChange}
                /* value={city} */
                />

                {/* <input type="text"
                    placeholder={"Enter city"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                /> */}
                <button>Enter</button>
            </form>
            {weather.main && (
                <div>
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        <h1>උෂ්ණත්වය
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup></h1>
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

