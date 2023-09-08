import React from "react";
import Card from "react-bootstrap/Card";
import projimg from "../images/project1.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Card
        style={{
          marginTop: "30px",
          width: "25vw",
          marginBottom: "40px",
          marginLeft: "40px",
          border: "2px solid black"
        }}
      >
        <Card.Img variant="top" src={projimg} style={{ height: "50vh" }} />
        <Card.Body>
          <Card.Title>WeddingBellsConnect</Card.Title>
          <Card.Text style={{ fontSize: "15px" }}>
            I developed the frontend for the WeddingBellsConnect application,
            which facilitates convenient wedding bookings for foreigners. In
            this role, I implemented key features such as user registration,
            payment processing, and refund functionality to enhance the overall
            user experience.
          </Card.Text>
          <Link
            variant="primary"
            to="https://github.com/dhanshreepipare/WeddingBellsConnect"
            target="_blank"
            style={{
              border: "none",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight:"500", 
              padding:"6px 20px",
              borderRadius:"10px",
              backgroundColor: isHovering ? "#DCDCDC" : "#7D3C98",
              color: isHovering ? "#000" : "#fff",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Go To Project Code
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Projects;
