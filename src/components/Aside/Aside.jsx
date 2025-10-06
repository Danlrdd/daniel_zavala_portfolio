import AboutMe from '../AboutMe/AboutMe';
import MyTechnologies from '../MyTechnologies/MyTechnologies';
import Projects from '../Projects/Projects';

const Aside = ({ className = '' }) => {
	return (
		<aside className={className}>
			<AboutMe />
			<MyTechnologies />
			<Projects />
		</aside>
	);
};

export default Aside;
