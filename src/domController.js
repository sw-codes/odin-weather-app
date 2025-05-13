const headerDiv = document.querySelector('.header-div');
const contentDiv = document.querySelector('.content-div');
const headerP = document.querySelector('#header-p');

function createWeatherDiv(weatherData) {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  const weatherDiv = document.createElement('div');
  weatherDiv.setAttribute('class', 'weather-div');

  const dayH3 = document.createElement('h2');
  dayH3.textContent = weatherData.datetime;

  const tempH2 = document.createElement('h3');
  tempH2.textContent = weatherData.temp;

  const feelsLikeP = document.createElement('p');
  feelsLikeP.textContent = weatherData.feelsLike;

  const humidityP = document.createElement('p');
  humidityP.textContent = weatherData.humidity;

  const chanceOfRainP = document.createElement('p');
  chanceOfRainP.textContent = weatherData.chanceOfRain;

  const uvIndexP = document.createElement('p');
  uvIndexP.textContent = weatherData.uvIndex;

  const conditionsP = document.createElement('p');
  conditionsP.textContent = weatherData.conditions;

  weatherDiv.appendChild(dayH3);
  weatherDiv.appendChild(tempH2);
  weatherDiv.appendChild(feelsLikeP);
  weatherDiv.appendChild(humidityP);
  weatherDiv.appendChild(chanceOfRainP);
  weatherDiv.appendChild(uvIndexP);
  weatherDiv.appendChild(conditionsP);
  contentDiv.appendChild(weatherDiv);
}

function showLocationHeader(location) {
  // const locationP = document.createElement('p');
  headerP.removeAttribute('hidden');
  headerP.textContent = 'Showing weather for: ' + location;

  headerDiv.appendChild(headerP);
}

export { createWeatherDiv, showLocationHeader }