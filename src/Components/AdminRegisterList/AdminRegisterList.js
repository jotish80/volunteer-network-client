import React, { useEffect, useState } from "react";
import "./AdminRegisterList.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button, IconButton } from "@material-ui/core";

const AdminRegisterList = () => {
  const [allRegisteredVolunteer, setAllRegisteredVolunteer] = useState([]);
  useEffect(() => {
    fetch(
      "https://immense-meadow-47819.herokuapp.com/admin/volunteer-register-list"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllRegisteredVolunteer(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteRegisteredEventFromAdmin = (id) => {
    console.log(id);
    fetch(
      `https://immense-meadow-47819.herokuapp.com/admin-delete-registered-volunteer/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="admin__registeredVol">
      <h2 style={{ margin: "10px 0", color: "gray", textAlign: "center" }}>
        Volunteers Registered List
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Registering date</th>
            <th>Volunteer list</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allRegisteredVolunteer.map((item) => (
            <tr>
              <td data-column="First Name">{item.name}</td>
              <td data-column="Last Name">{item.email}</td>
              <td data-column="Job Title">{item.date}</td>
              <td data-column="Twitter">{item.event}</td>
              <td data-column="Twitter">
                <IconButton aria-label="delete" color="secondary">
                  <DeleteForeverIcon
                    onClick={() =>
                      deleteRegisteredEventFromAdmin(`${item._id}`)
                    }
                  />
                  {/* <DeleteIcon /> */}
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRegisterList;
