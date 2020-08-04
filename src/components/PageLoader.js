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
`

const VerticalTextExtended = styled(VerticalText)`
	font-size: 55px;
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