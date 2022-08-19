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
`;

const PullQuote = styled.aside`
  float: left;
  width: 50%;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  padding: 20px;

  p {
    margin: 0;
  }
`;

const Figure = styled.div`
  margin: 2% -50vw 2% -50vw;
  left: 50%;
  width: 100vw;
  position: relative;
  
  img {
    width: 100%;
  }
`;

const Info = styled.div`
  font-style: italic;
  font-size: 16px;
  margin-left: 1%;
`;


export default function Article(props) {
    return (
      <Container>
          {props.main.map((info) => {
              if (info.type == "header")
              {
                return (
                  <div>
                    <h2 style={{ "font-size": "64px" }}> {info.value.article_title} </h2>
                    <div style={{"font-size": "24px", "line-height": "3rem"}}> {info.value.article_byline} </div>
                    <div style={{"font-size": "24px", "line-height": "3rem", "margin-bottom": "30px"}}> 
                      {info.value.article_date} 
                    </div>
                  </div>
                )
              } else if (info.type == "text") {
                return <p>{info.value}</p>;
              } else if (info.type == "pull") {
                  if (info.value.float == "left")
                    return (
                    <PullQuote style={{ "float": "left"}}>
                      <p> {info.value.caption} </p>
                    </PullQuote>
                    )
                  else if (info.value.float == "right")
                    return (
                      <PullQuote style={{ "float": "right" }}>
                        <p> {info.value.caption} </p>
                      </PullQuote>
                    )
              }
              else if (info.type == "image") {
                return (
                  <Figure>
                    <img src = {info.value.url}/>
                    <Info>{info.value.credit}</Info>
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