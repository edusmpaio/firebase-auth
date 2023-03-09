import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background: #121214;
    color: #fff;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }
`
