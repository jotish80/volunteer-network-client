import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import "./List.css";
const List = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [addEvent, setAddEvent] = useState([]);

  useEffect(() => {
    console.log("useeffect called");
    fetch(
      `https://immense-meadow-47819.herokuapp.com/add-event-list?email=${loggedUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAddEvent(data);
      })
      .catch((err) => console.log(err));
  }, [loggedUser]);
  return (
    <div>
      <h2>Volunteer Register List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Register Date</th>
            <th>Volunteer List</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="First Name">{addEvent.name}</td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
          <tr>
            <td data-column="First Name"></td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
          <tr>
            <td data-column="First Name"></td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
          <tr>
            <td data-column="First Name"></td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
          <tr>
            <td data-column="First Name"></td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
          <tr>
            <td data-column="First Name"></td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
          <tr>
            <td data-column="First Name"></td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
          <tr>
            <td data-column="First Name"></td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
          <tr>
            <td data-column="First Name"></td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
          <tr>
            <td data-column="First Name"></td>
            <td data-column="Last Name"></td>
            <td data-column="Job Title"></td>
            <td data-column="Twitter"></td>
            <button>Delete</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
