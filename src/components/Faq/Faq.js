import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Faq.css";
import { questions } from "./faqApi";
const useStyles = makeStyles(theme => ({
  root: {
    width: "65%",
    margin: "1rem auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accord: {
    background:
      "linear-gradient(15deg, rgb(55, 62, 75) 0%, rgb(33, 35, 43) 60%)",
    margin: "8px 0",
    borderRadius: 10,
    "&:hover": {
      background: "#1c1e24",
      transition: "all 0.3s ease-in-out",
    },
  },
}));

const Faq = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //   console.log(questions);
  return (
    <div>
      <div className="faq">
        <div className="faq-block faq-block-dark">
          <h2
            style={{
              fontFamily: "Nunito",
              padding: "0.5em 0",
              textAlign: "center",
            }}
          >
            Frequently asked questions ?
          </h2>
          {questions.map(item => {
            return (
              <>
                <Accordion
                  className={`accord-dark ${classes.accord}`}
                  expanded={expanded === item.panel}
                  onChange={handleChange(`${item.panel}`)}
                >
                  <AccordionSummary
                    style={{ color: "white" }}
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "white", fontSize: "27px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h3 className="faq-question">
                      <i
                        className="fa fa-question-circle"
                        aria-hidden="true"
                      ></i>
                      &nbsp; &nbsp;{item.question}
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ color: "white" }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
