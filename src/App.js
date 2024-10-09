import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages:
import Home from "./Pages/Home";
import About from "./Pages/About";
import Properties from "./Pages/Properties/Properties";
import Property from "./Pages/Properties/Property/Property";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

// Components:
import Header from "./Components/Global/Header/Header";
import Footer from "./Components/Global/Footer/Footer";
import StartToday from "./Components/Global/StartToday";

function App() {
  return (
    <div className="App bg-body-color text-white min-h-screen">
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:propertyId" element={<Property />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Start Today */}
      <StartToday />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;