import React from "react";
import { API } from "../../backend";
import "../../components/Pages/Events/css/Events.styles.css";

const ImageHelper = ({ event }) => {
  const imageurl = event
    ? `${API}/event/image/${event._id}`
    : `https://res.cloudinary.com/sjdev/image/upload/v1621754342/ITESA-TEAM/Events-Images/175_cqqjcp.jpg`;
  return (
    <>
      <img id="img" src={imageurl} alt="itesa-event-photos" />
    </>
  );
};

export default ImageHelper;
