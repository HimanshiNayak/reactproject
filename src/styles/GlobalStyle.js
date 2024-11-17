// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body, #root {
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1, h2, h3 {
    color: #333;
  }

  .contentWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
