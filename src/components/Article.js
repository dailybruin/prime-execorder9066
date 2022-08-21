import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  margin: 8% auto;
  height: fit-content;
  text-align: left;
  font-weight: 200;
  font-size: 20px;
  line-height: 24px;
  width: 85%;
  position: relative;

  h2 {
    font-size: 64px;
    line-height: 1.5em;
    margin: 0;
  }
`;

const ArticleInfo = styled.div`
  font-size: 24px;
  line-height: 1.5em;
`

const PullQuote = styled.aside`
  float: left;
  width: 50%;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  padding: 20px;

  p {
    margin: 0;
    font-weight: 700;
    font-family: 'Barlow', sans-serif;
  }
`;

const Figure = styled.div`
  margin: 5% -50vw 5% -50vw;
  left: 50%;
  width: 100vw;
  position: relative;
  
  img {
    width: 100vw;
  }
`;

const Info = styled.div`
  font-style: italic;
  font-size: 16px;
  margin-left: 1%;
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`;


export default function Article(props) {
    return (
      <Container>
          {props.main.map((info) => {
              if (info.type == "header")
              {
                return (
                  <div style={{"margin-bottom": "3%"}}>
                    <h2> {info.value.article_title} </h2>
                    <ArticleInfo> {info.value.article_byline} </ArticleInfo>
                    <ArticleInfo> {info.value.article_date} </ArticleInfo>
                  </div>
                )
              } else if (info.type == "text") {
                return <p>{info.value}</p>;
              } else if (info.type == "pull") {
                  if (info.value.float == "left")
                    return (
                    <PullQuote style={{ "float": "left", "margin-left": "-5vw" }}>
                      <p> {info.value.caption} </p>
                    </PullQuote>
                    )
                  else if (info.value.float == "right")
                    return (
                      <PullQuote style={{ "float": "right", "margin-right": "-5vw" }}>
                        <p> {info.value.caption} </p>
                      </PullQuote>
                    )
              }
              else if (info.type == "image") {
                return (
                  <Figure>
                    <img src = {info.value.url}/>
                    <Info>{info.value.caption}</Info>
                  </Figure>
                )
              }
              else if (info.type == "divider") {
                return (
                  <hr style={{"margin": "40px auto", "width": "100%"}}/>
                )
              }
          })}
      </Container>
    );
}