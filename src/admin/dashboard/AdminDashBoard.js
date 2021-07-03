import React from "react";
// import { Button } from "reactstrap";
import "./style.css";
//react-router-dom
import { Link } from "react-router-dom";

//img
import img from "../../assets/admin-image.png";

import { isAuthenticated } from "../auth/helper";

const AdminDashBoard = () => {
  const {
    admin: { name, email },
  } = isAuthenticated();

  const data = isAuthenticated();
  console.log(data);
  return (
    <>
      <div className="admin-section admin-section-dark">
        <div className="admin-parent">
          <div className="admin-child child-sec-1">
            <img src={img} alt="" className="admin-image" />
          </div>
          <div className="admin-child child-sec-2">
            <React.Fragment>
              <div>
                <span className="badge badge-danger">Admin Information</span>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span style={{ color: "red" }}>
                      Name : <span className="badge badge-warning">{name}</span>
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span style={{ color: "red" }}>
                      Email :
                      <span className="badge badge-warning">{email}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </React.Fragment>
          </div>
          <div className="admin-child child-sec-2">
            <div>
              <span className="badge badge-danger">Admin Navigation</span>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/admin/create/event" className="linkItem">
                    Create Event
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/manage/events" className="linkItem">
                    Manage Events
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/create/category" className="linkItem">
                    Create Event Category
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/manage/categories" className="linkItem">
                    Manage Event Category
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
