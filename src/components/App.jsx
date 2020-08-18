import React from "react";
import Animal from "./Animal";
import cars from "../practice";

const [honda, tesla] = cars;

const {
  coloursByPopularity: [hondaTopColour, hondaSilver],
  speedStats: { hondaTopSpeed, hondaZeroToSixty },
} = honda;

const {
  coloursByPopularity: [teslaTopColour, teslaWhite],
  speedStats: { teslaTopSpeed, teslaZeroToSixty },
} = tesla;

function App() {
  return (
    <div>
      <Animal />

      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
