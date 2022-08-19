import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  width: 75%;
  margin: 10% auto 10% auto;
`

const Quote = styled.div`
  font-weight: 200;
  font-size: 60px;
  line-height: 1.5em;
  text-align: center;
  padding-bottom: 35px;
  ${mediaQueries.mobile} {
    font-size: 5vw;
  }
`

const Line = styled.hr`
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  height: 1px;
  background: black;
`

export default function FocusQuote(props) {
    return (
      <Container>
        <Quote>{props.quote}</Quote>
        <Line/>
      </Container>
    );
}