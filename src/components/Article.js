import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  margin: 12% auto 10% auto;
  width: 80%;
  height: fit-content;
  text-align: left;
`;


const Content = styled.div`
    font-weight: 200;
    font-size: 20px;
    line-height: 24px;
    margin: auto;
`;


const Title = styled.h2`
    font-size: 64px;
`;

const Byline = styled.div`
    font-size: 24px;
    line-height: 60px;
`;

const Date = styled.div`
    font-size: 24px;
    line-height: 60px;
    margin-bottom: 30px;
`;


export default function Article(props) {
    return (
      <Container>
        <Content style={{ margin: "auto" }}>
            {props.main.map((info) => {
                if (info.type == "header")
                {
                  return (
                    <div>
                      <Title> {info.value.article_title} </Title>
                      <Byline> {info.value.article_byline} </Byline>
                      <Date> {info.value.article_date} </Date>
                    </div>
                  )
                } else if (info.type == "text") {
                  return <p>{info.value}</p>;
                } else if (info.type == "pull") {
                  return <q>{info.content}</q>;
                }
            })}
        </Content>
      </Container>
    );
}