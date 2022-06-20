import {createGlobalStyle} from "styled-components";

// reset the browser defaults

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', sans-serif;
  }

  #root {
    margin: 0 auto;
  }
  
  //html, body {
  //  overflow-x: hidden;
  //}
`;
