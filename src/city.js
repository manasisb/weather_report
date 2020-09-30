import React, { useState } from "react";
import Button from "./button.js";

function City(props) {
  const [name, setName] = useState("");

  function handleCityName(event) {
    setName(event.target.value);
  }

  return (
    <form>
      <label name="Enter City" />
      <input
        onChange={handleCityName}
        type="text"
        id="cityname"
        placeholder="Enter your city name"
        value={name}
      ></input>
      <Button click={name} />
    </form>
  );
}

export default City;
