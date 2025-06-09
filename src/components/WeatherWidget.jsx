import React, { useState, useEffect } from "react";
import "./WeatherWidget.css";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [locName, setLocName] = useState("Detecting Location...");

  useEffect(() => {
    const API_KEY = "e1fab49c7f2174eaf271276d39c2296a"; // Replace with your real key
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            setWeather(data);
            setLocName(data.name);
          })
          .catch((err) => console.error(err));
      },
      (err) => {
        console.error(err);
        setLocName("Location Denied");
      }
    );
  }, []);

  if (!weather) {
    return <div className="weather-widget">Loading weather...</div>;
  }

  const { temp, humidity } = weather.main;
  const { description, icon } = weather.weather[0];

  return (
    <div className="weather-widget">
      <h3>{locName}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p className="temp">{Math.round(temp)}°C</p>
      <p className="desc">{description}</p>
      <p className="details">Humidity: {humidity}%</p>
    </div>
  );
}

export default WeatherWidget;
