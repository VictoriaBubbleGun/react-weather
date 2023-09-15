import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CityList from "./city-list";
function App() {
  return (
    <div className="App">
      <div className="container">
        <CityList city="Berlin" />
      </div>
      <div className="row">
        <footer className="text-center text-danger-emphasis">
          This Project was coded by Jennyfer Müller and is Open-sourced on{" "}
          <a
            className="text-decoration-none text-dark"
            href="https://github.com/VictoriaBubbleGun/react-weather"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
