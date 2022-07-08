import React from 'react';
import {Container} from '../../styles/global';
import {InfoColumn, InfoRow, InfoSec, TextWrapper} from "./styled";


const InfoSection: React.FC<Props> = ({lightBg = false, imgStart = false}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart>
                        <InfoColumn>
                            <TextWrapper>HomePage</TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

interface Props {
    lightBg: boolean | string;
    imgStart?: boolean | string

}

export {InfoSection};
