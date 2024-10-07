import React from "react";

function ButtonInfo({ children }) {
	return (
		<button className="px-2 py-[3px] rounded-[4px] bg-neutral-800">
			{children}
		</button>
	);
}

export default ButtonInfo;
