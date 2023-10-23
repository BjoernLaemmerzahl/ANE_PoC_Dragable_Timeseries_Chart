import React from "react";
import "./styles.css";
import DraggableGraph from "./DraggableData";
import CrazyLine from "./CrazyLine";

export default () => {
  return (
    <div className="App">
      <h1>FCPROD</h1>
      <button type="button">Get FCPROD</button>

      <button type="button">Set FCPROD</button>

      <DraggableGraph />
    </div>
  );
};
