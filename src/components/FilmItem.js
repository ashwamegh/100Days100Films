import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import StarRatings from 'react-star-ratings';
import { ThemeContext } from '../store';
import { FilmDescription, FilmDetailsWrapper, FilmImage, FilmItemContainer, FilItemImageWrapper, DayBadge, DateBadge } from './styled';

export default function FilmItem({ movieId, moviePoster, movieName, movieRating, movieYear, dayWatched, dateWatched, movieDescription }) {
	const { state } = useContext(ThemeContext);

	return (
		<Link
			to={`/movie/${movieId}`}
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
	movieId: PropTypes.number.isRequired
}
