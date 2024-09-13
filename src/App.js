import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Whyqu from "./components/Whyqu";
import Stats from "./components/Stats";
import Recuritproc from "./components/Recruitproc";
import Ourrecurit from "./components/Ourrecurit";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/why-qu" element={<Whyqu />} />
          <Route path="/placement-stats" element={<Stats />} />
          <Route path="/recruitment" element={<Recuritproc />} />
          <Route path="/our-recruiters" element={<Ourrecurit />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
