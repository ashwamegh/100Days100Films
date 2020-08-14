import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './../store';
import FilterSettings from './FilterSettings';
import { RadioInputWrapper, RadioInput, ToolbarWrapper } from './styled';


function Toolbar() {
	const { state } = useContext(ThemeContext);
	const RadioInputExtended = styled(RadioInput)`
		&:checked:after {
			background-color: ${state.backgroundColor};
			border-color: ${state.color};
		}
		&:checked:before {
			background-color: ${state.color};
		}
	`
	return (
		<ToolbarWrapper>
			<RadioInputWrapper>
				<RadioInputExtended name="sortingOrder" id="sortByAsc" value="sortByAsc"/>
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
			<FilterSettings
				onFilterSelect={() => console.log("sjndskjn")}
			/>
		</ToolbarWrapper>
	);
}

export default Toolbar;