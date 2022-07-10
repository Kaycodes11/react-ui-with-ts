import React from 'react';
import {Button} from '../../styles/global';
import {
    FooterContainer, FooterLink,
    FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form,
    FormInput, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights
} from "./styled";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

export const Footer: React.FC<FooterProps> = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and updates
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at anytime</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your email"/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>

                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>

                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to={""}>
                        <SocialIcon/>
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>ULTRA 2022</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={""} target={"_blank"} aria-label={"Twitter"}>
                            <FaTwitter/>
                        </SocialIconLink>

                        <SocialIconLink href={""} target={"_blank"} aria-label={"Facebook"}>
                            <FaFacebook/>
                        </SocialIconLink>

                        <SocialIconLink href={""} target={"_blank"} aria-label={"Instagram"}>
                            <FaInstagram/>
                        </SocialIconLink>

                        <SocialIconLink href={"#"} target={"_blank"} aria-label={"YouTube"} rel="noopener noreferrer">
                            <FaYoutube/>
                        </SocialIconLink>

                        <SocialIconLink href={"https://www.linkedin.com/in/pallab-kayal-838a24a2/"} target={"_blank"}
                                        aria-label={"LinkedIn"}>
                            <FaLinkedin/>
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )

}

interface FooterProps {
}

