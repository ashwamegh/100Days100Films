import React, { useContext } from 'react';
import { ThemeContext } from './../store';
import FilterSettings from './FilterSettings';

function Toolbar() {
	return (
		<div
			style={{
				padding: '120px 0px 120px 0px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-end',
				width: '100%'
			}}
		>
			<FilterSettings />
		</div>
	);
}

export default Toolbar;