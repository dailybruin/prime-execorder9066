import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  margin: 12% auto 10% auto;
  width: 80%;
  height: fit-content;
`;


const Content = styled.div`
    font-weight: 200;
    font-size: 20px;
    line-height: 24px;
    margin: auto;
    text-align: left;
`;


export default function Article(props) {
    return (
      <Container>
        <Content style={{ margin: "auto" }}>
            {props.main.map((info) => {
                if (info.type == "text") {
                  return <p>{info.value}</p>;
                } else if (info.type == "pull") {
                  return <q>{info.content}</q>;
                }
            })}
        </Content>
      </Container>
    );
}