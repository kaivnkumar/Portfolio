import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import DisplayMarksheet from "./component/DisplayMarksheet";
import LockScreen from "./component/LockScreen";
import ProtectedRoutes from "./component/ProtectedRoute";
import ViewSuggestion from "./component/ViewSuggestion";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/about" element={<About />} exact></Route>
        <Route path="/education" element={<Education />} exact></Route>
        <Route path="/projects" element={<Projects />} exact></Route>
        <Route path="/skills" element={<Skills />} exact></Route>
        <Route path="/contact" element={<Contact />} exact></Route>
        <Route path="/education/marksheet" element={<DisplayMarksheet />} exact></Route>
        <Route path="/lock" element={<LockScreen />} exact></Route>
        <Route element={<ViewSuggestion/>} path="/view" exact/>
        <Route element={<ProtectedRoutes />}>
          <Route element={<ViewSuggestion/>} path="/view" exact/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
