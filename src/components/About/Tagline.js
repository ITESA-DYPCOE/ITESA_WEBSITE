import React from "react";
import "./About.css";
import Typography from "@material-ui/core/Typography";

import { FaLaptopCode } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { RiCommunityLine } from "react-icons/ri";

const styles = {
  color: "#ffd9a0ef",
  fontFamily: "Nunito",
  fontSize: "1.3em",
};

const Motive = () => {
  return (
    <>
      <div className="taglineDiv">
        <Typography variant="h3" className="about-dark" id="tagline">
          <Typography variant="h3" className="about-dark" id="headerTxt">
            About ITESA
          </Typography>
          <span style={styles}>We</span>,
          <span id="headerInfo">
            aim to provide an exposure to a community with various
            multi-talented personalities, meet them,
            <span id="headerInfo">
              build connections, increase your network, interact
            </span>
            with your seniors, juniors and explore new opportunities
          </span>
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
    </>
  );
};

export default Motive;
