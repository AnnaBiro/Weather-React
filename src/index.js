import React from "react";
import ReactDOM from "react-dom";

import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
