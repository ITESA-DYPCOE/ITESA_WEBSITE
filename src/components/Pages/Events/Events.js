import React from "react";

import EventCard from "./Event-Card/index";

//@material-ui
import Typography from "@material-ui/core/Typography";

import "./css/Events.styles.css";

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
          <EventCard
            img="https://res.cloudinary.com/sjdev/image/upload/v1618754595/ITESA-TEAM/Events-Images/No-Events_zpaqyg.png"
            eventTitle="No Events for now"
            eventDate=""
            eventInfo="More exiciting events on the way.."
            eventLink=""
            open="noEvents"
            linkedinLink="https://www.linkedin.com/company/itesa-dyp/"
            instagramLink="https://www.instagram.com/itesa.dyp/"
          />
        </div>
      </div>

      <div className="event-about-dark"></div>
      <div className="events-section">
        <Typography variant="h3" className="about-dark" id="MuiTypography-h3">
          Past Events Section
        </Typography>
        <div className="dash dash-dark" style={styles}></div>
        <div className="row1">
          <EventCard
            img="https://res.cloudinary.com/sjdev/image/upload/v1618483993/ITESA-TEAM/Events-Images/itesa-picturesque_qsowrg.jpg"
            eventTitle="Picturesque 2021 📸"
            eventDate="7 March 20201"
            eventInfo="Photography contest"
            eventLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            open="false"
            linkedinLink="https://www.linkedin.com/posts/itesa-dyp_itesa-dypcoe-photography-activity-6773164635530006528-xtS4"
            instagramLink="https://www.instagram.com/p/CMRD1JApDx9/?utm_source=ig_web_copy_link"
          />
          <EventCard
            img="https://res.cloudinary.com/sjdev/image/upload/v1618483292/ITESA-TEAM/Events-Images/itesa-cp_wtehws.png"
            eventTitle="Info Session ☑️"
            eventDate="6 Feb 2021 11:00 am - 12:30 pm"
            eventInfo="Intro to Coding Platforms & LinkedIn "
            eventLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            open="false"
            linkedinLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            instagramLink="https://www.instagram.com/p/CK5veJkpjF5/?utm_source=ig_web_copy_link"
          />
          <EventCard
            img="https://res.cloudinary.com/sjdev/image/upload/v1618483411/ITESA-TEAM/Events-Images/itesa-codestorm_w7bijc.png"
            eventTitle="CodeStorm 2021 💻🔥"
            eventDate="6 Feb 2021 11:00 am - 01:00 pm"
            eventInfo="The Sherlock based coding competiton on HackerRank"
            eventLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            open="false"
            linkedinLink="https://www.linkedin.com/posts/itesa-dyp_itesa-dypcoe-coding-activity-6765529302474874880-Ein3"
            instagramLink="https://www.instagram.com/p/CLYUtKkJd4V/?utm_source=ig_web_copy_link"
          />
          <EventCard
            img="https://res.cloudinary.com/sjdev/image/upload/v1618480590/ITESA-TEAM/Events-Images/image4_wzdusa.jpg"
            eventTitle="Event 01"
            eventDate="13/06/2001"
            eventInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            eventLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            open="false"
            linkedinLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            instagramLink="https://www.instagram.com/itesa.dyp/"
          />
          <EventCard
            img="https://res.cloudinary.com/sjdev/image/upload/v1618480584/ITESA-TEAM/Events-Images/image2_kmigrr.jpg"
            eventTitle="Event 02"
            eventDate="13/06/2001"
            eventInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            eventLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            open="false"
            linkedinLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            instagramLink="https://www.instagram.com/itesa.dyp/"
          />
          <EventCard
            img="https://res.cloudinary.com/sjdev/image/upload/v1618480582/ITESA-TEAM/Events-Images/image3_rmi7fx.jpg"
            eventTitle="Event 03"
            eventDate="13/06/2001"
            eventInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            eventLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            open="false"
            linkedinLink="https://www.linkedin.com/company/itesa-dyp/mycompany/"
            instagramLink="https://www.instagram.com/itesa.dyp/"
          />
        </div>
      </div>
    </div>
  );
};
