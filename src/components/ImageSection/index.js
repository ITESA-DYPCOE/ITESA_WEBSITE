import React from "react";
import Tagline from "../About/Tagline";

import img from "./assets/College-Photo.jpg";
import "./style.css";

const ImageSection = () => {
  return (
    <>
      <div className="about">
        <div className="about-section">
          <img src={img} alt="" className="aboutus-img" />
        </div>
        <Tagline />
      </div>
    </>
  );
};

export default ImageSection;
