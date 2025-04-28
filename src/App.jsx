import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import "./App.css";
import Work from "./components/Work";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Work />
      <AboutUs />
    </div>
  );
}
export default App;
