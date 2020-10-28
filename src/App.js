import React, { useState, useEffect } from "react";
import data from "./data";

function App() {
  // sets up State Hook to return an array of people
  const [people, setPeople] = useState(data);

  // set up State Hook to get index that changes each time in slider
  const [index, setIndex] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-container"></div>
    </section>
  );
}

export default App;
