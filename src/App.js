import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import FocusQuote from "./components/FocusQuote";
import ImageQuote from "./components/ImageQuote";
import FocusWord from "./components/FocusWord";
import Article from "./components/Article";

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/prime/execorder9066"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  console.log("DATA")
  data && console.log(data)

  return data && (
    <div className="App">
      <Header/>
        {data && <Landing image={data.landing_image} credits={data.landing_credits}/>} 
        {data && <FocusQuote quote={data.quote_1}/>}
        {data && <ImageQuote left_image={data.image_with_quote} quote={data.quote_2} />}
        {data && <FocusWord word={data.word} phrase={data.phrase} /> }
        {data && <Article main={data.content} />}
      <Footer/>
    </div>
  );
}

export default App;
