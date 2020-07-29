import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from './image';

const Header = ({ siteTitle }) => (
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
      <Image src="color-picker.svg"/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
