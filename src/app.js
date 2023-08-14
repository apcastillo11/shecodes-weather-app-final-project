function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  descriptionElement.innerHTML = response.data.weather[0].description;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);

  console.log(response.data);
}

let apiKey = "15eb8522ae83c3347bb8abe9fa574c71";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
