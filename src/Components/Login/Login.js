import React, { useContext, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import google from "../../images/logos/google.png";
import "./Login.css";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
  });
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        };
        setLoggedUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error.code, error.message);
      });
  };
  return (
    <div className="login">
      <div className="login-form">
        <h1>Login With</h1>
        {user.isSignedIn && <p> welcome, {user.name}</p>}
        <button
          onClick={handleSignIn}
          style={{
            width: "80%",
            height: "35px",
            border: "1px solid gray",
            borderRadius: "25px",
            padding: "3px 0px",
          }}
        >
          <img
            style={{ width: "10%", height: "25px", objectFit: "contain" }}
            src={google}
            alt=""
          />{" "}
          &nbsp; &nbsp; Continue with Google
        </button>

        <p>
          Don't have an account?
          <span
            style={{
              color: "rgb(255,166,0)",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
