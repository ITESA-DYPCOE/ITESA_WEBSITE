import React from "react";

import { isAuthenticated } from "../auth/helper";

//img
import img from "../../assets/Wavy_Bus-25_Single-07-removebg-preview.png";

import "./style.css";

function UnApprovedAdminDashBoard() {
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
                <span className="badge badge-danger">
                  Not Approved Admin Information
                </span>
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
                  <li className="list-group-item">
                    <span style={{ color: "green" }}>
                      Note :
                      <span
                        className="badge badge-warning"
                        style={{ color: "red" }}
                      >
                        you must be approved by super admin!
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </React.Fragment>
          </div>
          {/* <div className="admin-child child-sec-1">
            <li className="list-group-item">
              <span style={{ color: "red" }}>
                <span className="badge badge-danger">
                  <span style={{ color: "green" }}>Note : </span> you must be
                  approved by super admin
                </span>
              </span>
            </li>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default UnApprovedAdminDashBoard;
