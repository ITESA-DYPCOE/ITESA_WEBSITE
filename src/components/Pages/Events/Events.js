import React from "react";

import EventCard from "./Event-Card/index";

//@material-ui
import Typography from "@material-ui/core/Typography";

import "./css/Events.styles.css";

//data
import eventData from "./data/events.json";

const styles = {
  background: "#2b5876",
  backgroundImage: "linear-gradient(45deg, #574133 0%, #ff8b07 84%)",
};

export const Events = () => {
  return (
    <div className="dark">
      <div className="event-about-dark"></div>
      <div className="events-section">
        <Typography variant="h3" className="about-dark" id="MuiTypography-h3">
          Latest Events
        </Typography>
        <div className="dash dash-dark" style={styles}></div>
        <div className="row1">
          {Object.keys(eventData).map(category => {
            if (category === "latest") {
              return eventData[category].map(categoryObject => {
                return (
                  <EventCard
                    img={categoryObject.img}
                    eventTitle={categoryObject.title}
                    eventDate={categoryObject.date}
                    eventInfo={categoryObject.info}
                    eventLink={categoryObject.link}
                    open={categoryObject.open}
                    linkedinLink={categoryObject.linkedin}
                    instagramLink={categoryObject.instagram}
                  />
                );
              });
            }
            return null;
          })}
        </div>
      </div>

      <div className="event-about-dark"></div>
      <div className="events-section">
        <Typography variant="h3" className="about-dark" id="MuiTypography-h3">
          Past Events Section
        </Typography>
        <div className="dash dash-dark" style={styles}></div>
        <div className="row1">
          {Object.keys(eventData).map(category => {
            if (category === "past") {
              return eventData[category].map(categoryObject => {
                return (
                  <EventCard
                    img={categoryObject.img}
                    eventTitle={categoryObject.title}
                    eventDate={categoryObject.date}
                    eventInfo={categoryObject.info}
                    eventLink={categoryObject.link}
                    open={categoryObject.open}
                    linkedinLink={categoryObject.linkedin}
                    instagramLink={categoryObject.instagram}
                  />
                );
              });
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
