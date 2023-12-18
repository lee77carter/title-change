import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  return (
    <div className="App">
      <label htmlFor="title-input">
        Type in the input and look at the browser tab!
      </label>
      <input id="title-input" type="text" maxLength={25} />
    </div>
  );
};

export default App;
