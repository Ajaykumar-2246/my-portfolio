import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import DownloadImage from "./my2.jpg";

const Home = () => {
  let navigate = useNavigate();

  let navigateabout = () => {
    navigate("About");
  };
  return (
    <div className="home">
      <div className="home-content">
        <p className="  greet Hello">Hello,</p>
        <h1 className="name typing">
          I'm <span>Ajay</span>
        </h1>
        <h2 className="name">Web Developer</h2>
        <p className="paragraph">
          I'm skilled and passionate web developer using React,I have experinced
          with user friendly websites
        </p>
        <div className="button">
          <button className="btn hire">Hire Me</button>
          <button onClick={navigateabout} className="btn about-btn">
            About Me
          </button>
        </div>
      </div>
      <div className="image-container">
        <div className="image-layer">
          <img className="photo" src={DownloadImage} alt="MyProfile..." />
        </div>
      </div>
    </div>
  );
};

export default Home;
