import styled, {css} from "styled-components";
import {Container} from "../../styles/global";
import {Link} from "react-router-dom";
import {FaMagento} from "react-icons/fa";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;


export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

// custom prop(s): Heading's color depend on given isActive value on <Heading active={false} /> at runtime.
export const Heading = styled.h1<{isActive: boolean}>`
  color: ${props => props.isActive ? "green" : "black"};
`;

export const WrapperStyled = styled.div(
    (props: any) => css`
      background-color: gray;
      margin: 0 auto;

      display: grid;

      @media only screen and (max-width: 768px) {
        ${props?.selectedModuleId
                ? css`
                  grid-auto-flow: row;
                  grid-row-gap: 16px;
                  align-content: start;
                `
                : css``};
      }

      @media only screen and (min-width: 769px) {
        width: 100vw;
        height: 100vh;

        ${props?.selectedModuleId
                ? css`
                  grid-auto-flow: column;
                  grid-template-columns: 1fr 256px;
                  grid-column-gap: 16px;
                  max-width: 1056px;
                `
                : css`
                  max-width: 800px;
                `};
      }
    `
);

export const NavMenu = styled.ul<{click?: boolean}>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all .3s ease;
    }
  }
`;

