import React, { useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import "./style.css";

export const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <BiUpArrow
      className="scroll-top"
      onClick={scrollTop}
      size={70}
      style={{
        height: 50,
        color: "#FFC107",
        display: showScroll ? "flex" : "none",
      }}
    />
  );
};
