import "./styles.css";

const searchForm = document.querySelector('#search-form');
const searchLocation = document.querySelector('#location');

async function getWeatherData(location) {
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=WKEVAHX8UL465663P4SME4SVQ&contentType=json`
  const response = await fetch(url);
  const weatherData = await response.json();
  console.log(weatherData);
  console.log('sorted weather object from search ' + sortWeatherData(weatherData).address);
}

function sortWeatherData(weatherData) {
  return {
    address: weatherData.resolvedAddress,
    datetime: weatherData.days[0].datetime,
    temp: weatherData.days[0].temp,
    feelsLike: weatherData.days[0].feelsLike,
    humidity: weatherData.days[0].humidity,
    chanceOfRain: weatherData.days[0].precip,
    uvIndex: weatherData.days[0].uvIndex,
    conditions: weatherData.days[0].conditions
  }
}

// getWeatherData('theydon bois');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('search form submitted! location: ' + searchLocation.value);
  getWeatherData(searchLocation.value);
})