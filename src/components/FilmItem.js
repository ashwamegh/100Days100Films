import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import StarRatings from 'react-star-ratings';
import { ThemeContext, MovieContext } from '../store';
import { FilmDescription, FilmDetailsWrapper, FilmImage, FilmItemContainer, FilItemImageWrapper, DayBadge, DateBadge } from './styled';
import { SET_MOVIE_PROVIDERS } from '../store/types';

async function fetchMovieStreamingProvider(jwId) {
	try {
		const response = await fetch(`https://apis.justwatch.com/content/titles/movie/${jwId}/locale/en_IN?language=en`);
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		throw error;
	}
}

export default function FilmItem({ movieId, moviePoster, movieName, movieRating, movieYear, dayWatched, dateWatched, movieDescription, jwId }) {
	const { state } = useContext(ThemeContext);
	const { state: movieState, dispatch } = useContext(MovieContext);

	async function loadMovieProviders () {
		console.log(jwId);
		if(!jwId) {
			dispatch({ type: SET_MOVIE_PROVIDERS, payload: {} });
			return ;
		}

		const { offers = null } = await fetchMovieStreamingProvider(jwId);
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
			dispatch({ type: SET_MOVIE_PROVIDERS, payload: allStreams });
		}
	}

	return (
		<Link
			to={`/movie/${movieId}`}
			onClick={loadMovieProviders}
		>
			<FilmItemContainer>
					<DayBadge>
						<span>Day: { dayWatched }</span>
					</DayBadge>
					<DateBadge>
						<span>{ dateWatched }</span>
					</DateBadge>
				
				<FilItemImageWrapper
					style={{
						backgroundColor: state.backgroundColor
					}}
				>
					<FilmDescription
						className="film-description"
						style={{
							color: state.color,
							backgroundColor: state.backgroundColor,
							boxShadow: `0px 0px 6px 0px ${state.color}`
						}}
					>
						{ movieDescription }
					</FilmDescription>
					<FilmImage src={moviePoster} alt={movieName} />
				</FilItemImageWrapper>

				<FilmDetailsWrapper>
					<p>{ movieName }</p>
					<p>{ movieYear }</p>
					<StarRatings
						rating={ movieRating }
						starRatedColor="#FCD215"
						numberOfStars={5}
						starDimension="22px"
						starSpacing="8px"
						name='rating'
					/>
				</FilmDetailsWrapper>
			</FilmItemContainer>
		</Link>
	)
};

FilmItem.propTypes = {
	moviePoster: PropTypes.string.isRequired,
	movieName: PropTypes.string.isRequired,
	movieYear: PropTypes.number.isRequired,
	movieRating: PropTypes.number.isRequired,
	dayWatched: PropTypes.string.isRequired,
	dateWatched: PropTypes.string,
	movieDescription: PropTypes.string.isRequired,
	movieId: PropTypes.number.isRequired,
	jwId: PropTypes.string
}
