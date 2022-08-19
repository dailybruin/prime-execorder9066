import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
    display: grid;
    grid-template-columns: 45% auto;
    column-gap: 50px;
    align-items: center;
    width: 100vw;
    min-height: fit-content;
    box-sizing: border-box;

    ${mediaQueries.mobile} {
        grid-template-columns: auto;
    }
`

const RightColumn = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    justify-self: center;
    margin-right: 3%;

    ${mediaQueries.mobile} {
        margin-top: 10%;
    }
`

const Quote = styled.div`
    font-weight: 200;
    font-size: 3.5vw;
    line-height: 1.5em;
    text-align: center;
    padding-bottom: 35px;
    ${mediaQueries.mobile} {
        font-size: 5vw;
    }
`

const Line = styled.hr`
    width: 50%;
    text-align: center;
    height: 1px;
    background: black;
`

const Img = styled.img`
    width: 100%;
    // max-height: 100vh;
    justify-self: start;
`

export default function ImageQuote(props) {
    return (
      <Container>
        <Img src={props.left_image} />
        <RightColumn>
            <Quote>{props.quote}</Quote>
            <Line/>
        </RightColumn>
      </Container>
    );
  }