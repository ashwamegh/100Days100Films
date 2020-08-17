import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { usePalette } from 'react-palette'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { 
	FullPageBackdrop,
	FullPageBackdropImageContainer,
	FullPageBackdropImage,
	FilmDetailsContainer,
	CloseButton,
	CenteredRowFlex,
	FilmDetails,
	FilmPosterWrapper,
	FilmPosterBackground,
	FilmOverviewWrapper,
	FilmTitleAndBadge,
	FilmBadges,
	FilmBadgesCaption,
	RatingBadge,
	FilmCaptions,
	FilmCTAButtonsWrapper,
	CTAButton
} from './../components/styled'
import closeButtonIcon from './../assets/close-button.svg';
import PlayButton from './../assets/PlayButton';
import PlayTrailer from './../components/PlayTrailer';

import { ThemeContext } from './../store';

export const query = graphql`
	query queryMovie($movieId: Int) {
		allFilmsJson(filter: { movieId: {eq: $movieId } }) {
			edges {
				node {
					movieName
					movieYear
					moviePoster
					movieRating
					movieDescription
					dayWatched
					dateWatched
					movieId
				}
			}
		}
	}
`

function FilmInfo({ data: { allFilmsJson: { edges: filmDetails }} }) {
	const film = filmDetails[0].node;
	const [shouldPlayTrailer, setPlaytrailerStatus] = useState(false);
	const { data: palette, loading } = usePalette(film.moviePoster);
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
					<FullPageBackdropImage style={{ opacity: '0.5' }} src={ film.moviePoster }/>
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
								src={ film.moviePoster }
								alt="backdrop"
							/>
						</FilmPosterBackground>
					</FilmPosterWrapper>
					<FilmOverviewWrapper>
						<FilmTitleAndBadge>
							<h1>{`${film.movieName} (${film.movieYear})`}</h1>
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
								{ film.movieDescription }
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

export default FilmInfo;