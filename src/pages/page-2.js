import React from 'react';
import PropTypes from 'prop-types';
import { FullPageBackdrop, FullPageBackdropImageContainer, FullPageBackdropImage } from './../components/styled'

function FilmInfo({ filmNo }) {
	return(
		<FullPageBackdrop>
			<FullPageBackdropImageContainer>
				<FullPageBackdropImage src="https://image.tmdb.org/t/p/original/wO5QSWZPBT71gMLvrRex0bVc0V9.jpg"></FullPageBackdropImage>
			</FullPageBackdropImageContainer>
		</FullPageBackdrop>
	)
}

FilmInfo.propTypes = {
	filmNo: PropTypes.number
}

FilmInfo.defaultProps = {
	filmNo: 1
}

export default FilmInfo;