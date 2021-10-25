import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ImageHelper from "../../../../admin/helper/ImageHelper";
import "../css/Events.styles.css";

const EventCard = props => {
  const { event } = props;

  return (
    <div>
      <div className="container">
        <div className="flipper">
          <div className="front">
            <ImageHelper event={event} />
          </div>
          <div className="back">
            <p className="event-title">{event.eventTitle}</p>
            <p className="event-date">
              {props.eventStartDate} - {props.eventEndDate}
            </p>
            <p className="event-info">{event.eventInfo}</p>
            <p className="event-info">{event.category}</p>
            <span className="info-check">For more info check out here</span>
            <div className="social-linkss">
              <a
                href={event.linkedinLink}
                target="_blank"
                rel="noreferrer"
                className="social-footer"
              >
                <FaLinkedinIn
                  className="fab fa-linkedin"
                  style={{ fontSize: "1.5em" }}
                />
              </a>
              <a
                href={event.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="social-footer"
              >
                <FaInstagram
                  className="fab fa-instagram"
                  style={{ fontSize: "1.5em" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
