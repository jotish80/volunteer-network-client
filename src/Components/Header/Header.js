import React, { useContext } from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
const Header = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Link to="/">
            <img style={{ width: "20%" }} src={logo} alt="" />
          </Link>
        </Nav>
        <Form inline>
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Nav.Link href="#features">Donation</Nav.Link>
          <Nav.Link href="#pricing">Events</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Button variant="primary">Register</Button>&nbsp; &nbsp;
          <Button variant="dark">Admin</Button>&nbsp;
          <strong>{loggedUser.name}</strong>
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
