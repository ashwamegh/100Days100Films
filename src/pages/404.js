import React from 'react'

import Footer from '../components/footer'
import SEO from '../components/seo'
import './404.css';

/* PSD to HTML */
// converted using https://psdtoweb.de/

const NotFoundPage = () => (
	<>
		<SEO title="404: Not found" />
		<div className="wrapper">
			<div className="fundal"></div>
			<div className="glitch" data-text="404 NOT FOUND ...">404 NOT FOUND ...</div> 
		</div>
		<Footer />
	</>
)

export default NotFoundPage
