import { createGlobalStyle } from "styled-components";

import { styleVar } from "./styleVariables";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

    color: ${styleVar.neutral700};
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  p {
    line-height: 1.5;
  }

  ul {
    margin: 0;
    padding: 0;
  
    list-style-type: none;
  }

  .sr-only {
    position: absolute !important;

    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    border: 0 !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
  }
`;