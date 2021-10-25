import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import img from "../../assets/admin-image.png";
import "./style.css";

const AdminDashBoard = () => {
  const {
    admin: { name, email },
  } = isAuthenticated();

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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
