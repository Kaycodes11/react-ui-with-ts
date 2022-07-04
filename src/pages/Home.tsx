import React from "react";
import styled from "styled-components";
import {Form} from "../components/Form";
import {Button} from "../components/Button";
import {Hero} from "../components/Hero";

const Heading2 = styled.h2`
  text-align: center;
  background-color: seagreen;
  text-transform: capitalize;
  // with display: inline-block even if its block element it will disregard text align and only occupy from start to till needed
  //display: inline-block;
;`;

export const Home: React.FC = () => {
    const [date, setDate] = React.useState<string | null>("");
    const [time, setTime] = React.useState<string | null>("");

    const handleDate = () => {
        const currentDate = new Date();
        setDate(currentDate.toDateString());
    };
    const handleTime = () => {
        const currentDate = new Date();

        setTime(
            `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`
        );
    };
    return (
        <>
            <Heading2>This is the homepage</Heading2>
            <Form/>
            {/*<Button btnText={"show the current date"} variant={"outlined"} onClick={() => handleDate()} />*/}
            {/*<Button btnText={"show the current date"} variant={"contained"}  margin={"0 0 5px 5px"} onClick={() => handleTime()} />*/}
            <br/>
            {/*<Hero/>*/}
        </>
    )
};
