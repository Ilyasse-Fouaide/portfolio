import React from "react";

function SectionTitle({ children }) {
	return (
		<h2 className="px-8 py-4 mb-5 text-lg tracking-wider border-b border-neutral-50/10 font-playfair">
			{children}
		</h2>
	);
}

export default SectionTitle;
