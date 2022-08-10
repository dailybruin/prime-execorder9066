import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 140px auto 140px auto;
`

const Quote = styled.div`
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

export default function FocusQuote(props) {
    return (
      <Container>
        <Quote>{props.quote}</Quote>
        <Line/>
      </Container>
    );
  }