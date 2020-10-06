import React from "react";
import "./Event.css";

const Event = (props) => {
  const { eventImage, eventName, eventDate, id } = props.attendedEvent;

  const handelDelete = (id) => {
    console.log(id);
    fetch(`https://immense-meadow-47819.herokuapp.com/event-collection/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview">
          <img src={eventImage} alt="" />
        </div>
        <div className="course-info">
          <h2>{eventName}</h2>
          <h6>{eventDate}</h6>

          <button onClick={() => handelDelete(`${id}`)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
