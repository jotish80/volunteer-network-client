import React, { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
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
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Nav.Link>Donation</Nav.Link>
          <Link to="/eventlist"> Events</Link>
          <Nav.Link>Blog</Nav.Link>
          {loggedUser.name ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ padding: "8px", color: "gray" }}>
                {loggedUser.name}
              </span>
            </div>
          ) : (
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <button
                style={{ backgroundColor: "#80bfff", borderRadius: "5px" }}
              >
                Register
              </button>{" "}
              <button
                style={{ backgroundColor: "#80bfff", borderRadius: "5px" }}
              >
                Admin
              </button>{" "}
            </Link>
          )}
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
