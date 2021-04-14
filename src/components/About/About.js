import React from "react";

import img from "./Techie.png";
import "./About.css";

export function About() {
	return (
		<>
			<div className="section section-dark">
				<div className="parent">
					<div className="boxie-child boxie-child1">
						<img src={img} alt="illustration" className="login-image" />
					</div>
					<div className="child child2">
						<div className="card card-dark">
							<h1 className="box-heading box-heading-dark">
								Information Technology Engineering Students Association
								<br />
								(ITESA)
							</h1>
							<p className="motive">#Create Explore Commit...</p>
						</div>
					</div>

					<svg
						className="wave"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
					>
						<path
							fill="#323b44"
							fillOpacity="0.25"
							d="M0,288L48,282.7C96,277,192,267,288,266.7C384,267,480,277,576,240C672,203,768,117,864,106.7C960,96,1056,160,1152,160C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
				</div>
				<div className="boxie">
					<h1 className="box-sub-heading box-heading-dark">
						D Y Patil College Of Engineering, Akurdi, Pune
					</h1>
					<p className="boxie-info">Department of Information Technology</p>
				</div>
			</div>
		</>
	);
}
