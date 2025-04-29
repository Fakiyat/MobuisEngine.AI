import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import "./App.css";
import Work from "./components/Work";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Whychooseus from "./components/whychooseus";
import Pricingsection from "./components/Pricingsection";
import Resumebuild from "./components/Resumebuild";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Work />
      <AboutUs />
      <Testimonials />
      <Whychooseus />
      <Pricingsection />
      <Resumebuild />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default App;
