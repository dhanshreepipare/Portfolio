import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImg from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <NavLink>
            <img src={LogoImg} alt="lOGO IMG" className="logoimg" />
          </NavLink>
          <Nav>
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
            <NavLink to="/contact" className="navlink">
              Contact
            </NavLink>
            <NavLink to="/skill" className="navlink">
              Skills
            </NavLink>
            <NavLink to="/project" className="navlink">
              Projects
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
