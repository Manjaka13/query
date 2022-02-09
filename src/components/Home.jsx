import React from "react";
import URLInput from "./URLInput";

/*
	Home page
*/

const Home = () => {
	return (
		<div className="home w-100 h-100 f-c-ce-ce">
			<div className="home__window o-h br-10">
				<URLInput />
			</div>
		</div>
	);
};

export default Home;
