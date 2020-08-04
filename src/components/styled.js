import styled from 'styled-components';

export const Rotate90Deg = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform:  translateX(-50%) translateY(-50%) rotate(-90deg);
`

export const SloganTextWrapper = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 64px;
	align-content: baseline;
	min-height: 200px;
	align-items: center;
	padding: 14px;
`

export const HorizontalText = styled.div`
	font-size: 114px;
	font-weight: bold;
	margin: 8px;
`

export const VerticalText = styled.div`
	font-size: 36px;
	width: 36px;
	font-weight: bold;
	position: relative;
`

// Film Item Components

export const FilmItemContainer = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	display: flex;
	position: relative;
	flex-direction: column;
	alignContent: center;
	width: 240px;
	box-shadow: 0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08);
	border-radius: 18px;
	font-family: 'Poppins'; sans-serif;
	margin: 0.6%;
	margin-bottom: 50px;
	cursor: pointer;

	&:hover {
		box-shadow: 8px 8px 20px 8px rgba(0, 0, 0, 0.25);
	}
`

export const DayBadge = styled.div`
	position: absolute;
	background-color: #FED700;
	color: #222;
	border-top-left-radius: 18px;
	font-size: 14;
	height: auto;
	line-height: normal;
	padding: 4px 6px;
	z-index: 10;
	top: 0;
	left: 0;
`

export const DateBadge = styled.div`
	position: absolute;
	background-color: #e5a937;
	color: #fff;
	border-top-right-radius: 18px;
	font-size: 14px;
	height: auto;
	line-height: normal;
	padding: 4px 6px;
	z-index: 10;
	top: 0;
	right: 0;
`

export const FilmImage = styled.img`
	width: 100%;
	height: 100%;
	filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
	border-radius: 18px 18px 0px 0px;
	object-fit: cover;
	cursor: pointer;
`

export const FilmDetailsWrapper = styled.div`
	width: auto;
	height: 84px;
	color: #000;
	background: #FFFFFF;
	border-radius: 0px 0px 18px 18px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 14px 8px;
	text-align: center;
`

export const FilmDescription = styled.div`
	font-family: 'Poppins',inherit, sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	padding: 76px 13px 42px 20px;
	display: flex;
	align-items: baseline;
	font-feature-settings: 'pnum' on, 'lnum' on;
	border: 3px solid;
	height: 100%;
	box-sizing: border-box;
	border-radius: 18px 18px 0px 0px;
	cursor: pointer;
	position: absolute;
	height: 334px;
	z-index: 12;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 334px;
	transform-origin: 0 bottom 0;
	transform: scaleY(0);
	transition: 0.3s ease-out;
	box-sizing: border-box;
	z-index: 11;
`

export const FilItemImageWrapper = styled.div`
	height: 334px;
	border-radius: 18px 18px 0px 0px;

	&:hover {
		.film-description {
			transform: scaleY(1);
		}
	}
`

/* Page Loader Items*/
export const FullBlackPage = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
	height: 100vh;
	width: 100%;
`

export const BoxWithText = styled.div`
	text-transform: uppercase;
	font: bold 26vmax/.8 Open Sans, Impact;
	background: black;
	display: table;
	color: white;
	mix-blend-mode: multiply;
`

export const BoxWithTextWrapper = styled.div`
	margin: auto;
	background: linear-gradient(#09F6A4,turquoise,#FFD700) no-repeat 0 0,
				linear-gradient(lime, crimson,turquoise) no-repeat 0 0,
				linear-gradient(to left,#FFD700,crimson,lime);
	background-size: 0 100%;
	animation: stripes 2s linear infinite;
	
	@keyframes stripes {
		to {
			background-size:100% 100%;
		}
	}
`