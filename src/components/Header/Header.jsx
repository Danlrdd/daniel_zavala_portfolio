import SocialMediaSection from '../utilities/SocialMediaSection';
import { HeaderStyles } from './Header.styles';

const HeroSection = ({ className = '' }) => {
	return (
		<header className={`${HeaderStyles.header} ${className}`}>
			<div className={HeaderStyles.titleSection}>
				<h1 className={HeaderStyles.title}>Daniel Zavala</h1>
				<h2 className={HeaderStyles.subtitle}>Front End Developer</h2>
				<p className={HeaderStyles.description}>
					También especialista en producción televisiva, digital e esports
					broadcasting.
				</p>
			</div>
			<SocialMediaSection />
		</header>
	);
};

export default HeroSection;
