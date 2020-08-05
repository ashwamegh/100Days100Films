import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './../store';
import FilterSettings from './FilterSettings';
import { RadioInputWrapper, RadioInput } from './styled';


function Toolbar() {
	const { state } = useContext(ThemeContext);
	const RadioInputExtended = styled(RadioInput)`
		&:checked:after {
			background-color: ${state.backgroundColor};
			border-color: ${state.color};
		}
	`
	return (
		<div
			style={{
				padding: '120px 0px 120px 0px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-end',
				width: '100%',
				alignItems: 'center'
			}}
		>
			<RadioInputWrapper>
				<RadioInputExtended name="sortingOrder" id="sortByAsc" value="sortByAsc" checked />
				<label className="form-check-label" htmlFor="sortingOrder">
					Order By Asc
				</label>
			</RadioInputWrapper>

			<RadioInputWrapper style={{ marginRight: 16 }}>
				<RadioInputExtended name="sortingOrder" id="sortByDesc" value="sortByDesc" />
				<label className="form-check-label" htmlFor="sortingOrder">
					Order By Desc
				</label>
			</RadioInputWrapper>
			<FilterSettings />
		</div>
	);
}

export default Toolbar;