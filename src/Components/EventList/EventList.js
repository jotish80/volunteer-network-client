import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Event from "../Event/Event";

const EventList = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [attendedEvent, setAttendedEvent] = useState([]);

  useEffect(() => {
    console.log("useeffect called");
    fetch(
      `https://immense-meadow-47819.herokuapp.com/single-user-registered-event?email=${loggedUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAttendedEvent(data);
      })
      .catch((err) => console.log(err));
  }, [loggedUser]);
  return (
    <div>
      <h1>event list</h1>
      {attendedEvent.map((data) => (
        <Event
          attendedEvent={{
            id: data._id,
            eventName: data.eventTitle,
            eventImage: data.eventImage,
            eventDate: data.date,
          }}
        />
      ))}
    </div>
  );
};

export default EventList;
