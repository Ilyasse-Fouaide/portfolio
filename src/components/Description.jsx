import React from "react";

function Description({ children }) {
	return (
		<p className="max-w-lg mt-2 text-sm text-justify text-neutral-300">
			{children}
		</p>
	);
}

export default Description;
