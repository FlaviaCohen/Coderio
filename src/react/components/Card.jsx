import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const Card = ({ timezone, timezones, setTimezones }) => {
  const [timezoneData, setTimezoneData] = useState({});

  const handleData = () => {

  }

  useEffect(() => {
    axios
      .get(`http://worldtimeapi.org/api/timezone/${timezone}`)
      .then((res) => setTimezoneData(res.data));
  }, []);

  return (
    <div className="card-container">
        {console.log(timezoneData)}
      <RiCloseCircleFill
        onClick={() =>
          setTimezones(timezones.filter((current) => current != timezone))
        }
      />
      <p className="name">{timezone}</p>
      <p className="data">DATA</p>
    </div>
  );
};

export default Card;
