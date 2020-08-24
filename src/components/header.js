import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react';
import { ThemeContext } from './../store';
import { UPDATE_CURRENT_THEME } from './../store/types';
import AccentSwitcher from './../components/AccentSwitcher';
import Slogan from './Slogan';
import { HeaderWrapper, HeaderLinks } from './styled'
import styled from 'styled-components';

const Header = ({ toggleAboutSection }) => {
	const { state: theme, dispatch } = useContext(ThemeContext);
	
	const [ showAccentColors, toggleShowAccentColors ] = useState(false);

	const HeaderLinksExtension = styled(HeaderLinks)`

		.about {
			transition: border-bottom 0.3s ease-in;

			&:after {
				content: '';
				display: block;
				width: 0;
				height: 4px;
				background: ${theme.color};
				transition: width .3s;
			}
			&:hover {
				&:after {
					width: 100%;
				}
			}
		}
	`

	function changeTheme(color, backgroundColor) {
		toggleShowAccentColors(false);
		dispatch({ type: UPDATE_CURRENT_THEME, payload: { color, backgroundColor }});
	}
	
	return (
		<HeaderWrapper>
			<Slogan />
			<HeaderLinksExtension className="header-links">
				<div
					className="about"
					onClick={toggleAboutSection}
					style={{
						cursor: 'pointer'
					}}
				>
					About
				</div>
				<AccentSwitcher
					open={showAccentColors}
					onToggle={() => toggleShowAccentColors(!showAccentColors)}
					onAccentChange={changeTheme}
				/>
			</HeaderLinksExtension>
		</HeaderWrapper>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
	toggleAboutSection: PropTypes.func
}

Header.defaultProps = {
	siteTitle: '',
	toggleAboutSection: () => {}
}

export default Header
