import React from "react";
import styled from "styled-components";
import {Form} from "../components/Form";
import {Hero} from "../components/Hero";

const Heading2 = styled.h2`
  text-align:center; 
  background-color: seagreen;
  text-transform: capitalize;
  // with display: inline-block even if its block element it will disregard text align and only occupy from start to till needed
  //display: inline-block;
;`;

export const Home: React.FC = () => {
    return (
        <>
        <Heading2>This is the homepage</Heading2>
         <Form />
            <br/>
            <Hero />
        </>
    )
};