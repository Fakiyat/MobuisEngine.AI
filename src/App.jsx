import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import "./App.css";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Work />
    </div>
  );
}
export default App;
