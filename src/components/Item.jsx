function Item({ children, className }) {
	return (
		<div
			className={`overflow-hidden relative border rounded-lg shadow-2xl border-neutral-50/10 bg-neutral-900 shadow-neutral-600/10 ${className}`}
		>
			<div className="absolute top-0 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#262626,#171717)]"></div>
			<div className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-100 to-transparent"></div>
			<div className="relative z-0">{children}</div>
		</div>
	);
}

export default Item;
