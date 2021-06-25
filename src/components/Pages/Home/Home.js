import React from "react";
import "../../../App.css";
import Faq from "../../Faq/Faq";

import { Card } from "../../CardSection/Card";
import { About } from "../../About/About";

const Home = () => {
	return (
		<>
			<About />
			<Card />
			<Faq />
		</>
	);
};

export default Home;
