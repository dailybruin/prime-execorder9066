import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
    display: grid;
    grid-template-columns: 50% auto;
    column-gap: 50px;
    align-items: center;
    justify-items: start;
    width: 100%;
    margin-bottom: 100px;
    box-sizing: border-box;
`

const RightColumn = styled.div`
    width: 80%;
`

const Quote = styled.div`
    width: 100%;
    font-weight: 200;
    font-size: 64px;
    line-height: 79px;
    text-align: center;
    padding-bottom: 35px;
`

const Line = styled.hr`
    width: 50%;
    margin-right: auto;
    margin-left: auto;
    height: 1px;
    background: black;
`

const Img = styled.img`
    width: 100%;
    max-height: 100vh;
    justify-self: flex-start;
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