import React from "react";
import { Link } from "react-router-dom";
import mypic from "../images/img1.jpg";
import dowcv from "../files/Dhanshree_Pipare_CV.pdf";
const About = () => {
  return (
    <>
      <div className="abpage">
        <div className="abpage-main">
          <p className="abhead">About Us</p>
          <p className="abpara">Hello, I'm Dhanshree Pipare</p>
          <p className="abpara">
            I am a skilled and innovative developer with a passion for creating
            dynamic and user-friendly web applications. With a strong foundation
            in  front-end development and database , I am committed to
            delivering high-quality work and constantly seeking new challenges
            to enhance my skills and knowledge.As a self-learner, I am a driven
            and dedicated individual who is passionate about using technology to
            solve real-world problems. With a focus on continual
            self-improvement, I have developed a diverse skill set through
            self-study and independent projects and am always eager to take on
            new challenges and expand my knowledge.
          </p>
          <Link to={dowcv} className="link-btn cvbtn" target="_blank">
            Download CV
          </Link>
        </div>
        <div className="second-main">
          <img src={mypic} alt="MYPIC" className="pic" />
        </div>
      </div>
    </>
  );
};

export default About;
