import "./styles.css";
import { createWeatherDiv, showLocationHeader } from "./domController";

const searchForm = document.querySelector("#search-form");
const searchLocation = document.querySelector("#location");
const tempFormat = document.querySelector("select");

async function getWeatherData(location) {
  let ukUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=API_KEY&contentType=json`;
  let usUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=API_KEY&contentType=json`;

  if (tempFormat.value == 'celcius') {
    const response = await fetch(ukUrl);
    const weatherData = await response.json();
    showLocationHeader(weatherData.resolvedAddress);
    createWeatherDiv(sortWeatherData(weatherData), 'c');
  } else {
    const response = await fetch(usUrl);
    const weatherData = await response.json();
    showLocationHeader(weatherData.resolvedAddress);
    createWeatherDiv(sortWeatherData(weatherData), 'f');
  }
}

function sortWeatherData(weatherData) {
  return {
    address: weatherData.resolvedAddress,
    datetime: weatherData.days[0].datetime,
    temp: weatherData.days[0].temp,
    feelsLike: weatherData.days[0].feelslike,
    humidity: weatherData.days[0].humidity,
    chanceOfRain: weatherData.days[0].precip,
    uvIndex: weatherData.days[0].uvindex,
    conditions: weatherData.days[0].conditions,
  };
}

searchForm.addEventListener("submit", (e) => {
  console.log("search value: " + searchLocation.value);
  e.preventDefault();
  if (searchLocation.value != "") {
    getWeatherData(searchLocation.value);
  } else {
    console.log("no search value entered");
  }
  searchLocation.value = "";
  console.log(tempFormat.value);
});
