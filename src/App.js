import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/home";
import Navbar from "./components/navbar/navbar";
import About from "./components/pages/about";
import Experience from "./components/pages/experience";
import Work from "./components/pages/work";
import Contacts from "./components/pages/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/contact" element={<Contacts />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;