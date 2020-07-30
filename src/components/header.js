import PropTypes from 'prop-types'
import React from 'react'
import colorPickerLogo from './../images/color-picker.svg';

const Header = (props) => {
	console.log(props);
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
			<img src={colorPickerLogo} alt="Color picker icon" height="38px" width="38px" />
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
