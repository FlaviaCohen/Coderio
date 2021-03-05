import React, { useState, useEffect } from "react";
import "../../scss/style.scss";
import axios from "axios";
import Option from "../components/Option";
import Card from "../components/Card";

const Content = () => {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");
  const [timezones, setTimezones] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/timezone")
      .then((res) => setCities(res.data));
  }, []);

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <input
          className={`search-bar ${value ? "open" : null}`}
          placeholder="Enter your city. Example: 'Africa/Abidjan'"
          onChange={handleChange}
          value={value}
        />
        <div className={`dropdown ${value ? null : "hidden"}`}>
          {value
            ? cities.map((city, key) =>
                city.includes(value) ? (
                  <Option
                    key={key}
                    timezones={timezones}
                    setTimezones={setTimezones}
                    city={city}
                  />
                ) : null
              )
            : null}
        </div>
      </form>
      <div className="cards">
        {timezones.length
          ? timezones.map((timezone, key) => (
              <Card
                key={key}
                timezone={timezone}
                setTimezones={setTimezones}
                timezones={timezones}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Content;
