import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

class WeatherApi {
  static async fetchTodaysWeather(city, units) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        APPID: apiKey,
        units: units,
      },
    });
  }

  static async fetchNextFiveDaysWeather(city, units) {
    return await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        q: city,
        APPID: apiKey,
        units: units,
        cnt: 40,
      },
    });
  }
}

export default WeatherApi;
