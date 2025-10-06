const RegularP = ({ className = '', content }) => {
	return (
		<p className={`text-white sm:text-lg lg:text-xl 2xl:text-2xl ${className}`}>
			{content}
		</p>
	);
};

export default RegularP;
