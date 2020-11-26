export const fetchWeather = async (city, country, apiKey) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
  );

  return await res.json();
};
