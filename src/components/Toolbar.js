import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from './../store';
import FilterSettings from './FilterSettings';
import { RadioInputWrapper, RadioInput, ToolbarWrapper } from './styled';


function Toolbar({ onChangeOfOrder, onSorting, sortingOrder }) {
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
				<RadioInputExtended
					name="sortingOrder"
					id="sortByAsc"
					value="sortByAsc"
					checked={sortingOrder === "asc"}
					onChange={(e) => {
						if(e.target.checked) {
							onChangeOfOrder("asc")
						}
					}}
				/>
				<label className="form-check-label" htmlFor="sortingOrder">
					Order By Asc
				</label>
			</RadioInputWrapper>

			<RadioInputWrapper style={{ marginRight: 16 }}>
				<RadioInputExtended 
					name="sortingOrder"
					id="sortByDesc"
					value="sortByDesc"
					checked={sortingOrder === "desc"}
					onChange={(e) => {
						if(e.target.checked) {
							onChangeOfOrder("desc")
						}
					}}
				/>
				<label className="form-check-label" htmlFor="sortingOrder">
					Order By Desc
				</label>
			</RadioInputWrapper>
			<FilterSettings
				onFilterSelect={(sel) => onSorting(sel)}
			/>
		</ToolbarWrapper>
	);
}

Toolbar.propTypes = {
	onChangeOfOrder: PropTypes.func,
	onSorting: PropTypes.func,
	sortingOrder: PropTypes.string.isRequired
}

Toolbar.defaultProps = {
	onChangeOfOrder: () => {},
	onSorting:() => {}
}



export default Toolbar;