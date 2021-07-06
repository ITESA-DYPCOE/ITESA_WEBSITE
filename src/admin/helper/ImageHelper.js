import React from "react";
import { API } from "../../backend";
import "../../components/Pages/Events/css/Events.styles.css";

const ImageHelper = ({ event }) => {
  const imageurl = event
    ? `${API}/event/image/${event._id}`
    : `https://res.cloudinary.com/sjdev/image/upload/v1621754342/ITESA-TEAM/Events-Images/175_cqqjcp.jpg`;
  return (
    <>
      <img
        id="img"
        src={imageurl}
        alt="event-photo"
        // style={{ width: "100%", borderRadius: "15px" }}
      />
    </>
  );
};

export default ImageHelper;
