import React, { useState, useEffect } from "react";
import "../../scss/style.scss";
import axios from "axios";

const Content = () => {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    
  }


  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/timezone")
      .then((res) => setCities(res.data));
  }, []);
  return <div className="content">
    <input></input>
  </div>;
};

export default Content;
