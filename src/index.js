import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import "./styles/index.scss";
import "./helpers/icons";
import Home from "./components/Home";

/*
	JS entry point
*/

ReactDom.render(
	<StrictMode>
		<Home />
	</StrictMode>
	, document.getElementById("root")
);