import React from "react";
import { Link } from "react-router-dom";

//styles
import "./PageNotFound.css";

//image
import img from "./assets/err-img.jpg";

const PageNotFound = () => {
	return (
		<div className="not-found">
			<div className="error">
				<div>
					<img className="error-logo" src={img} alt="404" />
				</div>
				<div className="error-content">
					The page you are looking for is not available.
				</div>
				<Link to="/">
					<button id="err_btn" type="submit">
						Go Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
