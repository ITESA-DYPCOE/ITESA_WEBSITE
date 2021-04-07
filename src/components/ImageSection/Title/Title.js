import React from "react";

////@material-ui
import Typography from "@material-ui/core/Typography";

import "./Title.css";

const styles = {
	fontFamily: "Poppins",
	letterSpacing: "1px",
};

const Title = props => {
	// console.log(props);
	// const { icon } = props;
	return (
		<div className="box">
			<Typography
				variant="h5"
				className="title-color"
				id="MuiTypography-h5"
				style={styles}
			>
				{props.collegename}
				{props.coreteaminfo}
			</Typography>
			<Typography
				variant="h6"
				className="subtitle-color"
				id="MuiTypography-h6"
				style={styles}
			>
				{props.department}
			</Typography>
		</div>
	);
};

export default Title;
