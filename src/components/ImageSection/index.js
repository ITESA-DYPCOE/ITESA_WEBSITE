import React from "react";
import { Parallax } from "react-parallax";

import img from "./assets/College-Photo.jpg";
import "./style.css";

import Title from "./Title/Title";

const ImageSection = () => {
	return (
		<>
			<Title
				collegename="D Y Patil College Of Engineering, Akurdi, Pune"
				department="Department of Information Technology"
			/>
			<div className="about">
				<div className="about-section">
					<Parallax
						bgImage={img}
						className="aboutus-img"
						strength={400}
						id="parallax-effect"
					></Parallax>
				</div>
			</div>
		</>
	);
};

export default ImageSection;
