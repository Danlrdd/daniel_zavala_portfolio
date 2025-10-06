const SectionTitle = ({ title, className = '' }) => {
	return (
		<h3
			className={`absolute top-0 left-0 w-fit origin-top-left bg-lime-500 px-2 py-1 text-white transition-transform duration-300 group-hover:scale-115 sm:text-lg lg:text-xl 2xl:text-2xl ${className}`}
		>
			{title}
		</h3>
	);
};

export default SectionTitle;
