import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

const Button_Team = ({ children, type, onClick, buttonStyle, buttonSize }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<>
			<Link className="btn-mobile" href="#">
				<button
					className={`btn ${checkButtonStyle} ${checkButtonSize}`}
					type={type}
					onClick={onClick}
				>
					{children}
				</button>
			</Link>
		</>
	);
};
export default Button_Team;
