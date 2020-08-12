import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { 
	FullPageBackdrop,
	FullPageBackdropImageContainer,
	FullPageBackdropImage,
	RowFlex,
	ColumnFlex
} from './../components/styled'
import closeButtonIcon from './../assets/close-button.svg';
import playButtonIcon from './../assets/play-button.svg';

import PlayTrailer from './../components/PlayTrailer';

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
	overflow-y: hidden;
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
`

const FilmPosterWrapper = styled(ColumnFlex)`
	height: 100%;
	align-items: center;
	position: relative;
	z-index: 1;
	justify-content: flex-end;
	flex-basis: 300px;
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
		color: #d5d5d5;
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 25px;
	}
`

const FilmTitleAndBadge = styled.div`
	margin-left: 0;
	width: 100%;
	position: relative;

	h1 {
		font-size: 2em;
		margin: .67em 0;
	}
`

const FilmBadges = styled.ul`
	background: rgba(74,71,71,.45);
	padding: 6px 10px;
	border-radius: 7px;
	border: 1px solid #333;
	display: flex;
	list-style-type: none;
	align-content: center;
	justify-content: space-between;
	backdrop-filter: blur(4px);

	li {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
const FilmCaptions = styled(RowFlex)`
	margin: 16px 0;
	span {
		display: inline-block;
		margin: 0 5px;
		padding: 4px 7px;
		border-radius: 2px;
		border: 1px solid #aeaeae;
		font-size: 10px;
		text-transform: uppercase;
		color: #dfdfdf;
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
	color: #fff;
	transition: background .3s ease-in-out;
	display: flex;
	align-items: center;

	img {
		height: 18px;
		width: 18px;
		margin-right: 14px;
	}

	&:hover {
		background-color: #f81629;
	}
`

function FilmInfo({ filmNo }) {
	return(
		<FilmDetailsContainer>
			<PlayTrailer/>
			<Link to="/">
				<CloseButton
					src={closeButtonIcon}
					alt="Close"
				/>
			</Link>
			<FullPageBackdrop>
				<FullPageBackdropImageContainer>
					<FullPageBackdropImage src="https://image.tmdb.org/t/p/original/wO5QSWZPBT71gMLvrRex0bVc0V9.jpg"></FullPageBackdropImage>
				</FullPageBackdropImageContainer>
			</FullPageBackdrop>
			<CenteredRowFlex>
				<FilmDetails>
					<FilmPosterWrapper>
						<FilmPosterBackground>
							<img 
								src="https://image.tmdb.org/t/p/original/mb7wQv0adK3kjOUr9n93mANHhPJ.jpg"
								alt="backdrop"
							/>
						</FilmPosterBackground>
					</FilmPosterWrapper>
					<FilmOverviewWrapper>
						<FilmTitleAndBadge>
							<h1>The Kissing Booth 2 (2020)</h1>
							<h4></h4>
							{/* <FilmBadges>
								<li>
									<span className="caption">TMDB:</span>
								</li>
								<li>
									<div className="captions">
										<ul>
											<li className="cap cap--drama">Drama</li>
											<li className="cap cap--comedy">Comedy</li>
										</ul>
									</div>
								</li>
								<li>
									<a
										href="https://tv.apple.com/show/little-america/umc.cmc.2ice8mlcn1zrtxf81e5ktwg8p"
										target="_blank"
										className="button button--link"
										rel="noopener noreferrer"
									><i className="fal fa-home"></i></a>
								</li>
							</FilmBadges> */}

							<p>
								An anthology series that goes beyond the headlines to look at the funny, romantic, heartfelt, inspiring and surprising stories of immigrants in America at a time when they are more relevant than ever.
							</p>
							<FilmCaptions>
								<span>EN</span>
							</FilmCaptions>
							<FilmCTAButtonsWrapper>
								<CTAButton>
									<img src={playButtonIcon} alt="Play Button"/>
									Trailer
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