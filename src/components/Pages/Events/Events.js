import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { BoltLoader } from "react-awesome-loaders";
import moment from "moment";
import { getAllEvents } from "../../../admin/helper/adminapicalls";
import { toast } from "material-react-toastify";
import EventCard from "./Event-Card/index";
import "./css/Events.styles.css";

const styles = {
  background: "#2b5876",
  backgroundImage: "linear-gradient(45deg, #574133 0%, #ff8b07 84%)",
};

const Events = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const preload = () => {
    getAllEvents().then(data => {
      setLoading(true);

      if (data.error) {
        setLoading(false);
        toast.error("error", data.error);
      } else {
        setLatestEvents(data.upcomingEvent);
        setPastEvents(data.pastEvent);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <>
      <div className="event-about-dark"></div>
      <div className="events-section">
        <Typography variant="h3" className="about-dark" id="MuiTypography-h3">
          Latest Events
        </Typography>
        <div className="dash dash-dark" style={styles}></div>
        <div className="dark">
          {loading ? (
            <>
              <BoltLoader
                className={"loaderbolt"}
                boltColor={"#BA7CEE"}
                backgroundBlurColor={"#E0E7FF"}
              />
            </>
          ) : (
            <>
              <div className="row1">
                {latestEvents.length === 0 ? (
                  <div
                    style={{
                      background: "#2D313F",
                      padding: "30px",
                      borderRadius: "12px",
                    }}
                  >
                    <h1>Stay tuned !</h1>
                  </div>
                ) : (
                  <>
                    {latestEvents &&
                      latestEvents.map(event => {
                        let START_DATE = moment(event.date.startDate).format(
                          "MMMM Do YYYY"
                        );
                        let END_DATE = moment(event.date.endDate).format(
                          "MMMM Do YYYY"
                        );
                        return (
                          <>
                            <EventCard
                              event={event}
                              eventStartDate={START_DATE}
                              eventEndDate={END_DATE}
                            />
                          </>
                        );
                      })}
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <div className="event-about-dark"></div>
        <div className="events-section">
          <Typography variant="h3" className="about-dark" id="MuiTypography-h3">
            Past Events Section
          </Typography>
          <div className="dash dash-dark" style={styles}></div>
          {loading ? (
            <>
              <BoltLoader
                className={"loaderbolt"}
                boltColor={"#BA7CEE"}
                backgroundBlurColor={"#E0E7FF"}
              />
            </>
          ) : (
            <>
              <div className="row1">
                {pastEvents.length === 0 ? (
                  <h1>No Events Found!</h1>
                ) : (
                  <>
                    {pastEvents &&
                      pastEvents.map(event => {
                        let START_DATE = moment(event.date.startDate).format(
                          "MMMM Do YYYY"
                        );
                        let END_DATE = moment(event.date.endDate).format(
                          "MMMM Do YYYY"
                        );
                        return (
                          <>
                            <EventCard
                              event={event}
                              eventStartDate={START_DATE}
                              eventEndDate={END_DATE}
                            />
                          </>
                        );
                      })}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
