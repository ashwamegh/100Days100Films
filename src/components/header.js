import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react';
import { ThemeContext } from './../store';
import { UPDATE_CURRENT_THEME } from './../store/types';
import AccentSwitcher from './../components/AccentSwitcher';
import Slogan from './Slogan';

const Header = (props) => {
	const { dispatch } = useContext(ThemeContext);
	const [ showAccentColors, toggleShowAccentColors ] = useState(false);

	function changeTheme(color, backgroundColor) {
		toggleShowAccentColors(false);
		dispatch({ type: UPDATE_CURRENT_THEME, payload: { color, backgroundColor }});
	}
	
	return (
		<header>
			<Slogan />
			<div className="header-links">
				<div>
				About
				</div>
				<AccentSwitcher
					open={showAccentColors}
					onToggle={() => toggleShowAccentColors(!showAccentColors)}
					onAccentChange={changeTheme}
				/>
			</div>
		</header>
	  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
