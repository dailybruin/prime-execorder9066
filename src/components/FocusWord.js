import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Barracks from "../images/barracks.svg"

const Container = styled.div`
    text-align: center;
    width: 100%;
    height: 100vh;
    background-image: url(${Barracks});
    background-position: bottom;
    background-repeat: no-repeat;
    margin-top: 5%;
`

const Quote = styled.div`
  font-weight: 200;
  font-size: 60px;
  line-height: 79px;
  padding-top: 5%;
  text-align: center;
`


export default function FocusWord(props) {
    return (
      <Container>
        <Quote>{props.phrase}</Quote>
      </Container>
    );
}