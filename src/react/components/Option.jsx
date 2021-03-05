import React, { useState, useEffect } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Option = ({ timezones, setTimezones, city }) => {
/*   const [checked, setChecked] = useState(false);

  useEffect(() => {
    timezones.includes(city) ? setChecked(true) : null;
  }, []); */

  return (
    <div
      className="option-container"
      onClick={() =>
        timezones.includes(city)
          ? setTimezones(timezones.filter((timezone) => timezone != city))
          : setTimezones([...timezones, city])
      }
    >
      <li>
        {timezones.includes(city) ? <IoIosCheckmarkCircle /> : null}
        <p>{city}</p>
      </li>
    </div>
  );
};

export default Option;
