import React, { useState, useContext, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { usePalette } from 'react-palette';
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
	FilmStreamingProviders,
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

import { ThemeContext, MovieContext } from './../store';

export const query = graphql`
	query queryMovie($movieId: Int) {
		allFilmsJson(filter: { movieId: {eq: $movieId } }) {
			edges {
				node {
					movieName
					movieYear
					moviePoster
					imdbRating
					movieDescription
					dayWatched
					dateWatched
					movieId
					movieGenre
					movieLanguage
					movieTrailer
					jwId
				}
			}
		}
	}
`

async function fetchMovieStreamingProvider(jwId) {
	try {
		const response = await fetch(`https://apis.justwatch.com/content/titles/movie/${jwId}/locale/en_IN?language=en`);
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		throw error;
	}
}


function FilmInfo({ data: { allFilmsJson: { edges: filmDetails }} }) {
	const film = filmDetails[0].node;
	const [shouldPlayTrailer, setPlaytrailerStatus] = useState(false);
	const [loading, setLoading] = useState(true);
	const [movieProviders, setMovieProviders] = useState({});
	const { data: palette } = usePalette(film.moviePoster);
	const { state } = useContext(ThemeContext);
	const { state: movieState } = useContext(MovieContext);

	useEffect(() => {
		(async function () {
			document.title = `${film.movieName} | 100Days100Films`;
			if(!film.jwId) {
				setLoading(false);
				return ;
			}
	
			const { offers = null } = await fetchMovieStreamingProvider(film.jwId);
			if(offers) {
				const allStreams = {};
				offers.forEach((offer) => {
					if(!Object.prototype.hasOwnProperty.call(allStreams, offer.provider_id)) {
						allStreams[offer.provider_id] = {
							url: offer.urls.standard_web || "",
							logo: movieState.streamingProviders[offer.provider_id].logo,
							name: movieState.streamingProviders[offer.provider_id].name
						}
					}
				});
				setMovieProviders(allStreams);
			}
			setLoading(false);
		})();
	}, []);

	return (
		<>
			<FilmDetailsContainer>
				{shouldPlayTrailer &&
					(<PlayTrailer
						url={film.movieTrailer}
						onBackButtonClick={() => setPlaytrailerStatus(false)}
						title={`${film.movieName} (${film.movieYear}) Trailer`}
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
												value={film.imdbRating * 10}
												text={film.imdbRating}
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
												{film.movieGenre.split(',').map(movie => movie.trim()).map((genre, key) => <li key={key}>{ genre }</li>)}
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
								{/* If Movie Providers are available */}
								{ Object.keys(movieProviders).length > 0 && !loading &&
									(
										<FilmStreamingProviders>
										{
											Object.keys(movieProviders).map(providerId => {
											const provider = movieProviders[providerId];

												return (
													<a href={provider.url} target="_blank" key={providerId}>
														<li style={{
															backgroundColor: palette.lightVibrant
														}}>
															<span>
																<img src={provider.logo} alt={provider.name}/>
															</span>
														</li>
													</a>
												)
											})
										}
										</FilmStreamingProviders>
									)
								}
								{/* If Movie Providers are not available */}
								{ Object.keys(movieProviders).length === 0 && !loading &&
									(
										<FilmStreamingProviders>
											<span style={{ color: "#fff", fontWeight: 600 }}>Streaming providers not available</span>
										</FilmStreamingProviders>
									)
								}
								{/* If Movie Providers are loading */}
								{ loading &&
									(
										<FilmStreamingProviders>
										{
											[1,2,3,4].map((num) => (
												<a href={"#"} key={num}>
													<li className="shine">
														<span>
														</span>
													</li>
												</a>
											))
										}
										</FilmStreamingProviders>
									) 
								}
								<p>
									{ film.movieDescription }
								</p>
								<FilmCaptions>
									<span>{ film.movieLanguage }</span>
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
		</>
	)
}

export default FilmInfo;