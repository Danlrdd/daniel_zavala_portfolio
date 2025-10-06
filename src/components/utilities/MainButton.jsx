const MainButton = ({ children, className = '', href }) => {
	return (
		<button className="relative w-fit overflow-hidden bg-gray-500 before:absolute before:inset-0 before:z-0 before:origin-left before:scale-x-0 before:bg-gray-900 before:transition-all before:duration-300 before:content-[''] hover:before:scale-x-100">
			<a
				className={`relative z-10 flex w-fit items-center gap-4 px-4 py-2 font-bold text-white sm:text-lg lg:text-xl 2xl:text-2xl ${className}`}
				href={href}
			>
				{children}
			</a>
		</button>
	);
};

export default MainButton;
