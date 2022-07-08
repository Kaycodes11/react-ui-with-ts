import React, {useEffect} from 'react';
import {
    Nav,
    NavBarContainer,
    NavIcon,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from "./styled";
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons";
import {Button} from "../../styles/global";


function NavBar() {
    const [click, setClick] = React.useState<boolean | undefined>(false);
    const [button, setButton] = React.useState<boolean | undefined>(true);

    const handleClick = () => setClick(!click);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [])

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

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to={"sign-up"}>
                                    <Button primary={true}>SIGN UP</Button>
                                </NavBtnLink>

                            ) : (
                                <NavBtnLink to={"/sign-up"}>
                                    <Button fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )
                            }
                        </NavItemBtn>

                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
    )
}


export {NavBar};

