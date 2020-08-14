import React, { useEffect, useRef, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import { customThemes } from './../helper/constants';
import { ThemeContext } from './../store';
// import './AccentSwitcher.css';
import { PopoverArrowUp } from './styled'

// Toolbar

const PopoverArrowUpExtended = styled(PopoverArrowUp)`
	@media (max-width: 667px) {
		display: none;
	}
`
const SvgContainer = styled.div`
	cursor: pointer;
	box-shadow: 0 0px 12px 1px rgba(0,0,0,0.1);
`
const FilterSettingsContainer = styled.div`
	display: flex;
	position: absolute;
	top: 48px;
	flex-direction: column;
	background: #cfd8db;
	border-radius: 4px;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0px 12px 1px rgba(0,0,0,0.1);
	z-index: 13;
	min-width: 180px;

	@media (max-width: 667px) {
		right: -42px;
	}

	@media (max-width: 620px) {
		right: 0;
	}
`

const FilterSettingsOption = styled.div`
	cursor: pointer;
	font-size: 14px;
    padding: 10px 8px;
	border-bottom: 1px solid #666;
	width: 100%;
    box-sizing: border-box;
`

function FilterSettings ({ onFilterSelect }) {
	const [ open, setOpen ]  = useState(false);
	const { state } = useContext(ThemeContext);

	const node = useRef();
	const handleClickOutside = e => {
		if (node.current.contains(e.target)) {
			// inside click
			return;
		}
		// outside click
		setOpen(false);
	};

	function onSelect() {
		setOpen(false);
		onFilterSelect();
	}

	useEffect(() => {
		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
	
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [open])
	return (
		<div
			style={{
				display: 'flex',
				position: 'relative',
				justifyContent: 'center'
			}}
			className="filter-settings-wrapper"
			ref={node}
		>
			<SvgContainer
				onClick={() => setOpen(!open)}
			>
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M29.5341 0H6.46587C2.90046 0 0 2.90046 0 6.46587V29.5341C0 33.0995 2.90046 36 6.46587 36H29.5341C33.0995 36 36 33.0995 36 29.5341V6.46587C36 2.90046 33.0995 0 29.5341 0ZM30.4235 28.0941H18.8859C17.8718 31.0958 13.612 31.1003 12.5965 28.0941H5.57648C4.17572 28.0941 4.17537 25.9765 5.57648 25.9765H12.5965C13.6105 22.9748 17.8703 22.9702 18.8859 25.9765H30.4235C31.8243 25.9765 31.8247 28.0941 30.4235 28.0941ZM30.4235 19.0588H27.9212C26.9071 22.0605 22.6473 22.065 21.6317 19.0588H5.57648C4.17572 19.0588 4.17537 16.9412 5.57648 16.9412H21.6318C22.6458 13.9395 26.9056 13.935 27.9212 16.9412H30.4236C31.8243 16.9412 31.8247 19.0588 30.4235 19.0588ZM30.4235 10.0235H14.3682C13.3542 13.0252 9.09436 13.0298 8.07884 10.0235H5.57648C4.17572 10.0235 4.17537 7.90587 5.57648 7.90587H8.07884C9.09281 4.90423 13.3527 4.89966 14.3682 7.90587H30.4235C31.8243 7.90587 31.8247 10.0235 30.4235 10.0235Z" fill={ state.color || 'black' }/>
					<path d="M15.7412 25.8353C14.1535 25.8353 14.1543 28.2352 15.7412 28.2352C17.3289 28.2353 17.328 25.8353 15.7412 25.8353Z" fill={ state.color || 'black' }/>
					<path d="M11.2236 7.76468C9.63583 7.76468 9.63668 10.1647 11.2236 10.1647C12.8112 10.1647 12.8104 7.76468 11.2236 7.76468Z" fill={ state.color || 'black'  }/>
					<path d="M24.7764 16.8C23.1887 16.8 23.1896 19.1999 24.7764 19.1999C26.3642 19.2 26.3633 16.8 24.7764 16.8Z" fill={ state.color || 'black'  }/>
				</svg>
			</SvgContainer>
			{open && 
				(
					<FilterSettingsContainer style={{ backgroundColor: state.color || '#cfd8db' }}>
						<PopoverArrowUpExtended
							style={{
								borderBottomColor: state.color || '#cfd8db'
							}}
						/>
						<FilterSettingsOption style={{ color: state.backgroundColor || '#000' }}>
							Sort by My Rating
						</FilterSettingsOption>
						<FilterSettingsOption style={{ color: state.backgroundColor || '#000' }}>
							Sort by Watch Date
						</FilterSettingsOption>
						<FilterSettingsOption style={{ color: state.backgroundColor || '#000' }}>
							Sort by IMDB Rating
						</FilterSettingsOption>
						<FilterSettingsOption style={{ color: state.backgroundColor || '#000' }}>
							Sort by Release Year
						</FilterSettingsOption>
						{/* {
							Object.keys(customThemes).map((theme, index) => {
								const primaryAccentColor = customThemes[theme].backgroundColor;
								const secondaryAccentColor = customThemes[theme].color;
								return(
									<div
										className="accent-switcher-color-item"
										key={index}
										onClick={() => onFilterSelect(secondaryAccentColor, primaryAccentColor)}
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
						} */}

					</FilterSettingsContainer>
				)
			}
		</div>
	)
}

FilterSettings.propTypes = {
	onFilterSelect: PropTypes.func.isRequired
}

export default FilterSettings;