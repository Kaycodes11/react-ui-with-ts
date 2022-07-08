import React from 'react';
import {InfoSection} from "../../components/InfoSection";
import * as HomeObject from "./data";

const Home = () => {
    return (
        <>
            <InfoSection {...HomeObject.HomeObjOne} />
            <InfoSection {...HomeObject.HomeObjTwo} />
            <InfoSection {...HomeObject.HomeObjThree} />
            <InfoSection {...HomeObject.HomeObjFour} />
        </>
    )
}
export {Home};
