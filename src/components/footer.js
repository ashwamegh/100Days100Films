import React from 'react';
import { RowFlex, ColumnFlex } from './styled'
import styled from 'styled-components';

const Footer = styled.footer`
	padding: 0 10%;
	padding-top: 7.1rem;
	padding-bottom: 7.1rem;
	max-width: 100%;
	font-weight: 300;
	line-height: 1.8;
	background: #000;

	@media (max-width: 621px) {
		padding: 0 5%;
	}

	@media (max-width: 512px) {
		padding: 20px;
	}
`;

const FooterWrapper = styled(RowFlex)`
	@media (max-width: 767px) {
		flex-flow: column;
	}
`

const FooterLeftBlock = styled(ColumnFlex)`
	display: flex;
	width: calc(100% / 12 * 7);
	max-width: calc(100% / 12 * 7);
	flex: 0 0 auto;
	flex-basis: calc(100% / 12 * 7);
	padding-right: 12px;

	@media (max-width: 767px) {
		width: 100%;
		max-width: 100%;
	}
`

const FooterRightBlock = styled(ColumnFlex)`
	display: flex;
	width: calc(100% / 12 * 4);
	max-width: calc(100% / 12 * 4);
	flex: 0 0 auto;
	flex-basis: calc(100% / 12 * 4);

	@media (max-width: 767px) {
		margin-top: 1.5rem;
		width: 100%;
		max-width: 100%;
	}
`

const WhiteText = styled.span`
	color: #fff;
`

function FooterSection () {
	return (
		<Footer>
			<FooterWrapper>
				<FooterLeftBlock>
					<div>
						<p>
							<WhiteText>Shashank Shekhar</WhiteText>
							<br />
							<span style={{ color: '#7c7c7c' }}>Engineered turned creator</span>
						</p>
					</div>
					<div>
						<p style={{ marginTop: '0.8rem' }}>
							<a 
								href="mailto:hello@shashankshekhar.dev"
								title="Send me an email"
								style={{ color: "#9f82ff" }}
							>
								<span>
									hello@shashankshekhar.dev
								</span>
							</a>
						</p>
					</div>
				</FooterLeftBlock>

				<FooterRightBlock>
						<p style={{ color: '#aaaaaa' }}>Elsewhere</p>
						<p>
							<a href="https://www.patreon.com/ashwamegh" target="_blank" rel="noopener" title="Support me on Patreon">
								<WhiteText>Patreon</WhiteText>
							</a>
							<br />
							<a href="https://www.instagram.com/ashwameghsocial/" target="_blank" rel="noopener" title="My Instagram Profile">
								<WhiteText>Instagram</WhiteText>
							</a>
							<br />
							<a href="https://twitter.com/ashwameghsocial" target="_blank" rel="noopener" title="My Twitter Profile">
								<WhiteText>Twitter</WhiteText>
							</a>
							<br />
							{/* <a href="https://youtube.com/ashwameghsocial" target="_blank" rel="noopener" title="My YouTube Channel">
								<WhiteText>YouTube</WhiteText>
							</a> */}
						</p>
				</FooterRightBlock>
			</FooterWrapper>
		</Footer>
	)
}

export default FooterSection;