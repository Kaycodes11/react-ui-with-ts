import React from 'react';
import {InfoSection} from "../../components/InfoSection";
import { Pricing } from '../../components/Pricing';
import * as HomeObject from "./data";

const Home = () => {
    return (
        <>
            <InfoSection {...HomeObject.HomeObjOne} />
            <InfoSection {...HomeObject.HomeObjTwo} />
            <InfoSection {...HomeObject.HomeObjThree} />
            <Pricing />
            <InfoSection {...HomeObject.HomeObjFour} />
        </>
    )
}
export {Home};
