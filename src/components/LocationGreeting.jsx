import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./LocationGreeting.css";

function LocationGreeting() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);

  return (
    <div className="location-greeting-wrapper">
      {location ? (
        <div
          className="location-greeting"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span role="img" aria-label="waves" className="waves">
            👋
          </span>
          Welcome from
          <strong>
            {" "}
            {location.city}, {location.country_name}
          </strong>
          !
        </div>
      ) : (
        <div
          className="location-loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          <span role="img" aria-label="waves" className="waves">
            👋
          </span>{" "}
          Welcome To TheAimZone
        </div>
      )}
    </div>
  );
}

export default LocationGreeting;
