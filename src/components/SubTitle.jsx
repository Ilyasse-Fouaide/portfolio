import React from "react";
import Calendar from "./icons/Calendar";

function SubTitle({ date, children }) {
	return (
		<div
			className={`mt-2 text-xs text-neutral-400 ${
				date && "inline-flex items-center gap-2"
			}`}
		>
			{date && (
				<span>
					<Calendar color={"#a3a3a3"} />
				</span>
			)}
			{children}
		</div>
	);
}

export default SubTitle;
