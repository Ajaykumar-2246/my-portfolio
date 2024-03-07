import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";

function Navbar() {
  let [list,setList]=useState(false);
  return (
    <nav className="nav-container">
      <Link className="title" to="#">
        PORTFOLIO
      </Link>
      <div className="menu" onClick={()=>setList(!list)}>
        <span className="menu-item "></span>
        <span className="menu-item"></span>
        <span className="menu-item"></span>
      </div>
      <ul className= {list ? "open" :""}>
        <li>
          <Link className="navigate" to="">
            Home
          </Link>
        </li>
        <li>
          <Link className="navigate" to="about">
            About
          </Link>
        </li>
        <li>
          <Link className="navigate" to="education">
            Education
          </Link>
        </li>
        <li>
          <Link className="navigate" to="experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="navigate" to="projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="navigate" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
