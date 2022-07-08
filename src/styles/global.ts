import styled, {createGlobalStyle} from "styled-components";

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
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;


interface ButtonProps {
    primary: `primary`,
    big?: `big`;
    fontBig?: string;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: ${(primary) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 6px' : '10px 2px')}
  color: #FFFFFF;
  font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    transition: all .3s ease-out;
    background: #FFFFFF;
    background: ${(primary) => (primary ? '#4B59F7' : '#0467FB')};
  }
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }

`;
