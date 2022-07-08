import React from 'react';
import {Button, Container} from '../../styles/global';
import {Heading, Img, ImgWrapper, InfoColumn, InfoRow, InfoSec, SubTitle, TextWrapper, TopLine} from "./styled";
import {Link} from "react-router-dom";


const InfoSection: React.FC<Props> = ({
                                          lightBg = false,
                                          imgStart = false,
                                          lightTopLine,
                                          lightText,
                                          headline,
                                          topLine,
                                          description,
                                          lightTextDesc,
                                          buttonLabel,
                                          img, alt, start

                                      }) => {
    console.log(img, "HERE");
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to={"/sign-up"}>
                                    <Button big fontBig primary={false}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

interface Props {
    lightBg: boolean | string;
    headline: boolean | string;
    imgStart?: boolean | string;
    topLine: boolean | string;
    description: boolean | string;
    lightTopLine?: boolean | string;
    lightText: boolean | string;
    lightTextDesc?: boolean | string;
    buttonLabel?: boolean | string;
    primary?: boolean | string;
    img: string;
    alt: string;
    start: string
}

export {InfoSection};
