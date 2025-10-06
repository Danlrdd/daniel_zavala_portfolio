import MainButton from '../utilities/MainButton';
import RegularP from '../utilities/RegularP';
import SectionContainer from '../utilities/SectionContainer';
import SectionTitle from '../utilities/SectionTitle';
import { aboutMeStyles } from './AboutMe.styles';

const AboutMe = () => {
	return (
		<section>
			<SectionContainer>
				<div className={aboutMeStyles.contentContainer}>
					<SectionTitle title={'Sobre mi'} />
					<RegularP
						content={
							'Especialista en producción de transmisiones en vivo con experiencia en Esports y deportes profesionales. Fui Productor General de Transmisiones en Live Media para la Movistar Liga Pro Gaming y la OGA DPC Liga Regional Sudamérica.'
						}
					/>
					<RegularP
						content={
							'Participé en la producción de la Liga 2 y Liga Femenina de Fútbol Profesional del Perú para Nativa Televisión en 2024, alcanzando uno	de los picos de audiencia online más altos del país en la final	femenina. También participé en proyectos de alto impacto como Lima Games Week 2019, entre otros.'
						}
					/>
					<MainButton href={'#'}>
						Descarga mi CV{' '}
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className={aboutMeStyles.buttonIcon}
							>
								<path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
								<path
									fillRule="evenodd"
									d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</MainButton>
				</div>
			</SectionContainer>
		</section>
	);
};

export default AboutMe;
