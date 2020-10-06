import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { TitleContext, UserContext } from "../../App";
import FakeData from "../../FakeData/FakeData";

import "./Register.css";

const Register = () => {
  let history = useHistory();
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [title, setTitle] = useContext(TitleContext);

  const [user, setUser] = useState({
    name: loggedUser.name,
    email: loggedUser.email,
    description: "",
    eventTitle: title.title,
    date: new Date(),
    eventImage: title.image,
  });
  const handleBlur = (e) => {
    user[e.target.name] = e.target.value;
    console.log(user);
  };

  const handleSubmit = (e) => {
    console.log("Form submitted");

    console.log(user);
    fetch("https://immense-meadow-47819.herokuapp.com/addCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push("/eventlist");
      });

    e.preventDefault();
  };
  return (
    <div className="main">
      <div className="form">
        <h1>Register As A Volunteer</h1>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              onBlur={handleBlur}
              value={loggedUser.name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username or Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onBlur={handleBlur}
              value={loggedUser.email}
            />
          </Form.Group>
          <Form.Group controlId="Date">
            <Form.Label> Date</Form.Label>
            <Form.Control
              type="Date"
              name="date"
              onBlur={handleBlur}
              placeholder="Date"
              required
            />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="eventTitle"
              onBlur={handleBlur}
              value={title.title}
            />
          </Form.Group>
          <input
            style={{ display: "none" }}
            name="eventImage"
            onBlur={handleBlur}
            value={title.image}
          />
          <button onClick={handleSubmit} style={{ width: "100%" }}>
            Registration
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
