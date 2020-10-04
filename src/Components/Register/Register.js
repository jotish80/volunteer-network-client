import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TitleContext, UserContext } from "../../App";

import "./Register.css";

const Register = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [title, setTitle] = useContext(TitleContext);
  console.log(title);
  return (
    <div className="main">
      <div className="form">
        <h1>Register As A Volunteer</h1>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="name" value={loggedUser.name} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username or Email</Form.Label>
            <Form.Control type="email" value={loggedUser.email} />
          </Form.Group>
          <Form.Group controlId="Date">
            <Form.Label> Date</Form.Label>
            <Form.Control type="Date" placeholder="Date" />
          </Form.Group>
          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="Description" value={title.title} />
          </Form.Group>

          <Button style={{ width: "100%" }} variant="primary">
            Registration
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
