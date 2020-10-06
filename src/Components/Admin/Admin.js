import React, { useState } from "react";
import "./Admin.css";

import AdminRegisterList from "../AdminRegisterList/AdminRegisterList";
import AdminEvents from "../AdminEvents/AdminEvents";

const Admin = () => {
  // switching all registered volunteer list and Add new Event
  const [changeDatabase, setChangeDatabase] = useState({
    registeredList: true,
  });

  return (
    <div className="adminHome">
      <div className="adminHome__left-section">
        <h4 onClick={() => setChangeDatabase({ registeredList: true })}>
          Volunteer register list
        </h4>
        <h4 onClick={() => setChangeDatabase({ registeredList: false })}>
          + Add Event
        </h4>
      </div>

      <div className="adminHome__right-section">
        <div className="adminHome__database">
          {changeDatabase.registeredList == true ? (
            <AdminRegisterList />
          ) : (
            <AdminEvents />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
