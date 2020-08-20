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

	@media (max-width: 992px) {
		min-height: 180px;
	}

	@media (max-width: 767px) {
		min-height: 150px;
	}
`

export const HorizontalText = styled.div`
	font-size: 114px;
	font-weight: bold;
	margin: 8px;

	@media (max-width: 992px) {
		font-size: 100px;
	}

	@media (max-width: 792px) {
		font-size: 80px;
		margin: 4px;
	}

	@media (max-width: 767px) {
		font-size: 70px;
		margin: 0px;
	}

	@media (max-width: 667px) {
		font-size: 60px;
	}

	@media (max-width: 621px) {
		font-size: 48px;
	}

	@media (max-width: 350px) {
		font-size: 42px;
		margin-left: -21px;
	}
`

export const VerticalText = styled.div`
	font-size: 36px;
	width: 36px;
	font-weight: bold;
	position: relative;

	@media (max-width: 992px) {
		font-size: 33px;
	}

	@media (max-width: 792px) {
		font-size: 27px;
	}

	@media (max-width: 767px) {
		font-size: 23px;
		margin: 4px;
	}
	
	@media (max-width: 667px) {
		font-size: 20px;
	}

	@media (max-width: 621px) {
		font-size: 16px;
	}

	@media (max-width: 350px) {
		font-size: 12px;

		span {
			margin-left: -11px;
		}
	}
`

/* Header */

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;
	padding: 40px 0px;

	@media (max-width: 767px) {
		padding: 20px 0px;
	}
`

export const HeaderLinks = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 36px;
	font-weight: bold;
	align-items: flex-end;

	.accent-switcher {
		margin-left: 22px;
		cursor: pointer;

		@media (max-width: 667px) {
			margin-left: 18px;
		}

		@media (max-width: 621px) {
			margin-left: 14px;
		}
	}

	@media (max-width: 667px) {
		font-size: 30px;
	}

	@media (max-width: 621px) {
		font-size: 24px;
		align-self: baseline;
	}

	@media (max-width: 448px) {

		.about {
			display: none;
		}
	}
`

export const AccentSwitcherImage = styled.img`
	@media (max-width: 667px) {
		height: 32px;
		width: 32px;
	}
`

/* Toolbar */

export const ToolbarWrapper = styled.div`
	padding: 120px 0px 120px 0px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
	align-items: center;

	@media (max-width: 767px) {
		padding: 80px 0px 80px 0px;
	}

	@media (max-width: 512px) {
		padding: 40px 0px 80px 0px;
	}
`

// Film Item Components

export const FilmsWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;

	@media (max-width: 512px) {
		flex-flow: row nowrap;
		overflow-x: scroll;
		padding: 20px;
	}
`

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
	margin-right: 8px;
	cursor: pointer;
	transition: box-shadow .4s ease-in-out,transform .3s ease-in-out;

	&:hover {
		box-shadow: 8px 8px 20px 8px rgba(0, 0, 0, 0.25);
		transform: translateY(-4px);
	}

	@media (max-width: 512px) {
		margin-right: 18px;
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
	height: 114px;
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
	filter: brightness(.2);
`

export const FullPageBackdropDiv = styled.div`
	object-fit: cover;
	height: 100vh;
	width: 100vw;

	@media (max-width: 414px) {
		min-height: 130%;
	}

	${'' /* @media (max-width: 412px) {
		min-height: 1%;
	} */}

	${'' /* @media (max-width: 375px) {
		min-height: 150%;
	} */}

	@media (max-width: 360px) {
		min-height: 170%;
	}
`


export const FilmDetailsContainer = styled.div`
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
	overflow-x: hidden;

	@media (min-width: 638px) {
		overflow-y: hidden;
	}
`

export const CloseButton = styled.img`
	position: absolute;
	top: 5vw;
	right: 5vw;
	height: 36px;
	width: 36px;
	z-index: 11;
	cursor: pointer;
`

export const CenteredRowFlex = styled(RowFlex)`
	justify-content: space-between;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	position: absolute;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 80% 20%;
	padding: 0 5vw;

	@media (max-width: 992px) {
		grid-template-columns: 90% 10%;
	}

	@media (max-width: 767px) {
		grid-template-columns: 100%;
	}

	@media (max-width: 640px) {
		padding-top: 80px;
	}
`

export const FilmDetails = styled(RowFlex)`
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

	@media (max-width: 638px) {
		flex-flow: column wrap;
	}
`

export const FilmPosterWrapper = styled(ColumnFlex)`
	height: 100%;
	align-items: center;
	position: relative;
	z-index: 1;
	justify-content: flex-end;
	flex-basis: 300px;

	@media (max-width: 638px) {
		flex: 1;
	}
`

export const FilmPosterBackground = styled.span`
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

		@media (max-width: 638px) {
			width: 300px;
		}
	}

	@media (max-width: 638px) {
		position: static;
	}
`

export const FilmOverviewWrapper = styled(ColumnFlex)`
	position: relative;
	z-index: 9;
	padding: 0 30px;
	flex: 1 1;
	opacity: 1;
	animation: fadeContent .4s cubic-bezier(.6,.04,.98,.335);
	animation-fill-mode: forwards;
	animation-delay: .6s;

	p {
		color: #d5d5d5 !important;
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 25px;
	}

	@media (max-width: 638px) {
		flex: 1;
	}

	@media (max-width: 638px) {
		padding-left: 15px;
	}
`

export const FilmTitleAndBadge = styled.div`
	margin-left: 0;
	width: 100%;
	position: relative;

	h1 {
		color: #fff !important;
		font-size: 2em;
		margin: .67em 0;
	}
`

export const FilmStreamingProviders = styled.ul`
	align-items: center;
	border-radius: 7px;
	display: flex;
	list-style-type: none;
	align-content: center;
	padding: 10px 0!important;

	li {
		width: 120px;
		border: 0;
		background: rgb(210 210 210 / 80%);
		backdrop-filter: blur(4px);
		height: 52px;
		padding: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		margin-right: 10px;
		cursor: pointer;
		transition: display 0.5s ease-in,
					transform 0.3s ease-in;

		&:hover {
			transform: translateY(-4px);
		}
	}

	img {
		max-width: 100%;
		max-height: 28px;
	}
`

export const FilmBadges = styled.ul`
	background: rgba(74,71,71,.45);
	padding: 6px 10px;
	border-radius: 7px;
	box-shadow: 0px 0px 2px 0px #333;
	display: flex;
	list-style-type: none;
	align-content: center;
	justify-content: space-between;
	backdrop-filter: blur(4px);
	color: #dfdfdf !important;

	li {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
export const FilmBadgesCaption = styled.span`
	padding-right: 11px;
	font-size: 14px;
	text-transform: uppercase;
`

export const RatingBadge = styled.div`
	height: 36px;
	width: 36px;

	text {
		font-weight: 400;
	}
`
export const FilmCaptions = styled(RowFlex)`
	margin: 16px 0;
	li, span {
		display: inline-block;
		margin: 0 5px;
		padding: 4px 7px;
		border-radius: 2px;
		border: 1px solid #aeaeae;
		font-size: 12px;
		text-transform: uppercase;
		color: #dfdfdf !important;
	}
`

export const FilmCTAButtonsWrapper = styled(RowFlex)`
	align-content: center;
`

export const CTAButton = styled.button`
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
	filter: brightness(.8);
	color: #fff !important;
	transition: background .3s ease-in-out,
				filter .3s ease-in-out;
	display: flex;
	align-items: center;

	svg {
		height: 18px;
		width: 18px;
		margin-right: 14px;
	}

	&:hover {
		background-color: #f81629;
		filter: brightness(1);
	}
`