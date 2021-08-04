import React, { useState, useEffect } from "react";
import moment from "moment";
import EventCard from "./Event-Card/index";

//preloader
// import { css } from "@emotion/react";
// import HashLoader from "react-spinners/HashLoader";
import { BoltLoader } from "react-awesome-loaders";

//@material-ui
import Typography from "@material-ui/core/Typography";

import "./css/Events.styles.css";

//data
// import eventData from "./data/events.json";

import {
  getAllEvents,
  // getAllCategories,
  // getCate,
} from "../../../admin/helper/adminapicalls";
import makeToast from "../../utils/Toaster/Toaster";
// import { CgLayoutGridSmall } from "react-icons/cg";

//preloader css
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

const styles = {
  background: "#2b5876",
  backgroundImage: "linear-gradient(45deg, #574133 0%, #ff8b07 84%)",
};

export const Events = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  let [loading1, setLoading1] = useState(true);
  let [loading2, setLoading2] = useState(true);

  // const [sameDate, setSameDate] = useState("");
  // const [categories, setCategories] = useState([]);

  // setDelay = () =>{

  // };

  const preload = () => {
    // getAllCategories().then(data => {
    //   if (data.error) {
    //     console.log(data.error);
    //   } else {
    //     setCategories(data);
    //   }
    // });

    getAllEvents().then(data => {
      setLoading1(true);
      setLoading2(true);
      // console.log("LOADING DATA.....value is ", loading1);

      if (data.error) {
        setLoading1(false);
        setLoading2(false);
        // console.log(" ERROR LOADING IS", loading);
        makeToast("error", data.error);
      } else {
        // setCategories(data);
        setLatestEvents(data.upcomingEvent);
        setLoading1(false);
        setPastEvents(data.pastEvent);
        setLoading2(false);

        // console.log(data.upcomingEvent);
        // console.log(data.pastEvent);
      }
    });
  };

  useEffect(() => {
    preload();
    // setDelay();
  }, []);

  // console.log(events);
  // console.log(categories);

  return (
    <>
      <div className="event-about-dark"></div>
      <div className="events-section">
        <Typography variant="h3" className="about-dark" id="MuiTypography-h3">
          Latest Events
        </Typography>
        <div className="dash dash-dark" style={styles}></div>
        <div className="dark">
          {loading1 ? (
            <>
              {/* <HashLoader
                color="#FF7F07"
                loading={loading1}
                css={override}
                size={100}
                width={50}
              /> */}
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
                        console.log(event);
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
                              img={event.image}
                              eventTitle={event.name}
                              eventStartDate={START_DATE}
                              eventEndDate={END_DATE}
                              eventInfo={event.info}
                              eventLink={"eventLink"}
                              open={true}
                              linkedinLink={event.linkedinURL}
                              instagramLink={event.instagramURL}
                            />
                          </>
                        );
                      })}
                  </>
                )}

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
            </>
          )}
        </div>

        <div className="event-about-dark"></div>
        <div className="events-section">
          <Typography variant="h3" className="about-dark" id="MuiTypography-h3">
            Past Events Section
          </Typography>
          <div className="dash dash-dark" style={styles}></div>
          {loading2 ? (
            <>
              {/* <HashLoader
                color="white"
                loading={loading2}
                css={override}
                size={100}
                width={50}
              /> */}
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
                        console.log("PAST EVENT", event);
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
                              img={event.image}
                              eventTitle={event.name}
                              eventStartDate={START_DATE}
                              eventEndDate={END_DATE}
                              eventInfo={event.info}
                              eventLink={"eventLink"}
                              open={true}
                              linkedinLink={event.linkedinURL}
                              instagramLink={event.instagramURL}
                            />
                          </>
                        );
                      })}
                  </>
                )}

                {/* {Object.keys(eventData).map(category => {
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
            })} */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
