import React from "react";

import "./about.css";

import Progressbar from "./progressbar";
import profileimage from "./download.jpg";
import Aboutfooter from "./aboutfooter";

const About = () => {
  return (
    <React.Fragment>
      <div className="about-container">
        <div className="profile">
          <div className="inner-element">
            <div className="pic">
              <img src={profileimage} alt="Profile..." />
            </div>
            <div className="details">
              <span className="inner-details">
                <b> Name:</b> <span>Billa Ajay Kumar</span>
              </span>
              <span className="inner-details">
                <b>Profile: </b>
                <span>Full Stack Development</span>
              </span>
              <span className="inner-details">
                <b>Email:</b>
                <span>ajaybilla2004@gmail.com</span>
              </span>
              <span className="inner-details">
                <b>phone:</b>
                <span>(+91)9666490245</span>
              </span>
            </div>
          </div>
          <h3>Skills</h3>

          <Progressbar />
        </div>
        <div className="about-me">
          <h3 className="about-title">
            <u>About Me</u>
          </h3>
          <p>
            I'm <b>BILLA AJAY KUMAR,</b> ambitious and outcome-driven BTech
            graduate, I'm seeking an entry-level position in Web Development. My
            distinguished academic record is complemented by a robust technical
            skillset honed through hands-on experience building dynamic websites
            with HTML, CSS, JavaScript, and React.
          </p>
          <p>
            I'm quick learner with a passion for web development that grows with
            each project, I constantly seek opportunities to explore different
            implementation methods for the technologies I encounter. This makes
            me a valuable asset to a progressive and innovative team eager to
            contribute meaningfully.
          </p>
          <p>
            My enthusiasm for web development grows with each project. I
            constantly seek opportunities to learn more, exploring different
            implementation methods for the technologies I encounter.
          </p>
        </div>
      </div>
      <Aboutfooter />
    </React.Fragment>
  );
};

export default About;
