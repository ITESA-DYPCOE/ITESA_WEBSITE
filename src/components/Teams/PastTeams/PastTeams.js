import React from "react";

//@material-ui
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//react-icons
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

//data
import pastTeamData from "./data/pastTeams.json";
import "../css/Team.styles.css";

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
  background: "#fdd03d",
  backgroundImage: "linear-gradient(45deg, #535733 0%, #dfbd4e  84%",
};

export const PastTeams = () => {
  const classes = useStyles();
  return (
    <div className="dark">
      <div className="about-dark"></div>
      <div className="team">
        <Typography variant="h3" className="about-dark" id="pastTeamTitle">
          ITESA TEAM 2020-2021
        </Typography>
        <div className="dash dash-dark" style={styles}></div>
        <div className="row1">
          {Object.keys(pastTeamData).map(role => {
            if (role === "heads") {
              return pastTeamData[role].map(roleObject => {
                return (
                  <div className="card1 card1-dark">
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
        <div className="row2">
          {Object.keys(pastTeamData).map(role => {
            if (role === "members") {
              return pastTeamData[role].map(roleObject => {
                return (
                  <div className="card1 card1-dark">
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
      </div>
    </div>
  );
};
