import React from 'react';
import Container from './src/components/container';
import { ThemeContextProvider } from './src/store'

export const wrapRootElement = ({ element }) => {
  return (
      <ThemeContextProvider>
        <Container>
            {element}
        </Container>
    </ThemeContextProvider>
  )
}