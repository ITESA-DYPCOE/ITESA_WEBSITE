import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/index";
import { deleteEvent, getAllEvents } from "./adminapicalls";

import { IoArrowBackCircle } from "react-icons/all";
import makeToast from "../../components/utils/Toaster/Toaster";

const ManageEvents = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const { admin, token } = isAuthenticated();

  const preload = () => {
    getAllEvents().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLatestEvents(data.upcomingEvent);
        setPastEvents(data.pastEvent);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const removeEvent = eventId => {
    deleteEvent(admin._id, eventId, token)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          makeToast("success", "Removed Successfully!");
          preload();
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          background: "linear-gradient(to right, #ffdd77 0%, #ffdf7e 94%)",
          padding: "15px 0px",
        }}
      >
        <h1
          style={{
            color: "#FF7F07",
            fontFamily: "Nunito",
            borderBottom: "2px solid #fff",
          }}
        >
          All Our Lovely Events
        </h1>
        <span>
          <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
            <h1 className="admin-home-btn" style={{ margin: "0px" }}>
              <IoArrowBackCircle />
            </h1>
          </Link>
        </span>
        <h2>
          Total
          <span style={{ color: "#FF4D50", padding: "0em 0.5em" }}>
            {latestEvents.length + pastEvents.length}
          </span>
          events
        </h2>
      </div>
      <div
        style={{
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          // flexDirection: "column",
          background: "linear-gradient(to right, #ffdd77 0%, #ffdf7e 94%)",
        }}
        className="makeItResponisve"
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                color: "#FF7F07",
                fontFamily: "Nunito",
                borderBottom: "2px solid #fff",
              }}
            >
              Latest Events
            </h2>
            {latestEvents &&
              latestEvents.map(event => {
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // flexDirection: "column",
                        padding: "35px",
                      }}
                    >
                      <div style={{ padding: "20px" }}>
                        <h3
                          style={{
                            color: "#FF4D50",
                            fontFamily: "Nunito",
                            fontSize: "1.2rem",
                          }}
                        >
                          {event.name}
                        </h3>
                      </div>
                      {/* <div className="col-4">
              <Link
                className="btn btn-success"
                to={`/admin/product/update/productId`}
              >
                <span className="">Update</span>
              </Link>
            </div> */}
                      <div>
                        <Link to={`/admin/update/event/${event._id}`}>
                          <button className="btn-outline-success">
                            Update
                          </button>
                        </Link>
                      </div>
                      <div>
                        <button
                          onClick={() => removeEvent(event._id)}
                          className="btn-outline-success"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              color: "#FF7F07",
              fontFamily: "Nunito",
              borderBottom: "2px solid #fff",
            }}
          >
            Past Events
          </h2>
          {pastEvents &&
            pastEvents.map(event => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // flexDirection: "column",
                      padding: "35px",
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <h3
                        style={{
                          color: "#FF4D50",
                          fontFamily: "Nunito",
                          fontSize: "1.2rem",
                        }}
                      >
                        {event.name}
                      </h3>
                    </div>
                    {/* <div className="col-4">
              <Link
                className="btn btn-success"
                to={`/admin/product/update/productId`}
              >
                <span className="">Update</span>
              </Link>
            </div> */}
                    <div>
                      <Link to={`/admin/update/event/${event._id}`}>
                        <button className="btn-outline-success">Update</button>
                      </Link>
                    </div>
                    <div>
                      <button
                        onClick={() => removeEvent(event._id)}
                        className="btn-outline-success"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ManageEvents;
