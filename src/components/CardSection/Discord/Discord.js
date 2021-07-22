import React from "react";
import logo from "../../../assets/discord-logo.png";
import "./Discord.css";

const Discord = () => {
  return (
    <section
      style={{
        backgroundColor: "#1E2124",
        padding: "120px 0 80px 0",
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
            <div className="cardWrapper">
              <div
                className="imgWrapper"
                style={{
                  position: "relative",
                  top: "-180px",
                  height: "0",
                  marginBottom: "16px",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "145px", marginTop: "40px" }}
                />
              </div>
              <div
                className="text-center"
                style={{
                  color: "#fff",
                  marginBottom: "16px !important",
                  textAlign: "center",
                }}
              >
                <h4 style={{ fontSize: "1.2rem" }}>
                  Join ITESA Community on Discord
                </h4>
                <p className="para-styles" style={{ fontSize: "1rem" }}>
                  Meet students and educators excited about technology🚀
                </p>
              </div>

              <div className="linkToJoin" style={{ textAlign: "center" }}>
                <a
                  className="discordLink"
                  href="https://discord.gg/WyTupBNX76"
                  target="_blank"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discord;
