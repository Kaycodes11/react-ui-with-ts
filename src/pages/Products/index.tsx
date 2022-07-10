import React from 'react';
import { homeObjOne, homeObjTwo } from './data';
import {InfoSection} from "../../components/InfoSection";

export function Products() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
        </>
    );
}

