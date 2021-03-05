import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const Card = ({ timezone, timezones, setTimezones }) => {
  const [timezoneData, setTimezoneData] = useState({});

  const handleData = (data) => {
    console.log(data);
    let day = data.datetime.split("T")[0].split("-")[2];
    let month = data.datetime.split("T")[0].split("-")[1];
    let year = data.datetime.split("T")[0].split("-")[0];

    let date = day + "/" + month + "/" + year;

    let hour = parseInt(
      data.datetime.split("T")[1].split(".")[0].split(":")[0]
    );
    let minutes = data.datetime.split("T")[1].split(".")[0].split(":")[1];
    let period = "PM";

    if (hour < 12) {
      period = "AM";
    }
    if (hour && hour < 12) {
      hour = "0" + hour.toString();
    }
    if (hour && hour > 12) {
      hour = "0" + (hour - 12).toString();
      console.log("HOUR ", hour);
    }
    if (!hour) {
      hour = "12";
    }

    let time = hour + ":" + minutes + period;

    return { date, time };
  };

  useEffect(() => {
    axios
      .get(`http://worldtimeapi.org/api/timezone/${timezone}`)
      .then((res) => setTimezoneData(handleData(res.data)));
  }, []);

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
