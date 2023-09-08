
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobnum: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="main">
        <Form className="main-form" onSubmit={handleSubmit}>
          <h3 className="ehead">Contact Us</h3>
          <Form.Group className=" mb-3 contact-form " controlId="formBasicFirst">
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              className="formcontrol"
              required
              name="firstName" 
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 contact-form" controlId="formBasicLast">
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              className="formcontrol"
              required
              name="lastName" 
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 contact-form" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter Email"
              className="formcontrol"
              required
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 contact-form" controlId="formBasicMob">
            <Form.Control
              type="text"
              placeholder="Enter Mobile Number"
              className="formcontrol"
              required
              name="mobnum" 
              value={formData.mobnum}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 contact-form" controlId="formBasicMessage">
            <Form.Control
              type="text"
              placeholder="Enter Message"
              className="formcontrol"
              required
              name="message" 
              value={formData.message}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button className="subbtn" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Contact;
