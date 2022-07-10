import React from 'react';
import {homeObjOne, homeObjThree} from './data';
import {Pricing} from "../../components/Pricing";
import {InfoSection} from "../../components/InfoSection";

export function Services() {
    return (
        <>
            <Pricing/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
        </>
    );
}

