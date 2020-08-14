import React from 'react';
import styled from 'styled-components';
import {
	FullBlackPage,
	BoxWithTextWrapper,
	BoxWithText,
	SloganTextWrapper,
	HorizontalText,
	VerticalText,
	Rotate90Deg
} from './styled';

const HorizontalTextExtended = styled(HorizontalText)`
	font-size: 188px;

	@media (max-width: 992px) {
		font-size: 150px;
	}

	@media (max-width: 767px) {
		font-size: 120px;
		margin: 4px;
	}

	@media (max-width: 600px) {
		font-size: 80px;
		margin: 2px;
	}

	@media (max-width: 400px) {
		font-size: 66px;
		margin: 0px;
	}

	@media (max-width: 400px) {
		font-size: 55px;
	}
`

const VerticalTextExtended = styled(VerticalText)`
	font-size: 55px;

	@media (max-width: 992px) {
		font-size: 45px;
	}

	@media (max-width: 767px) {
		font-size: 32px;
	}
	
	@media (max-width: 600px) {
		font-size: 24px;
	}

	@media (max-width: 400px) {
		font-size: 19px;
	}

	@media (max-width: 400px) {
		font-size: 17px;
		margin: 0px;
	}
`

export default function PageLoader() {
	return(
		<FullBlackPage>
			<BoxWithTextWrapper>
				<BoxWithText>
				<SloganTextWrapper>
					<HorizontalTextExtended>100</HorizontalTextExtended>
					<VerticalTextExtended>
						<Rotate90Deg>Days</Rotate90Deg>
					</VerticalTextExtended>
					<HorizontalTextExtended>100</HorizontalTextExtended>
					<VerticalTextExtended>
						<Rotate90Deg>Films</Rotate90Deg>
					</VerticalTextExtended>
				</SloganTextWrapper>
				</BoxWithText>
			</BoxWithTextWrapper>
		</FullBlackPage>
	)
};