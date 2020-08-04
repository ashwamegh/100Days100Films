import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import Header from './header'
import { ThemeContext } from './../store';
import './layout.css'

const Layout = ({ children }) => {

	const { state } = useContext(ThemeContext);

	const AppWrapper = styled.div`
		max-width: 80%;
		margin: 0 auto;

		div,
		p,
		span {
			&::selection {
				background: ${state.color};
				color: ${state.backgroundColor};
			}
		}
	`
	return (
		<StaticQuery
			query={graphql`
			query SiteTitleQuery {
				site {
				siteMetadata {
					title
				}
				}
			}
			`}
			render={data => (
			<AppWrapper>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div>
				{children}
				</div>
			</AppWrapper>
			)}
		/>
	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
