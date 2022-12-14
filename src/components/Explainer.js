import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Barracks from "../images/barracks.svg"

const Container = styled.div`
    text-align: center;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    background-image: url(${Barracks});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 5%;

    ${mediaQueries.mobile} {
      height: 80vh;
    }
`

const Phrase = styled.div`
  font-size: 60px;
  line-height: 1.5em;
  padding-top: 5%;
  text-align: center;
  ${mediaQueries.mobile} {
      font-size: 6vw;
      margin: auto 2%;
  }
`


export default function Explainer(props) {
    return (
      <Container>
        <Phrase>{props.explainer}</Phrase>
      </Container>
    );
}