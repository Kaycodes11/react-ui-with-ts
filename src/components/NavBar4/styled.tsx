import React, {DetailedHTMLProps, forwardRef} from 'react';
import styled, {css} from "styled-components";
import {Container} from "../../styles/global";
import {Link} from "react-router-dom";
import {FaMagento} from "react-icons/fa";
import {ButtonHTMLAttributes} from "react";

// Extending the native HTML/JSX elements while preserving its native props and also adding some custom props
// https://stackoverflow.com/questions/40731352/extending-html-elements-in-react-and-typescript-while-preserving-props

export interface ButtonProps2 extends ButtonHTMLAttributes<HTMLButtonElement> {
    extraProp1: string;
    extraProp2: string;
}

export const Button1 = forwardRef<HTMLButtonElement, ButtonProps2>(
    ({extraProp1, extraProp2, ...props}, ref) => (
        <button
            {...props}
            ref={ref}
            // Do something with the extra props
        />
    ),
);
// Button1.displayName = "Button";


type TheCustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const Button2 = ({children, icon, ...props}: TheCustomButtonProps) => {
    return <div>Button</div>
}

// extend React element with native and custom props for styled components
// https://stackoverflow.com/questions/54654303/using-a-forwardref-component-with-children-in-typescript
// https://stackoverflow.com/questions/57424821/typescript-extend-react-component-props-for-styled-component-element
// https://stackoverflow.com/questions/50627493/how-can-one-extend-react-types-to-support-html-attributes-as-props
// https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/

export type ButtonVariant = 'text' | 'filled' | 'outlined';

export const ButtonElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
`;

export interface ButtonProps {
    variant: ButtonVariant;
}


export interface FancyButtonProps extends React.ComponentPropsWithoutRef<'button'> {

    loading?: boolean;
    secondary?: boolean;
    fullWidth?: boolean;
    maxHeight?: boolean;
    fooBar?: string;
}

const FancyButton = React.forwardRef<HTMLButtonElement, FancyButtonProps>((props, ref) => (
    <button type="button" ref={ref} className="FancyButton">
        {props.children}
        {props.fooBar}
    </button>
));

const buttonRef = React.createRef<HTMLButtonElement>();
// usage
// <FancyButton ref={buttonRef} fooBar={"someValue"}>Fancy Button</FancyButton>

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loading?: boolean;
    secondary?: boolean;
    fullWidth?: boolean;
    maxHeight?: boolean;
}

export const Button4: React.FC<Props> = (props: Props) => {
    const {ref, ...buttonProps} = props;
    return <SButton {...buttonProps}>{props.children}</SButton>
}

export const SButton = styled.button<Props>(props => css`
  background: green;
  color: black;
`);

// ----------------------------------------------------------------------------------------------------
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
export const Heading = styled.h1<{ isActive: boolean }>`
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

export const NavMenu = styled.ul<{ click?: boolean }>`
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

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border:none;
  outline: none;
`
