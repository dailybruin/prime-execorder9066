import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

const Illo = styled.img`
  width: 100vw;
  height: auto;
  margin-bottom: 1rem;
`;

const Credits = styled.div`
  font-style: italic;
  font-size: 16px;
  margin-left: 1%;
  text-align: left;
`;

export default function Landing(props) {
  return (
    <Container>
      <Illo src={props.image}></Illo>
      <Credits>{props.credits}</Credits>
    </Container>
  );
}