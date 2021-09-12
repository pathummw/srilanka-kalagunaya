import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '675fcfff307714a96aa30494fcb1aa0c';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

/* api.openweathermap.org/data/2.5/weather?q=colombo,LK&appid=675fcfff307714a96aa30494fcb1aa0c&units=metric */