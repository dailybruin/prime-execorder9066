import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  margin: 8% auto 10% auto;
  width: 85%;
  height: fit-content;
  text-align: left;
`;


const Content = styled.div`
  font-weight: 200;
  font-size: 20px;
  line-height: 24px;
  margin: auto;
`;


const PullQuote = styled.aside`
  float: left;
  width: 50%;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  padding: 20px;

  q {
    margin: 0;
    /* color: red; */
  }
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
                      <h2 style={{ "font-size": "64px" }}> {info.value.article_title} </h2>
                      <div style={{"font-size": "24px", "line-height": "60px"}}> {info.value.article_byline} </div>
                      <div style={{"font-size": "24px", "line-height": "60px", "margin-bottom": "30px"}}> 
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
                        <q> {info.value.caption} </q>
                      </PullQuote>
                      )
                    else if (info.value.float == "right")
                      return (
                        <PullQuote style={{ "float": "right" }}>
                          <q> {info.value.caption} </q>
                        </PullQuote>
                      )
                }
                else if (info.type == "image") {
                  return (
                    <img src = {info.value.url} style={{ "width": "100vw" }}/>
                  )
                }
            })}
        </Content>
      </Container>
    );
}