import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Feedback from "./Component/Feedback";
import Search from "./Component/Search";
import Card from "./Component/Card";
import About from "./Component/About";
import Bnavbar from "./Component/Bnavbar";
import ContactMe from "./Component/ContactMe";
function App() {
  return (
    <>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<ContactMe />} />
        <Route path="*" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
