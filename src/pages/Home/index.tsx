import React from 'react';
import {InfoSection} from "../../components/InfoSection";
import {HomeObjOne as homeObjOne} from "./data";

const Home = () => {
    return (
        <>
            {/*<InfoSection lightBg={HomeObjOne.lightBg}/>*/}
            <InfoSection {...homeObjOne} />
        </>
    )
}
export {Home};
