import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CityList from "./city-list";
function App() {
  return (
    <div className="App">
      <CityList city="Berlin" />
    </div>
  );
}

export default App;
