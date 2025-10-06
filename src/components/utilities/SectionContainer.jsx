const SectionContainer = ({ children, className = '' }) => {
	return (
		<div
			className={`mx-auto max-w-7xl px-4 py-8 sm:px-10 sm:py-14 lg:px-4 lg:py-20 ${className}`}
		>
			{children}
		</div>
	);
};

export default SectionContainer;
