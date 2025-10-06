import SectionContainer from '../utilities/SectionContainer';
import SectionTitle from '../utilities/SectionTitle';
import NovaGenGamesStudios from '../../assets/images/about_us.png';
import MainButton from '../utilities/MainButton';

const Projects = () => {
	return (
		<section>
			<SectionContainer>
				<div className="group relative flex flex-col gap-4 border-l-2 border-lime-500 pt-20 pl-4 sm:gap-6 lg:gap-8 2xl:gap-10">
					<SectionTitle title={'Proyectos'} />
					<article className="group relative flex flex-col gap-4 border border-gray-400 p-4 text-white transition-colors duration-300 before:absolute before:inset-0 before:z-0 before:origin-left before:scale-x-0 before:bg-white before:duration-300 before:content-[''] hover:text-gray-900 hover:transition-transform hover:before:scale-x-100">
						<div className="absolute top-0 right-0 flex -translate-y-full gap-4">
							<a
								href=""
								className="border border-gray-400 px-2 py-1 text-white group-hover:bg-gray-900"
							>
								Visítalo
							</a>
							<a
								href=""
								className="border border-gray-400 px-2 py-1 text-white group-hover:bg-gray-900"
							>
								El código
							</a>
						</div>
						<h4 className="z-10 text-xl font-bold transition-all duration-300 sm:text-xl lg:text-2xl 2xl:text-3xl">
							Landing Page Novagen Game Studios
						</h4>
						<div className="z-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
							<div className="flex flex-col gap-4">
								<p>
									Construida para una desarrolladora de videojuegos ficticia. En
									este proyecto aprendí la potencia de React en compañia de
									Tailwind y la practicidad de la Separation of Concerns
									(SoC).{' '}
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="bg-lime-500 px-1">Html</span>
									<span className="bg-lime-500 px-1">CSS</span>
									<span className="bg-lime-500 px-1">Javascript</span>
									<span className="bg-lime-500 px-1">React</span>
									<span className="bg-lime-500 px-1">Tailwind</span>
									<span className="bg-lime-500 px-1">Git</span>
								</div>
							</div>
							<div className="flex h-full w-full items-center overflow-hidden">
								<img
									src={NovaGenGamesStudios}
									alt=""
									className="h-full max-h-64 w-full object-cover transition-transform duration-300 hover:scale-110"
								/>
							</div>
						</div>
					</article>
				</div>
			</SectionContainer>
		</section>
	);
};

export default Projects;
