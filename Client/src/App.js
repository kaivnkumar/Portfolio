import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import SecondPage from "./component/SecondPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/second" element={<SecondPage />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
