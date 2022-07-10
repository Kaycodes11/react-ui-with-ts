import React from 'react';
import {InfoSection} from "../../components/InfoSection";
import { homeObjOne, homeObjThree } from './data';

export function SignUp() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
        </>
    );
}

