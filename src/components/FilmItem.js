import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import StarRatings from 'react-star-ratings';
import { ThemeContext } from '../store';
import { FilmDescription, FilmDetailsWrapper, FilmImage, FilmItemContainer, FilItemImageWrapper, DayBadge, DateBadge } from './styled';

export default function FilmItem({ imageUrl, filmName, filmRating, filmYear, filmDay, filmWatchDate, filmDescription }) {
	const { state } = useContext(ThemeContext);

	return (
		<Link
			to={"/page-2"}
		>
			<FilmItemContainer>
					<DayBadge>
						<span>Day: { filmDay }</span>
					</DayBadge>
					<DateBadge>
						<span>{ filmWatchDate }</span>
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
						{ filmDescription }
					</FilmDescription>
					<FilmImage src={imageUrl} alt={filmName} />
				</FilItemImageWrapper>

				<FilmDetailsWrapper>
					<p>{ filmName }</p>
					<p>{ filmYear }</p>
					<StarRatings
						rating={ filmRating }
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
	imageUrl: PropTypes.string.isRequired,
	filmName: PropTypes.string.isRequired,
	filmYear: PropTypes.number.isRequired,
	filmRating: PropTypes.number.isRequired,
	filmDay: PropTypes.string.isRequired,
	filmWatchDate: PropTypes.string,
	filmDescription: PropTypes.string.isRequired
}
