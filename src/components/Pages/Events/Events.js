import React, { useState, useEffect } from "react";
import moment from "moment";
import EventCard from "./Event-Card/index";

//@material-ui
import Typography from "@material-ui/core/Typography";

import "./css/Events.styles.css";

//data
import eventData from "./data/events.json";

import {
  getAllEvents,
  getAllCategories,
  getCate,
} from "../../../admin/helper/adminapicalls";

const styles = {
  background: "#2b5876",
  backgroundImage: "linear-gradient(45deg, #574133 0%, #ff8b07 84%)",
};

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);

  const preload = () => {
    getAllEvents().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEvents(data);
      }
    });
    getAllCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  console.log(events);
  console.log(categories);

  return (
    <div className="dark">
      <div className="event-about-dark"></div>
      <div className="events-section">
        <Typography variant="h3" className="about-dark" id="MuiTypography-h3">
          Latest Events
        </Typography>
        <div className="dash dash-dark" style={styles}></div>
        <div className="row1">
          {events.map(event => {
            console.log(event);
            let DATE = moment(event.date).format("YYYY-MM-DD");
            console.log(categories);

            return (
              <>
                <EventCard
                  event={event}
                  img={event.image}
                  eventTitle={event.name}
                  eventDate={DATE}
                  eventInfo={event.info}
                  eventLink={"eventLink"}
                  open={true}
                  linkedinLink={event.linkedinURL}
                  instagramLink={event.instagramURL}
                />
              </>
            );
          })}
          {/* {Object.keys(eventData).map(category => {
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
          })} */}
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
