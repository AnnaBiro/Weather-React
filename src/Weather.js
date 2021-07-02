import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setWeather(response.data);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function showTemperature(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0dbcd93086477c1a7e773d46c9357657&units=metric`;
    axios.get(url).then(displayWeather);
  }

  let form = (
    <div>
      <form onSubmit={showTemperature}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
  if (weather) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.main.temp)}°C</li>
          <li>Description:{weather.weather[0].description}</li>
          <li>Humidity:{Math.round(weather.main.humidity)}%</li>
          <li>Wind:{Math.round(weather.wind.speed)}km/h</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            ></img>
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}