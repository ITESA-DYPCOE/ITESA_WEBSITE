import React from "react";
import "../../App.css";
import "./HeroSection..css";
import img from "./assets/HeroImg.png";

export const styles = {
	color: "#E9F34E",
	textTransform: "capitalize",
	fontFamily: "monospace",
};
const HeroSection = () => {
	return (
		<>
			<div className="hero-container">
				<img id="tech-image" src={img} alt="img" />
				<h1 id="hero_txt">
					Information Technology Engineering Students Association
					<br />
					(ITESA)
				</h1>
				<p style={{ padding: "0.3rem", letterSpacing: "2px" }}>
					❛❛
					<i style={styles}>Create Explore Commit...</i>
				</p>
			</div>
		</>
	);
};

export default HeroSection;
