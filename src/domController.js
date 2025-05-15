import { getDayName } from "./dateUtils";

const headerDiv = document.querySelector('.header-div');
const contentDiv = document.querySelector('.content-div');
const headerP = document.querySelector('#header-p');

function createWeatherDiv(weatherData, tempFormat) {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
  getDayName(weatherData.datetime);

  const weatherDiv = document.createElement('div');
  weatherDiv.setAttribute('class', 'weather-div');

  const dateDiv = document.createElement('div');
  dateDiv.setAttribute('class', 'date-div');

  const weatherTopDiv = document.createElement('div');
  weatherTopDiv.setAttribute('class', 'weather-top-div');

  const weatherInfoDiv = document.createElement('div');
  weatherInfoDiv.setAttribute('class', 'weather-info-div');

  const dayH3 = document.createElement('h3');
  dayH3.textContent = getDayName(weatherData.datetime);

  const dateP = document.createElement('p');
  dateP.textContent = weatherData.datetime;

  const tempH2 = document.createElement('h2');
  tempH2.textContent = weatherData.temp + '°' + tempFormat;

  const feelsLikeP = document.createElement('p');
  feelsLikeP.textContent = 'feels like: ' + weatherData.feelsLike;

  const humidityP = document.createElement('p');
  humidityP.textContent = 'humidity: ' + weatherData.humidity;

  const chanceOfRainP = document.createElement('p');
  chanceOfRainP.textContent = 'chance of rain: ' + weatherData.chanceOfRain;

  const uvIndexP = document.createElement('p');
  uvIndexP.textContent = 'uv index: ' + weatherData.uvIndex;

  const conditionsP = document.createElement('p');
  conditionsP.textContent = weatherData.conditions;

  dateDiv.appendChild(dayH3);
  dateDiv.appendChild(dateP);

  weatherTopDiv.appendChild(dateDiv);
  weatherTopDiv.appendChild(tempH2);

  weatherInfoDiv.appendChild(feelsLikeP);
  weatherInfoDiv.appendChild(humidityP);
  weatherInfoDiv.appendChild(chanceOfRainP);
  weatherInfoDiv.appendChild(uvIndexP);

  weatherDiv.appendChild(weatherTopDiv);
  weatherDiv.appendChild(weatherInfoDiv);
  weatherDiv.appendChild(conditionsP);
  contentDiv.appendChild(weatherDiv);
}

function showLocationHeader(location) {
  headerP.removeAttribute('hidden');
  headerP.textContent = 'Showing weather for: ' + location;
  headerDiv.appendChild(headerP);
}

export { createWeatherDiv, showLocationHeader }