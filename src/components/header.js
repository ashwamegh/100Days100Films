import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react';
import { ThemeContext } from './../store';
import { UPDATE_CURRENT_THEME } from './../store/types';
import AccentSwitcher from './../components/AccentSwitcher';

const Header = (props) => {
	console.log(props);
	const { dispatch } = useContext(ThemeContext);
	const [ showAccentColors, toggleShowAccentColors ] = useState(false);

	function changeTheme(color, backgroundColor) {
		dispatch({ type: UPDATE_CURRENT_THEME, payload: { color, backgroundColor }});
	}
	
	return (
		<header>
			<div className="title">
				<div className="horizontal">100</div>
				<div className="rotate-wrapper vertical"><span className="rotate-inner rotate">Days</span></div>
				<div className="horizontal">100</div>
				<div className="rotate-wrapper vertical"><span className="rotate-inner rotate">Films</span></div>
			</div>
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
