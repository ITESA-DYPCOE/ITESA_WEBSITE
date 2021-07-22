import React from "react";

//@material-ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

//react-router-dom
import { Link } from "react-router-dom";

//react-icon
import { BsBoxArrowRight } from "react-icons/bs";

const useStyles = makeStyles({
  container: {
    position: "relative",
    textAlign: "center",
  },
  btn: {
    border: "none",
    margin: 20,
    width: 250,
    height: 65,
    borderRadius: 6,
    textTransform: "uppercase",
    // boxShadow: "0px 1px 4px 3px rgba(105, 208, 255, 0.3)",
    cursor: "pointer",
    color: "#fff",
    backgroundSize: "200%",
    transition: "0.4s",
    "&:hover": {
      background:
        "linear-gradient(45deg, rgb(55, 62, 75) 0%, rgb(33, 35, 43) 90%)",
    },
    fontFamily: "Poppins",
    letterSpacing: "1.3px",
    fontSize: "0.7rem",
  },
  btn1: {
    background: "#363D4A",
  },
});

const Btn = () => {
  const classes = useStyles();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={classes.container} onClick={scrollTop}>
        <Link to="/technical-team" style={{ textDecoration: "none" }}>
          <Button className={`${classes.btn} ${classes.btn1}`}>
            Technical Team
            <BsBoxArrowRight
              style={{ fontSize: "1.3rem", paddingLeft: "4px" }}
            />
          </Button>
        </Link>
        <Link to="/management-team" style={{ textDecoration: "none" }}>
          <Button className={`${classes.btn} ${classes.btn1}`}>
            Management Team
            <BsBoxArrowRight
              style={{ fontSize: "1.3rem", paddingLeft: "4px" }}
            />
          </Button>
        </Link>
        <Link to="/cultural-team" style={{ textDecoration: "none" }}>
          <Button className={`${classes.btn} ${classes.btn1}`}>
            Cultural Team
            <BsBoxArrowRight
              style={{ fontSize: "1.3rem", paddingLeft: "4px" }}
            />
          </Button>
        </Link>
        <Link to="/past-teams" style={{ textDecoration: "none" }}>
          <Button className={`${classes.btn} ${classes.btn1}`}>
            Past Teams
            <BsBoxArrowRight
              style={{ fontSize: "1.3rem", paddingLeft: "4px" }}
            />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Btn;
