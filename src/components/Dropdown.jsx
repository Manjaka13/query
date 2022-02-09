import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import useVisible from "../hooks/useVisible";

/*
	Component that handles dropdowns
*/

const Dropdown = ({
	list, disabled, select
}) => {
	const [selected, setSelected] = useState(0);
	const [ref, visible, show] = useVisible(false);
	let mappedList = null;

	if(list)
		mappedList = list.map((item, key) => (
			<li
				className="item w-70px pd-10 pd-l-20 pd-r-20 bg-whitesmoke tr-200"
				key={ uuidv4() }
				onClick={ () => selectItem(key) }
			>
				{ item }
			</li>
		));
	const selectItem = key => {
		setSelected(key);
		if(typeof select === "function")
			select(name, list[key]);
		// show(false);
	};
	const toggle = () => visible ? show(false) : show(true);

	if(visible && disabled)
		show(false)

	return (
		<div
			className={`dropdown b-b ${disabled ? "p-n" : "p"}`}
			ref={ref}
			onClick={ toggle }
		>
			<p className={`current bg-whitesmoke pd-10 pd-l-20 pd-r-20 w-70px p-n n-s tr-200 ${disabled && 'disabled'}`}>
				{list && list[selected] || "List"}
			</p>
			{!disabled && (
				<React.Fragment>
					{!visible && <Icon className="dropdown__caret" icon={['fas', 'caret-down']} />}
					{visible && <Icon className="dropdown__caret" icon={['fas', 'caret-up']} />}
				</React.Fragment>
			)}
			{visible && (
				<ul className="dropdown__list">
					{ list && mappedList }
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
