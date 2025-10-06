const mainCardStyles = {
	article: `group relative flex flex-col gap-4 border border-gray-400 p-4 text-white transition-colors duration-300 before:absolute before:inset-0 before:z-0 before:origin-left before:scale-x-0 before:bg-white before:duration-300 before:content-[''] hover:text-gray-900 hover:transition-transform hover:before:scale-x-100`,
	linksSection: 'absolute top-0 right-0 flex -translate-y-full gap-4',
	anchor: 'border border-gray-400 px-2 py-1 text-white hover:bg-gray-900',
	cardTitle:
		'z-10 text-xl font-bold transition-all duration-300 sm:text-xl lg:text-2xl 2xl:text-3xl',
	contentContainer: 'z-10 grid grid-cols-1 gap-4 lg:grid-cols-2',
	descriptionContainer: 'flex flex-col gap-4',
	tags: 'flex flex-wrap gap-2',
	imageContainer: 'flex h-full w-full items-center overflow-hidden',
	image:
		'h-full max-h-64 w-full object-cover transition-transform duration-300 hover:scale-110',
};

const MainCard = ({
	cardStyle = '',
	linkOne,
	linkOneTitle = '',
	linkTwo,
	linkTwoTitle = '',
	tags = [],
	title = '',
	description = '',
	imageSrc = '',
	imageAlt = '',
}) => {
	return (
		<article
			className={`${mainCardStyles.article} ${cardStyle}`}
			aria-label={`${title} Card`}
		>
			<div className={mainCardStyles.linksSection}>
				{linkOne && (
					<a
						href={linkOne}
						target="_blank"
						rel="noopener noreferrer"
						className={mainCardStyles.anchor}
					>
						{linkOneTitle}
					</a>
				)}
				{linkTwo && (
					<a
						href={linkTwo}
						target="_blank"
						rel="noopener noreferrer"
						className={mainCardStyles.anchor}
					>
						{linkTwoTitle}
					</a>
				)}
			</div>
			{title && <h4 className={mainCardStyles.cardTitle}>{title}</h4>}
			<div className={mainCardStyles.contentContainer}>
				<div className={mainCardStyles.descriptionContainer}>
					{description && <p>{description}</p>}
					{tags.length > 0 && (
						<div className={mainCardStyles.tags}>
							{tags.map((tag) => (
								<span key={tag} className="bg-lime-500 px-1">
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
				{imageSrc && (
					<div className={mainCardStyles.imageContainer}>
						<img
							src={imageSrc}
							alt={imageAlt}
							className={mainCardStyles.image}
						/>
					</div>
				)}
			</div>
		</article>
	);
};

export default MainCard;
