import React from "react";
import { Link } from "react-router-dom";
import linkdin from "../images/linkedin.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="footer">
          <div className="footerfirst">
            <p className="footerhead">
              © 2023 DhanshreePipare. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="footerthird">
          <Link to="https://github.com/dhanshreepipare">
            <img src={github} alt="Github Logo" className="imglogo" />
          </Link>
          <Link to="https://www.instagram.com/pipare_dhanshree_/">
            <img src={instagram} alt="Instagram Logo" className="imglogo" />
          </Link>
          <Link to="https://www.linkedin.com/in/dhanshree-pipare-3569b9202/">
            <img src={linkdin} alt="Linkdin Logo" className="imglogo" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
