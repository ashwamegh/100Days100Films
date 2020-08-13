import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { usePalette } from 'react-palette'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { 
	FullPageBackdrop,
	FullPageBackdropImageContainer,
	FullPageBackdropDiv,
	FullPageBackdropImage,
	RowFlex,
	ColumnFlex
} from './../components/styled'
import closeButtonIcon from './../assets/close-button.svg';
import PlayButton from './../assets/PlayButton';
import PlayTrailer from './../components/PlayTrailer';

import { ThemeContext } from './../store';

const FilmDetailsContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100%;
	background-size: cover;
	background-color: #1d1d1d;
	background-blend-mode: overlay;
	display: grid;
	grid-template-columns: 90% 10%;
	position: relative;
	z-index: 1;
	font-family: 'Poppins', sans-serif;
	overflow-x: hidden;

	@media (min-width: 638px) {
		overflow-y: hidden;
	}
`

const CloseButton = styled.img`
	position: absolute;
	top: 5vw;
	right: 5vw;
	height: 36px;
	width: 36px;
	z-index: 11;
	cursor: pointer;
`

const CenteredRowFlex = styled(RowFlex)`
	justify-content: space-between;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	position: absolute;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 80% 20%;
	padding: 0 5vw;

	@media (max-width: 992px) {
		grid-template-columns: 90% 10%;
	}

	@media (max-width: 767px) {
		grid-template-columns: 100%;
	}

	@media (max-width: 640px) {
		padding-top: 80px;
	}
`

const FilmDetails = styled(RowFlex)`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	height: 100%;
	flex: 1 1;
	max-width: 1240px;
	margin: auto;
	justify-content: center;
	// padding-top: 50px;

	@media (max-width: 638px) {
		flex-flow: column wrap;
	}
`

const FilmPosterWrapper = styled(ColumnFlex)`
	height: 100%;
	align-items: center;
	position: relative;
	z-index: 1;
	justify-content: flex-end;
	flex-basis: 300px;

	@media (max-width: 638px) {
		flex: 1;
	}
`

const FilmPosterBackground = styled.span`
	max-width: 100%;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1;
	width: 100%;
	height: calc(100% + 8px);
	position: absolute;
	left: 0;
	top: 0;
	transition: opacity .5s ease-in-out;

	img {
		max-width: 100%;
		border-radius: 5px;

		@media (max-width: 638px) {
			width: 300px;
		}
	}

	@media (max-width: 638px) {
		position: static;
	}
`

const FilmOverviewWrapper = styled(ColumnFlex)`
	position: relative;
	z-index: 9;
	padding: 0 30px;
	flex: 1 1;
	opacity: 1;
	animation: fadeContent .4s cubic-bezier(.6,.04,.98,.335);
	animation-fill-mode: forwards;
	animation-delay: .6s;

	p {
		color: #d5d5d5 !important;
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 25px;
	}

	@media (max-width: 638px) {
		flex: 1;
	}

	@media (max-width: 638px) {
		padding-left: 15px;
	}
`

const FilmTitleAndBadge = styled.div`
	margin-left: 0;
	width: 100%;
	position: relative;

	h1 {
		color: #fff !important;
		font-size: 2em;
		margin: .67em 0;
	}
`

const FilmBadges = styled.ul`
	background: rgba(74,71,71,.45);
	padding: 6px 10px;
	border-radius: 7px;
	box-shadow: 0px 0px 2px 0px #333;
	display: flex;
	list-style-type: none;
	align-content: center;
	justify-content: space-between;
	backdrop-filter: blur(4px);
	color: #dfdfdf !important;

	li {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
const FilmBadgesCaption = styled.span`
	padding-right: 11px;
	font-size: 14px;
	text-transform: uppercase;
`

const RatingBadge = styled.div`
	height: 36px;
	width: 36px;

	text {
		font-weight: 400;
	}
`
const FilmCaptions = styled(RowFlex)`
	margin: 16px 0;
	li {
		display: inline-block;
		margin: 0 5px;
		padding: 4px 7px;
		border-radius: 2px;
		border: 1px solid #aeaeae;
		font-size: 12px;
		text-transform: uppercase;
		color: #dfdfdf !important;
	}
`

const FilmCTAButtonsWrapper = styled(RowFlex)`
	align-content: center;
`

const CTAButton = styled.button`
	text-align: center;
	line-height: 1.15;
	margin: 0;
	padding: 14px;
	font-size: 13px;
	text-transform: uppercase;
	font-weight: 500;
	border-radius: 5px;
	border: 0;
	cursor: pointer;
	outline: none;
	position: relative;
	padding-right: 35px;
	border-radius: 50px;
	font-weight: 400;
	letter-spacing: 2px;
	background-color: rgba(248,22,41,.73);
	filter: brightness(.8);
	color: #fff !important;
	transition: background .3s ease-in-out,
				filter .3s ease-in-out;
	display: flex;
	align-items: center;

	svg {
		height: 18px;
		width: 18px;
		margin-right: 14px;
	}

	&:hover {
		background-color: #f81629;
		filter: brightness(1);
	}
`

function FilmInfo({ filmNo }) {
	const [shouldPlayTrailer, setPlaytrailerStatus] = useState(false);
	const { data: palette, loading } = usePalette("https://image.tmdb.org/t/p/original/wO5QSWZPBT71gMLvrRex0bVc0V9.jpg");
	const { state } = useContext(ThemeContext);
	const rating = 6.6;

	return (
		<FilmDetailsContainer>
			{shouldPlayTrailer &&
				(<PlayTrailer
					url={"https://www.youtube.com/watch?v=xCke0hXoCf8"}
					onBackButtonClick={() => setPlaytrailerStatus(false)}
				/>)
			}
			<Link to="/">
				<CloseButton
					src={closeButtonIcon}
					alt="Close"
				/>
			</Link>
			<FullPageBackdrop>
				<FullPageBackdropImageContainer
					style={{
						backgroundColor: palette.vibrant || 'black',
						backgroundImage: `linear-gradient(${palette.vibrant || 'rgb(10, 5, 7)'}, rgb(10, 5, 7) 85%)`
					}}
				>
					<FullPageBackdropImage style={{ opacity: '0.5' }} src={"https://res.cloudinary.com/ashwamegh/image/upload/v1596470973/100Days100Films/One_Flew_Over_the_Cuckoo_s_Nest_1976_1280_x_1829_joyvfs.jpg"}/>
					{/* {
						palette && !loading &&
						(
							<FullPageBackdropDiv
								style={{
									backgroundColor: palette.darkVibrant || 'black',
									backgroundImage: `linear-gradient(${palette.darkVibrant || 'rgb(10, 5, 7)'}, rgb(10, 5, 7) 85%)`
								}}
							/>
						)
					} */}
				</FullPageBackdropImageContainer>
			</FullPageBackdrop>
			<CenteredRowFlex>
				<FilmDetails>
					<FilmPosterWrapper>
						<FilmPosterBackground>
							<img 
								src="https://res.cloudinary.com/ashwamegh/image/upload/v1596470973/100Days100Films/One_Flew_Over_the_Cuckoo_s_Nest_1976_1280_x_1829_joyvfs.jpg"
								alt="backdrop"
							/>
						</FilmPosterBackground>
					</FilmPosterWrapper>
					<FilmOverviewWrapper>
						<FilmTitleAndBadge>
							<h1>The Kissing Booth 2 (2020)</h1>
							<h4></h4>
							<FilmBadges>
								<li>
									<FilmBadgesCaption>IMDB:</FilmBadgesCaption>
									<RatingBadge>
										<CircularProgressbar
											value={rating * 10}
											text={rating}
											strokeWidth={15}
											styles={buildStyles({
												textSize: '32px',
												textColor: palette.lightMuted,
												pathColor: palette.vibrant
											})}
										/>
									</RatingBadge>
								</li>
								<li>
									<FilmCaptions>
										<ul>
											{["Drama", "Comedy"].map((genre, key) => <li key={key}>{ genre }</li>)}
										</ul>
									</FilmCaptions>
								</li>
								<li>
									<a
										href="https://tv.apple.com/show/little-america/umc.cmc.2ice8mlcn1zrtxf81e5ktwg8p"
										target="_blank"
										className="button button--link"
										rel="noopener noreferrer"
									><i className="fal fa-home"></i></a>
								</li>
							</FilmBadges>

							<p>
								An anthology series that goes beyond the headlines to look at the funny, romantic, heartfelt, inspiring and surprising stories of immigrants in America at a time when they are more relevant than ever.
							</p>
							<FilmCaptions>
								<span>EN</span>
							</FilmCaptions>
							<FilmCTAButtonsWrapper>
								<CTAButton
									onClick={() => setPlaytrailerStatus(true)}
									style={{
										backgroundColor: state.color
									}}
								>
									<PlayButton fill={state.backgroundColor} />
									<span style={{ color: state.backgroundColor }}>
										Trailer
									</span>
								</CTAButton>
							</FilmCTAButtonsWrapper>
						</FilmTitleAndBadge>
					</FilmOverviewWrapper>
				</FilmDetails>
			</CenteredRowFlex>
		</FilmDetailsContainer>
	)
}

FilmInfo.propTypes = {
	filmNo: PropTypes.number
}

FilmInfo.defaultProps = {
	filmNo: 1
}

export default FilmInfo;