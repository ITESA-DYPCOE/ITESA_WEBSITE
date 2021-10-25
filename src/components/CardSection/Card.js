import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FaFacebook, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Title from "../ImageSection/Title/Title";
import Btn from "./Button/Btn";
import ImageSection from "../ImageSection/";
import Discord from "./Discord/Discord";
import Faq from "../Faq/Faq";
import teamData from "./data/team-roles.json";
import "../Teams/css/Team.styles.css";

const useStyles = makeStyles(() => ({
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));

const styles = {
  background: "#2b5876",
  backgroundImage: "linear-gradient(45deg, #403357 0%, #914ad3 84%)",
};

export const Card = () => {
  const classes = useStyles();
  return (
    <>
      <div className="dark">
        <div className="about-dark"></div>
        <ImageSection />
        <div className="team">
          <Title coreteaminfo="Faculty" />
          <div className="dash" style={styles}></div>
          <div className="row1">
            {Object.keys(teamData).map(role => {
              if (role !== "members") {
                return teamData[role].map((roleObject, index) => {
                  return (
                    <div key={index} className="card1 card1-dark">
                      <div className="photo">
                        <img
                          alt="profile"
                          className="cover"
                          src={roleObject.profile_pic}
                        />
                        <div className="team-social">
                          <a
                            href={roleObject.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="card-footer"
                          >
                            <FaLinkedinIn
                              className="fab fa-linkedin"
                              style={{ fontSize: "1.5em" }}
                            />
                          </a>
                          <a
                            href={roleObject.facebook}
                            target="_blank"
                            rel="noreferrer"
                            className="card-footer"
                          >
                            <FaFacebook
                              className="fab fa-facebook"
                              style={{ fontSize: "1.5em" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className={classes.details}>
                        <CardContent className={classes.content} id="content">
                          <Typography component="h6" variant="h6" id="Mui-h6">
                            {roleObject.name}
                          </Typography>
                          <div>
                            <p id="description">{roleObject.description}</p>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  );
                });
              }
              return null;
            })}
          </div>
          <Title coreteaminfo="Meet Our Core Team" />
          <div className="row2">
            {Object.keys(teamData).map(role => {
              if (role === "members") {
                return teamData[role].map((roleObject, index) => {
                  return (
                    <div key={index} className="card1 card1-dark">
                      <div className="photo">
                        <img
                          alt="profile"
                          className="cover"
                          src={roleObject.profile_pic}
                        />
                        <div className="team-social">
                          <a
                            href={roleObject.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="card-footer"
                          >
                            <FaLinkedinIn
                              className="fab fa-linkedin"
                              style={{ fontSize: "1.5em", marginTop: "-1px" }}
                            />
                          </a>
                          <a
                            href={roleObject.email}
                            target="_blank"
                            rel="noreferrer"
                            className="card-footer"
                          >
                            <HiOutlineMail
                              className="fas fa-envelope"
                              style={{ fontSize: "1.5em" }}
                            />
                          </a>
                          <a
                            href={roleObject.github}
                            target="_blank"
                            rel="noreferrer"
                            className="card-footer"
                          >
                            <FaGithubAlt
                              className="fab fa-github"
                              style={{ fontSize: "1.5em" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className={classes.details}>
                        <CardContent className={classes.content} id="content">
                          <Typography component="h6" variant="h6" id="Mui-h6">
                            {roleObject.name}
                          </Typography>
                          <div>
                            <p id="description">{roleObject.description}</p>
                          </div>
                          <div>
                            <p id="intro">{roleObject.intro}</p>
                          </div>
                          <br />
                        </CardContent>
                      </div>
                    </div>
                  );
                });
              }
              return null;
            })}
          </div>
          <Btn />
          <Discord />
          <Faq />
        </div>
      </div>
    </>
  );
};
