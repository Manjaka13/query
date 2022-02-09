import React, { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown";

/*
	Field for entering URL
*/

const prefixes = ["HTTP", "HTTPS"];
const methods = ["GET", "POST", "DELETE"];

const URLInput = () => {
	const [disabled, setDisabled] = useState(false);
	const [prefix, setPrefix] = useState(prefixes[0]);
	const [method, setMethod] = useState(methods[0]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabled(true);
		const form = new FormData(e.currentTarget);
		const urlData = {
			method,
			prefix,
			url: form.get("url")
		};
		console.log(urlData);
	};
	const select = (name, value) => {
		if(name === "prefix")
			setPrefix(value);
		else if(name === "method")
			setMethod(value);
	};

	return (
		<div className="url-input">
			<form className="f-r-st-ce" onSubmit={handleSubmit}>
				<Dropdown
					name="method"
					list={ methods }
					disabled={ disabled }
					select={ select }
				/>
				<Dropdown
					name="prefix"
					list={ prefixes }
					disabled={ disabled }
					select={ select }
				/>
				<input
					className={`url-input__input bg-whitesmoke pd-10 pd-l-20 pd-r-20x ${disabled && 'disabled'}`}
					type="text"
					name="url"
					placeholder="Enter the URL"
					disabled={disabled}
					required
				/>
				{!disabled && (
					<button className="bg-theme2 pd-10 pd-l-20 pd-r-20 p" type="submit">
						<Icon icon={["fas", "search"]} /> Query
					</button>
				)}
			</form>
		</div>
	);
};

export default URLInput;
