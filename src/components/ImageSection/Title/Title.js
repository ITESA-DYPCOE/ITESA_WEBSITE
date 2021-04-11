import React from "react";

////@material-ui
import Typography from "@material-ui/core/Typography";

import "./Title.css";

const styles = {
	fontFamily: "Nunito",
};

const Title = props => {
	// console.log(props);
	// const { icon } = props;
	return (
		<>
			<div className="boxy">
				<Typography
					variant="h5"
					className="title-color"
					id="MuiTypography-h5"
					style={styles}
				>
					{props.coreteaminfo}
				</Typography>
			</div>
		</>
	);
};

export default Title;
