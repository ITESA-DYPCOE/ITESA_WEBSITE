import React from "react";
// TODO: import { Parallax } from "react-parallax";

import img from "./assets/College-Photo.jpg";
import "./style.css";

const ImageSection = () => {
	return (
		<>
			<div className="about">
				<div className="about-section">
					<img src={img} alt="" className="aboutus-img" />
				</div>
			</div>
		</>
	);
};

export default ImageSection;
