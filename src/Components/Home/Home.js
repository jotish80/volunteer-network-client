import React, { useContext, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TitleContext } from "../../App";
import FakeData from "../../FakeData/FakeData";
import "./Home.css";
const Home = () => {
  const [title, setTitle] = useContext(TitleContext);
  const [details, setDetails] = useState({});

  return (
    <div className="row" style={{ backgroundColor: "#f0f2f5" }}>
      {FakeData.map((image) => (
        <div
          onClick={() => setTitle({ title: image.title, image: image.image })}
          className="col-md-3"
        >
          <Link to="/register">
            <img src={image.image} alt="" />
          </Link>
          <h3>{image.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
