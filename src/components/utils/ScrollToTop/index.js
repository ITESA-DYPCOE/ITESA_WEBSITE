import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
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
    <FaArrowCircleUp
      className="scroll-top"
      onClick={scrollTop}
      size={70}
      style={{
        height: 50,
        color: "#15CDFC",
        display: showScroll ? "flex" : "none",
      }}
    />
  );
};
