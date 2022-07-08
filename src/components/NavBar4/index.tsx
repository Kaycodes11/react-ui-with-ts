import React from 'react';
import {Nav, NavBarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from "./styled";
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons";

function NavBar() {
    const [click, setClick] = React.useState<boolean | undefined>(false);
    const handleClick = () => setClick(!click);
    return (
        <IconContext.Provider value={{color: "#ffffff"}}>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                        Ultra
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/">Service</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/">Resume</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/">About Me</NavLinks>
                        </NavItem>

                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
    )
}


export {NavBar};

