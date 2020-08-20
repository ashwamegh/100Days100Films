import React from 'react';
import Container from './src/components/container';
import { ThemeContextProvider, MovieContextProvider } from './src/store'

export const wrapRootElement = ({ element }) => {
  return (
      <ThemeContextProvider>
	  	<MovieContextProvider>
			<Container>
				{element}
			</Container>
		</MovieContextProvider>
    </ThemeContextProvider>
  )
}