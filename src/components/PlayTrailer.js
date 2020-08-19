import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import backButtonIcon from './../assets/back-button.svg';
import YoutubeButtonIcon from './../assets/youtube-button.svg';

const VideoPopup = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	transition: opacity .4s ease;
	background: #0d0d0d;
`

const VideoHeader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	background: #000;
	border: 0;
	display: flex;
	align-items: center;
	z-index: 99;
	animation: opacityAnim .5s linear .8s 1 forwards;
	backdrop-filter: blur(18px);
	padding: 5px 15px 0 0;
	transition: transform .4s ease-in-out;
	transform: translateY(0);
	justify-content: space-between;
`;

const BackButtonWrapper = styled.div`
	opacity: 0;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	color: #b7b7b7;
	font-size: 30px;
	cursor: pointer;
	text-align: right;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	animation-name: fadeInSlow;
	animation-delay: 5s;
	animation-duration: .5s;
	animation-timing-function: ease-in-out;
	animation-direction: forwards;
	animation-fill-mode: both;
	height: 80px;
	width: 80px;

	@keyframes fadeInSlow {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
`

const BackButton = styled.img`
	height: 32px;
	width: 32px;
`

const YoutubeButton = styled.a`
	position: absolute;
	right: 20px;
	opacity: .4;
	transition: color .3s ease-in-out;
	background-color: transparent;

	img {
		height: 28px;
		width: 28px;
	}
`

const YoutubeTitle = styled.h4`
	position: fixed;
	top: 2px;
	left: 80px;
	right: 60px;
	color: #b7b7b7;
	font-size: 19px;
	opacity: 1;
	z-index: 99999999;
	letter-spacing: 1px;
	font-weight: 500;
	text-align: center;
	animation: fadeInSlow .4s ease-in-out 2s both;

	@media (max-width: 767px) {
		font-size: 15px;
		padding: 0;
		margin: 0;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`

function PlayTrailer ({ url, onBackButtonClick, title }) {
	return (
		<VideoPopup>
			<VideoHeader>
				<BackButtonWrapper>
					<BackButton 
						src={backButtonIcon} 
						alt="Go back"
						onClick={onBackButtonClick}
					/>
				</BackButtonWrapper>
				<YoutubeButton
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={YoutubeButtonIcon} alt="Youtube Play"/>
				</YoutubeButton>
				<YoutubeTitle>{ title }</YoutubeTitle>
			</VideoHeader>
			<div
				style={{
					height: '100%',
					width: '100%',
				}}
			>
				<ReactPlayer
					url={url}
					className="react-player"
					playing={true}
					controls={true}
					playsinline={true}
					height="100%"
					width="100%"
				/>
			</div>
		</VideoPopup>
	)
}

PlayTrailer.propTypes = {
	url: PropTypes.string.isRequired,
	onBackButtonClick: PropTypes.func,
	title: PropTypes.string.isRequired
}

export default PlayTrailer;