import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Barracks from "../images/barracks.svg"

const Container = styled.div`
    text-align: center;
    width: 100%;
    height: 1100px;
    background-image: url(${Barracks});
    background-position: bottom;
    background-repeat: no-repeat;
    margin-top: 5%;
`

const Word = styled.div `
    font-size: 300px;
    font-style: italic;
    text-transform: uppercase;
`

const Phrase = styled.div`
  font-weight: 200;
  font-size: 60px;
  line-height: 79px;
  margin: 1% 5% auto 5%;
`

export default function FocusWord(props) {
    return (
      <Container>
        <Word>{props.word}</Word>
        <Phrase>{props.phrase}</Phrase>
      </Container>
    );
}