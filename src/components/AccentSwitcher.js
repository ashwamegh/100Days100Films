import React from 'react'
import PropTypes from 'prop-types'

import colorPickerLogo from './../images/color-picker.svg';
import { customThemes } from './../helper/constants';
import './AccentSwitcher.css';

function AccentSwitcher ({ themes, open, onToggle, onAccentChange }) {
	return (
		<div
			style={{
				display: 'flex',
				position: 'relative',
				justifyContent: 'center'
			}}
			className="accent-switcher"
		>
			<img
				src={colorPickerLogo}
				alt="Color picker icon"
				height="38px"
				width="38px"
				onClick={onToggle}
			/>
			{open && 
				(
					<div
						style={{
							display: 'flex',
							position: 'absolute',
							top: 48,
							flexDirection: 'column',
							background: '#cfd8db',
							padding: 4,
							borderRadius: 4,
							alignItems: 'center',
							justifyContent: 'center',
							boxShadow: '0 0px 12px 1px rgba(0,0,0,0.1)'
						}}
					>
						{
							Object.keys(themes).map((theme, index) => {
								const primaryAccentColor = themes[theme].backgroundColor;
								const secondaryAccentColor = themes[theme].color;
								return(
									<div
										className="accent-switcher-color-item"
										key={index}
										onClick={() => onAccentChange(secondaryAccentColor, primaryAccentColor)}
										style={{
											width: 28,
											height: 28,
											background: `linear-gradient( -45deg, ${secondaryAccentColor}, ${secondaryAccentColor} 49%, white 49%, white 51%, ${primaryAccentColor} 51% )`,
											borderRadius: '50%',
											margin: '2px 0px',
											transform: 'scale(0.8)',
											transition: '0.3s transform ease-in',
											boxShadow: '0px 0px 12px 1px rgba(0, 0, 0, 0.1)'
										}}
									>
									</div>
								)
							})
						}
					</div>
				)
			}
		</div>
	)
}

AccentSwitcher.propTypes = {
	open: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired,
	onAccentChange: PropTypes.func.isRequired,
	themes: PropTypes.object
}

AccentSwitcher.defaultProps = {
	themes: customThemes,
	open: false
}

export default AccentSwitcher;