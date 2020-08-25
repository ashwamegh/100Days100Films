import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { AboutSectionWrapper, HeaderWrapper, HeaderLinks, RowFlex, ColumnFlex } from './styled'
import { ThemeContext } from './../store'
import CloseButtonIcon from './../assets/CloseButton';
import Footer from './../components/footer';

const CloseButtonWrapper = styled.svg`
	height: 28px;
	width: 28px;
	cursor: pointer;
`

const Main = styled.main`
	padding-top: 4rem;
`;

const Headline = styled.h1`
	font-size: 8.333rem;
	line-height: 9.889rem;

	@media (max-width: 767px) {
		font-size: 4rem;
		line-height: 5.444rem;
	}

	@media (max-width: 540px) {
		font-size: 2.667rem;
		line-height: 3.811rem;
	}
`

const Description = styled.section`
	p {
		font-size: 1.333rem;
		line-height: 2.222rem;

		@media (max-width: 540px) {
			font-size: 1.111rem;
			line-height: 1.778rem;
		}
	}
`

const RowFlexExtension = styled(RowFlex)`
	padding-top: 6.67rem;
	width: 100%;
	justify-content: space-around;

	@media(max-width: 767px) {
		flex-flow: column wrap;
	}
`

const ColumnFlexExtension = styled(ColumnFlex)`
	padding: 0px 16px 0px 0px;
	font-weight: 300;
	max-width: 50%;

	p {
		filter: brightness(0.85);
	}

	strong {
		filter: brightness(1);
	}

	@media(max-width: 767px) {
		padding-bottom: 3.67rem;
		max-width: 100%;
	}
`

const MyImage = styled.img`
	height: 494px;
	max-width: 370px;
	object-fit: cover;
	border-radius: 1.3rem;

	@media(max-width: 767px) {
		width: 100%;
		height: auto;
		max-width: unset;
	}
`

function AboutMe ({ toggleAboutSection }) {
	const { state: theme } = useContext(ThemeContext);

	const AppWrapper = styled.div`
		max-width: 100%;
		background: ${theme.backgroundColor};
		color: ${theme.color};
		font-family: 'Poppins', sans-serif;
		
		div,
		p,
		section,
		span,
		label,
		strong,
		h1 {
			&::selection {
				background: ${theme.color};
				color: ${theme.backgroundColor};
			}
		}
	`;

	const PageHeading = styled.div`
		font-size: 36px;
		font-weight: bold;
		margin: 8px;

		&:after {
			content: '';
			display: block;
			width: 100%;
			height: 4px;
			background: ${theme.color};
			transition: width .3s;
		}
	`

	useEffect(() => {
		document.title =" About | 100Days100Films"
	}, []);

	return (
		<AppWrapper>
			<AboutSectionWrapper>

				<HeaderWrapper>
					<HeaderLinks className="header-links">
						<PageHeading>About</PageHeading>
					</HeaderLinks>
					<CloseButtonWrapper onClick={ toggleAboutSection }>
						<CloseButtonIcon fill={theme.color} />
					</CloseButtonWrapper>
				</HeaderWrapper>
				<Main>
					<Headline>
						Hey, I am Shashank. I am a &nbsp;
						<Typewriter
							options={{
								strings: ["Creator", "Programmer", "Poet", "Song Writer", "Script Writer", "Loving Human"],
								autoStart: true,
								loop: true,
							}}
						/>, and you are inside my creation.
						
					</Headline>
					<Description>
						<RowFlexExtension>
							<ColumnFlexExtension>
								<p>It was year <strong>2020</strong>, when the world was facing pandemic, caused by <strong>Coronavirus Disease (COVID-19)</strong>.
								To face this pandemic situation, <strong>lockdowns</strong> been organized all over the world to stop the <strong>spread</strong> of the virus.</p>
								<br/>
								<p>Being in the lockdown in <strong>India</strong>, Shashank got bored due to life's <strong>monotonicity</strong>. So one day, while he was browsing his movies <strong>watchlist</strong>, he thought of watching those movies in straight <strong>100 days</strong>.</p>
								<br/>
								<p>So folks, that is it, and called <strong>100 days 100 films</strong> (actually its more than 100). The movies in this website are from Shashank's watchlist and some movies got wild card.</p>
								<br/>
								<p>These are some of the best movies of the till now. If you like the movies listed here, do <strong>share</strong> it to others, so they know your taste :)</p>
							</ColumnFlexExtension>
							<MyImage src={"https://res.cloudinary.com/ashwamegh/image/upload/v1598292224/shashank-500x500_yydycu.png"} />
						</RowFlexExtension>
					</Description>
				</Main>
			</AboutSectionWrapper>
			<Footer />
		</AppWrapper>
	)
}

AboutMe.propTypes = {
	toggleAboutSection: PropTypes.func.isRequired
}

export default AboutMe;