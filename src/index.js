import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import StringOperations from "./StringOperations";
import CountryPrint from "./CountryPrint";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <StringOperations />
      <CountryPrint />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
