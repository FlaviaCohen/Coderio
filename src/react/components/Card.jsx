import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { handleData } from "../helpers";

const Card = ({ timezone, timezones, setTimezones }) => {
  const [timezoneData, setTimezoneData] = useState({});

  useEffect(() => {
    let name = timezone.replace("/", "_");
    axios
      .get(`http://localhost:8080/api/timezones/${name}`)
      .then((res) => setTimezoneData(handleData(res.data)));
  }, []);

  useEffect(() => {
    let name = timezone.replace("/", "_");
    setTimeout(() => {
      axios
        .put(`http://localhost:8080/api/timezones/${name}`)
        .then((res) => setTimezoneData(handleData(res.data)));
    }, 5000);
  });

  return (
    <div className="card-container">
      <RiCloseCircleFill
        onClick={() =>
          setTimezones(timezones.filter((current) => current != timezone))
        }
      />
      <p className="name">{timezone}</p>
      <p className="data">{timezoneData.date}</p>
      <p className="data">{timezoneData.time}</p>
    </div>
  );
};

export default Card;
