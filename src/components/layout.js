import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import Header from './header'
import AboutSection from './About';
import { ThemeContext } from './../store';
import './layout.css'

const Layout = ({ children }) => {

	const { state } = useContext(ThemeContext);
	const [showAboutPage, setAboutPageVisibility] = useState(true)

	const AppWrapper = styled.div`
		max-width: 80%;
		min-height: 100%;
		margin: 0 auto;

		@media (max-width: 621px) {
			max-width: 90%;
		}

		@media (max-width: 512px) {
			max-width: 100%;
			padding: 20px;
		}

		div,
		p,
		span,
		label {
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
			{
				showAboutPage ?
				(
					<AboutSection />
				) :
				(
					<>
						<Header
							siteTitle={data.site.siteMetadata.title}
							toggleAboutSection={() => setAboutPageVisibility(true)}
						/>
						<div>
							{children}
						</div>
					</>
				)
			}
			</AppWrapper>
			)}
		/>
	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
