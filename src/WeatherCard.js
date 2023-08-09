import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const pressure = main.pres;
  const humidity = main.humid;
  const description = weather[0].description;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Pressure: {pressure}mb</p>
      <p>Humidity: {humidity}%</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default WeatherCard;
