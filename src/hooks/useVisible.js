import { useState, useEffect, useRef } from "react";

/*
	Hook that detects outside click and escape to close component
*/

const useVisible = (initialState) => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(initialState ? true : false);

	const close = () => setVisible(false);
	const handleEscape = (e) => {
		if(e.key === "Escape")
			close();
	};
	const handleClick = (e) => {
		const clickedOutside = ref && ref.current && !ref.current.contains(e.target);
		if(clickedOutside)
			close();
	}

	useEffect(() => {
		document.addEventListener("keydown", handleEscape, true);
		document.addEventListener("mousedown", handleClick, true);
		return () => {
			document.removeEventListener("keydown", handleEscape, true);
			document.removeEventListener("mousedown", handleClick, true);
		};
	}, []);

	return [ref, visible, setVisible];
};

export default useVisible;
