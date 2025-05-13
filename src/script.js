import "./styles.css";

async function getWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=WKEVAHX8UL465663P4SME4SVQ&contentType=json`
  );
  const weatherData = await response.json();
  console.log(weatherData);
  console.log('sorted weather object ' + sortWeatherData(weatherData).conditions);
}

function sortWeatherData(weatherData) {
  return {
    datetime: weatherData.days[0].datetime,
    temp: weatherData.days[0].temp,
    feelsLike: weatherData.days[0].feelsLike,
    humidity: weatherData.days[0].humidity,
    chanceOfRain: weatherData.days[0].precip,
    uvIndex: weatherData.days[0].uvIndex,
    conditions: weatherData.days[0].conditions
  }
}

getWeatherData('theydon bois');