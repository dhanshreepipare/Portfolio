import React from "react";
import HomeLogo from "../images/HomePage.jpg";
import { Link } from "react-router-dom";
import Education from "./Education";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <div className="info">
            <p className="hinfo">Hello, I am </p>
            <p className="hname"> &nbsp;Dhanshree Pipare</p>
          </div>
          <p className="pname">Frontend Developer</p>
          <p className="intro">
            Welcome to my portfolio! I am a frontend developer with
            expertise in developing dynamic and responsive web applications that
            deliver exceptional user experiences.
          </p>
          <Link to="/about" className="link-btn">
            More About Me
          </Link>
        </div>
        <div className="right-container">
          <img src={HomeLogo} alt="Home Page Logo" className="homeimg" />
        </div>
      </div>
      <About />
      <Education />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
