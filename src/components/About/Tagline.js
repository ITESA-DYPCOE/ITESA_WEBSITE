import React from "react";
import "./About.css";
import Typography from "@material-ui/core/Typography";

import { FaLaptopCode } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { RiCommunityLine } from "react-icons/ri";

const styles = {
  color: "#FFC107",
  fontFamily: "Nunito",
  fontSize: "1.4em",
  padding: "0.2em",
};

const Motive = () => {
  return (
    <div className="taglineDiv">
      <Typography variant="h3" className="about-dark" id="tagline">
        <span style={styles}>ITESA</span>, aims to provide an exposure to a
        community with various multi-talented personalities, meet them, build
        connections, increase your network, interact with your seniors, juniors
        and explore new opportunities
      </Typography>
      <div className="tagline-icons">
        <FaLaptopCode />
      </div>
      <div className="tagline-icons">
        <GiTechnoHeart />
      </div>
      <div className="tagline-icons">
        <RiCommunityLine />
      </div>
    </div>
  );
};

export default Motive;
