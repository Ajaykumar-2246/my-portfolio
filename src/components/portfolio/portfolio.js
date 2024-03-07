import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./portfolio.css";

const Portfolio = () => {
  let [list, setList] = useState(false);

  let toggleclose = () => {
    setList(false);
  };
  return (
    <nav className="nav-container">
      <Link className="title" to="#">
        <b>P</b>ortfolio
      </Link>
      <div className="menu" onClick={() => setList(!list)}>
        <span className="menu-item "></span>
        <span className="menu-item"></span>
        <span className="menu-item"></span>
      </div>
      <ul className={list ? "open" : ""} onClick={toggleclose}>
        <li>
          <NavLink className="navigate" to="">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navigate" to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navigate" to="education">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink className="navigate" to="service">
            Service
          </NavLink>
        </li>
        <li>
          <NavLink className="navigate" to="/contact">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Portfolio;
