import React from "react";
import "./components.css";

function Advice(props) {
	// useState line

	// if untoggled
	// return short advice
	return (
		<div className="advice-toggle-short">
			<p className="advice-short-closed">{props.short}</p>
			<img src="" alt="" />
		</div>
	);

	// if toggled
	// return long advice
	// return (
	// 	<div className="advice-toggle-short">
	// row 1
	// 		<p className="advice-short-open">{props.short}</p>
	// 		<img src="" alt="" />
	// row 2
	//  	<p className="advice-long">{props.long}</p>
	// 	</div>
	// );
}

export default Advice;
