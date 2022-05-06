import React from "react";
import Plus from "../images/plus.png";
import { useState } from "react";
import "./components.css";

function Advice(props) {
	const [toggleOpen, toggle] = useState(false);

	// if untoggled
	// return short advice
	if (!toggleOpen) {
		return (
			<div
				className="advice-toggle-short"
				onClick={() => toggle(!toggleOpen)}
			>
				<p className="advice-short-closed">{props.short}</p>
				<img src={Plus} alt="" className="plus" />
			</div>
		);
	} else {
		// if toggled
		// return long advice
		return (
			<div
				className="advice-toggle-long"
				onClick={() => toggle(!toggleOpen)}
			>
				{/* row 1 */}
				<p className="advice-short-open">{props.short}</p>
				<img src="" alt="" className="" />
				{/* row 2 */}
				<p className="advice-long">{props.long}</p>
			</div>
		);
	}
}

export default Advice;
