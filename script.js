const WEATHER_CITY_API = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "fcbd9181257065e6a01b65e33080f80e";
const APP_ID = "&appid=" + API_KEY + "&units=metric";

document.querySelector('.btn').addEventListener('click', () => {
  const cityInput = document.querySelector('.searchInput').value;
  
  if (cityInput.trim() === '') {
      alert('Please enter a city name.');
      return;
  }

  fetch(WEATHER_CITY_API + cityInput + APP_ID)
      .then(response => {
          if (!response.ok) {
              throw new Error('City not found or network error');
          }
          return response.json();
      })
      .then(data => {
          document.querySelector('.city').textContent = data.name;
          document.querySelector('.temp').textContent = data.main.temp + ' °C';
          document.querySelector('.weather').textContent = data.weather[0].main;
          document.querySelector('.feel h2:first-child').textContent = data.main.feels_like + ' °C';
          document.querySelector('.humidity h2:first-child').textContent = data.main.humidity + ' %';
          document.querySelector('.wind h2:first-child').textContent = data.wind.speed + ' m/s';
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Failed to fetch weather data. Please check the city name.');
      });
});