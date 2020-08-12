import styled from 'styled-components';


/* Common */
export const RowFlex = styled.div`
	display: flex;
	flex-flow: row;
`

export const ColumnFlex = styled.div`
	display: flex;
	flex-flow: column;
`

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
	transition: box-shadow .4s ease-in-out,transform .3s ease-in-out;

	&:hover {
		box-shadow: 8px 8px 20px 8px rgba(0, 0, 0, 0.25);
		transform: translateY(-4px);
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
	font-family: 'Poppins', sans-serif;
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

export const PopoverArrowUp = styled.div`
	margin: 0 auto;
	border-top: 0 solid #cfd8db;
	border-left: 0 solid #F5D97B;
	border-bottom: 0 solid #cfd8db;
	border-right: 0 solid #8DB434;
	transition: 0.8s 0.2s;
	border-top-color: transparent;
	border-right-color: transparent;
	border-left-color: transparent;
	width: 0;
	height: 0;
	background: transparent;
	border-bottom-width: 10px;
	border-right-width: 10px;
	border-left-width: 10px;
	border-top-width: 10px;
	position: absolute;
	top: -20px;
`

export const RadioInputWrapper = styled.div`
	cursor: pointer;
	padding: 0 8px;
	font-size: 14px;
	display: flex;
    align-items: center;
    align-content: center;
	justify-content: center;
	font-family: 'Poppins', sans-serif;
`

export const RadioInput = styled.input.attrs(props => ({ type: "radio" }))`
	height: 14px;
	width: 14px;
	margin: 0;
	margin-right: 10px;
	margin-bottom: 2px;
	cursor: pointer;
	position: relative;
	transition: background-color 0.3s ease-in,
				border-color 0.3s ease-in;
	&:after {
		width: 14px;
		height: 14px;
		border-radius: 15px;
		top: -2px;
		left: -1px;
		position: relative;
		background-color: #d1d3d1;
		content: '';
		display: inline-block;
		visibility: visible;
		border: 3px solid white;
		margin-right: 8px;
		transition: background-color 0.3s ease-in,
					border-color 0.3s ease-in;
	}

	&:before {
		width: 10px;
		height: 10px;
		border-radius: 15px;
		top: 3px;
		left: 4px;
		background-color: #d1d3d1;
		content: '';
		display: inline-block;
		visibility: visible;
		margin-right: 8px;
		position: absolute;
		z-index: 10;
		transition: background-color 0.3s ease-in,
					border-color 0.3s ease-in;
	}

	&:checked:after {
		width: 14px;
		height: 14px;
		border-radius: 15px;
		top: -2px;
		left: -1px;
		position: relative;
		background-color: #ffa500;
		content: '';
		display: inline-block;
		visibility: visible;
		border: 3px solid white;
		margin-right: 8px;
	}
`

/* Film Info */
export const FullPageBackdrop = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 0;
`

export const FullPageBackdropImageContainer = styled.div`
	color: transparent;
	display: inline-block;
	width: 100%;
	height: calc(100% + 8px);
	position: absolute;
	left: 0;
	top: 0;
	transition: opacity .5s ease-in-out;
`

export const FullPageBackdropImage = styled.img`
	object-fit: cover;
	height: 100vh;
	width: 100vw;
	-webkit-filter: brightness(.2);
	filter: brightness(.2);
`