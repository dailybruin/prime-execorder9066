import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

const Illo = styled.img`
  width: 100vw;
  height: auto;
`;

// const Credits = styled.div`
//   font-family: "Courier Prime", monospace;
//   font-size: 14px;
//   font-weight: 700;
//   color: #7e7b67;
//   position: absolute;
//   bottom: 0;
//   right: 10px;
//   padding-bottom: 15px;
// `;

export default function Landing(props) {
  return (
    <Container>
      <Illo src={props.landing_image}></Illo>
    </Container>
  );
}