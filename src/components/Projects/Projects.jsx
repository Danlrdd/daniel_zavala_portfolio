import SectionContainer from '../utilities/SectionContainer';
import SectionTitle from '../utilities/SectionTitle';
import MainCard from '../utilities/MainCard';
import { PROJECTS_CONSTANTS } from './PROJECTS_CONSTANTS';

const Projects = () => {
	return (
		<section>
			<SectionContainer>
				<div className="group relative flex flex-col gap-12 border-l-2 border-lime-500 pt-20 pl-4 sm:gap-14 lg:gap-16 2xl:gap-18">
					<SectionTitle title={'Proyectos'} />
					{PROJECTS_CONSTANTS.find(
						(obj) => obj.name === 'cardConstants'
					).constants.map((prop) => {
						return (
							<MainCard
								key={prop.title}
								title={prop.title}
								description={prop.description}
								linkOne={prop.linkOne}
								linkOneTitle={prop.linkOneTitle}
								linkTwo={prop.linkTwo}
								linkTwoTitle={prop.linkTwoTitle}
								tags={prop.tags}
								imageSrc={prop.imageSrc}
								imageAlt={prop.imageAlt}
							></MainCard>
						);
					})}
				</div>
			</SectionContainer>
		</section>
	);
};

export default Projects;
