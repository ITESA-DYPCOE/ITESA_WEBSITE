import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ event }) => {
  const imageurl = event
    ? `${API}/event/image/${event._id}`
    : `https://res.cloudinary.com/sjdev/image/upload/v1621754342/ITESA-TEAM/Events-Images/175_cqqjcp.jpg`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ width: "100%", borderRadius: "15px" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
