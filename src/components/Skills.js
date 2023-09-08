import React from "react";
import html from "../images/html-5.png";
import css from "../images/css-3.png";
import js from "../images/js.png";
import react from "../images/react.png";
import bootstrap from "../images/bootstrap.png";
import mysql from "../images/mysql.png";
import mongo from "../images/mongo.jpg";
import tailwind from "../images/tailwind.png";
// import express from "../images/express.png";
import git from "../images/git.png";
// import node from "../images/node-js.png";
import postman from "../images/postman.png";

const Skills = () => {
  return (
    <>
      <div className="main-con">
        <div>
          <h3 className="head"> Skills</h3>
          <div className="first">
            <img src={html} alt="HTML LOGO" className="logoimgs" />
            <img src={css} alt="CSS LOGO" className="logoimgs" />
            <img src={js} alt=" JS LOGO" className="logoimgs" />
            <img src={react} alt="REACT LOGO" className="logoimgs" />
          </div>
          <div className="second">
            <img src={bootstrap} alt="bootstrap logo" className="logoimgs" />
            <img src={tailwind} alt="tailwind logo" className="logoimgs" />
            <img src={mysql} alt="Mysql LOGO" className="logoimgs" />
            <img src={mongo} alt="Mongo LOGO" className="logoimgs mongoimg" />
          </div>
          <div className="third">
            {/* <img src={node} alt="node logo" className="logoimgs" />
            <img
              src={express}
              alt="express LOGO"
              className="logoimgs expressimg"
            /> */}
            <img src={postman} alt="postman logo" className="logoimgs" />
            <img src={git} alt="git LOGO" className="logoimgs" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
