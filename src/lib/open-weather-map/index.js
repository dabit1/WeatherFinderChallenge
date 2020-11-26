export const fetchWeather = async (city, country, apiKey) =>
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
  );
