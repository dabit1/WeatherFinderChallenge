export const fetchWeather = async (city, country, apiKey) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
  );

  const json = await res.json();
  if (json.cod === '404') {
    throw new Error('Resource not found');
  }

  return json;
};
