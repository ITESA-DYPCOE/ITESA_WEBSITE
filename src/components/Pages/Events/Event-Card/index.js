import React from "react";
import "../css/Events.styles.css";
import ImageHelper from "../../../../admin/helper/ImageHelper";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const EventCard = props => {
  // console.log(props.eventDate);

  return (
    <div>
      <div className="container">
        <div className="flipper">
          <div className="front">
            {/* <img id="img" src={props.img} alt="event-img" /> */}
            <ImageHelper event={props.event} />
          </div>
          <div className="back">
            <p className="event-title">{props.eventTitle}</p>
            <p className="event-date">
              {props.eventStartDate} - {props.eventEndDate}
            </p>
            <p className="event-info">{props.eventInfo}</p>
            <p className="event-info">{props.category}</p>
            {/* <a
              href={props.open === "true" ? props.eventLink : "*"}
              target="_blank"
              rel="noreferrer"
              className="event-link"
            >
              <span>
                {props.open === "true" ? (
                  <>
                    Register Here <i class="fas fa-link" id="link-icon"></i>
                  </>
                ) : (
                    <>
                      Event Closed <i class="fas fa-times" id="link-icon"></i>
                    </>
                  ) && props.open === "noEvents" ? (
                  <>
                    Stay tuned <i class="fas fa-globe" id="link-icon"></i>
                  </>
                ) : (
                  <>
                    Event Closed <i class="fas fa-times" id="link-icon"></i>
                  </>
                )}
              </span>
            </a> */}
            <span className="info-check">For more info check out here</span>
            <div className="social-linkss">
              <a
                href={props.linkedinLink}
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
                href={props.instagramLink}
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
