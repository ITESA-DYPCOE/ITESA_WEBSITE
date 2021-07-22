import React from "react";
import "./About.css";

const Motive = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#1C1E24",
          padding: "90px 0 100px",
          width: "100%",
        }}
      >
        <div
          className="container"
          style={{
            width: "100%",
            padding: "0px 35px",
            // maxWidth: "1440px !important",
            margin: 0,
            height: "200px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginRight: "-15px",
              marginLeft: "-15px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "0 0 100%", maxWidth: "100%" }}>
              <div className="cardWrapper " id="makeResp">
                <div
                  className="text-center"
                  style={{
                    color: "#fff",
                    marginBottom: "16px !important",
                    textAlign: "center",
                  }}
                >
                  <h4 style={{ fontSize: "1.2rem" }}>
                    Information technology Engineering Students Association
                  </h4>
                  <p
                    className="info-styles typing"
                    style={{ fontSize: "1rem" }}
                  >
                    We, aim to provide an exposure to a community with various
                    multi-talented personalities, meet them,build connections,
                    increase your network, interactwith your seniors, juniors
                    and explore new opportunities
                  </p>
                  <span style={{ paddingRight: "1rem", fontSize: "1.5rem" }}>
                    🤩🚀
                  </span>
                </div>

                {/* <div className="linkToJoin" style={{ textAlign: "center" }}>
                  <a
                    className="discordLink"
                    href="https://discord.gg/WyTupBNX76"
                    target="_blank"
                  >
                    Join Now
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Motive;
