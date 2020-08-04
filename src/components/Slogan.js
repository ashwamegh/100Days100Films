import React from "react";
import { HorizontalText, SloganTextWrapper, VerticalText, Rotate90Deg } from './styled';

export default function Slogan() {
	return(
		<SloganTextWrapper>
			<HorizontalText>100</HorizontalText>
			<VerticalText>
				<Rotate90Deg>Days</Rotate90Deg>
			</VerticalText>
			<HorizontalText>100</HorizontalText>
			<VerticalText>
				<Rotate90Deg>Films</Rotate90Deg>
			</VerticalText>
		</SloganTextWrapper>
	)
};
