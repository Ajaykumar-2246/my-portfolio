import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import About from "./components/about/about";
import Contact from "./components/contactpage/contact";
import Education from "./components/education/education";
import Home from "./components/home/home";
import Notfound from "./components/pagenotfound/notfound";
import Portfolio from "./components/portfolio/portfolio";
import Service from "./components/servicespage/service";


function App() {
  return (
    <div className="App">
      <Portfolio>
      <Routes>
        <Route path="" Component={Home}/>
        <Route path="about" Component={About} />
        <Route path="education" Component={Education} />
        <Route path="service" Component={Service} />
        <Route path="contact" Component={Contact} />
        <Route path="*" Component={Notfound} />
      </Routes>
      </Portfolio>
    </div>
  );
}

export default App;
