import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [headingText, setHeading] = useState("");

  function updateFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleClick(event) {
    setHeading(firstName);
    event.preventDefault(); //Stops form refreshing right away
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={updateFirstName}
          type="text"
          placeholder="First Name"
          value={firstName}
        ></input>

        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
