import React, { useContext } from 'react';
import styled from 'styled-components';
import { AboutSectionWrapper, HeaderWrapper, HeaderLinks, HorizontalText } from './styled'
import { ThemeContext } from './../store'
import CloseButtonIcon from './../assets/CloseButton';

const CloseButtonWrapper = styled.svg`
	height: 48px;
	width: 48px;
`

const AboutDescription = styled.section`
	margin-top: 120px;
	font-size: 60px;
	font-weight: bold;

	@media (max-width: 992px) {
		font-size: 48px;
	}

	@media (max-width: 792px) {
		font-size: 40px;
	}

	@media (max-width: 767px) {
		font-size: 32px;
	}

	@media (max-width: 667px) {
		font-size: 24px;
	}

	@media (max-width: 621px) {
		font-size: 20px;
	}

	@media (max-width: 350px) {
		font-size: 16px;
	}
`;

function AboutMe () {
	const { state: theme } = useContext(ThemeContext);

	return (
		<AboutSectionWrapper>
			<HeaderWrapper>
				<HeaderLinks className="header-links">
					<HorizontalText>About</HorizontalText>
				</HeaderLinks>
				<CloseButtonWrapper>
					<CloseButtonIcon fill={theme.color} />
				</CloseButtonWrapper>
			</HeaderWrapper>
			<AboutDescription>
				Hi, I am Shashank
			</AboutDescription>
		</AboutSectionWrapper>
	)
}

export default AboutMe;