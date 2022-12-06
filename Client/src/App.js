import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Addinfo from "./component/Addinfo";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import DisplayMarksheet from "./component/DisplayMarksheet";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/education" element={<Education />} exact></Route>
        <Route path="/projects" element={<Projects />} exact></Route>
        <Route path="/skills" element={<Skills />} exact></Route>
        <Route path="/add-info" element={<Addinfo />} exact></Route>
        <Route path="/contact" element={<Contact />} exact></Route>
        <Route path="/education/marksheet" element={<DisplayMarksheet />} exact></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
