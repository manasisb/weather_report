import React, { useState } from "react";

function Button(props) {
  const [headingText, setHeadingText] = useState("");

  function handleClick(event) {
    setHeadingText(props.click);
    event.preventDefault();
  }

  return (
    <div>
      <h1>Hey {headingText} City!</h1>
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default Button;
