import React from "react";
import "./Event.css";

const Event = (props) => {
  const { eventImage, eventTitle, eventJoinedDate } = props.attendedEvent;
  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview">
          {/* <img src={eventImage}></img> */}
        </div>
        <div className="course-info">
          <h2>{eventTitle}</h2>
          <h6>{eventJoinedDate}</h6>
          <button className="btn">Cancle</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
