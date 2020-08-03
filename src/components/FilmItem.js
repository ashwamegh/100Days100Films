import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { ThemeContext } from '../store';
import './FilmItem.css';

export default function FilmItem({ imageUrl, filmName, filmRating, filmYear, filmDay, filmWatchDate, filmDescription }) {
	const [showDescription, setShowDescription ] = useState(false);
	const { state } = useContext(ThemeContext);
	return (
		<div
			style={{
				display: 'flex',
				position: 'relative',
				flexDirection: 'column',
				alignContent: 'center',
				width: 240,
				// marginRight: 40,
				boxShadow: '8px 8px 20px 8px rgba(0, 0, 0, 0.25)',
				borderRadius: '18px',
				fontFamily: "'Poppins', sans-serif",
				margin: "0.6%",
				marginBottom: 50,
			}}
		>
			{ !showDescription &&
				<div
					style={{
						position: 'absolute',
						// background: state.backgroundColor,
						// color: state.color,
						backgroundColor: '#FED700',
						color: '#222',
						borderTopLeftRadius: 18,
						fontSize: 14,
						height: 'auto',
						lineHeight: 'normal',
						padding: '4px 6px',
						zIndex: 10,
						top: 0,
						left: 0,
					}}
				>
					<span>Day: { filmDay }</span>
				</div>
			}
			{ !showDescription &&
				<div
					style={{
						position: 'absolute',
						// background: state.backgroundColor,
						// color: state.color,
						backgroundColor: '#e5a937',
						color:'#fff',
						borderTopRightRadius: 18,
						fontSize: 14,
						height: 'auto',
						lineHeight: 'normal',
						padding: '4px 6px',
						zIndex: 10,
						top: 0,
						right: 0,
					}}
				>
					<span>{ filmWatchDate }</span>
				</div>
			}
			<div 
				className="film-item-image"
				style={{
					height: 334,
					backgroundColor: showDescription ? state.backgroundColor : 'inherit',
					borderRadius: '18px 18px 0px 0px'
				}}
				onMouseEnter={() => setShowDescription(true)}
				onMouseLeave={() => setShowDescription(false)}
			>
				{
					showDescription ?
					(
						<div
							style={{
								fontFamily: "'Poppins',inherit, sans-serif",
								fontStyle: 'normal',
								fontWeight: '600',
								fontSize: 14,
								padding: '76px 13px 42px 20px',
								color: showDescription ? state.color : 'inherit',
								display: 'flex',
								alignItems: 'baseline',
								fontFeatureSettings: "'pnum' on, 'lnum' on",
								border: '3px solid',
								borderColor: state.color,
								height: '100%',
								boxSizing: 'border-box',
								borderRadius: '18px 18px 0px 0px'
							}}
						>
							{ filmDescription }
						</div>
					) :
					(
						<img 
							src={imageUrl} alt={filmName}
							style={{
								width: '100%',
								height: '100%',
								filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))',
								borderRadius: '18px 18px 0px 0px',
								objectFit: 'cover',
								cursor: 'pointer'
							}}
						/>
					)
				}
			</div>
			<div
				style={{
					width: 'auto',
					height: 84,
					color: '#000',
					background: '#FFFFFF',
					borderRadius: '0px 0px 18px 18px',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					padding: '14px 8px',
					textAlign: 'center'
				}}
			>
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
			</div>
		</div>
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
