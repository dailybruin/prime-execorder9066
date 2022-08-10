import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import FocusQuote from "./components/FocusQuote";
import ImageQuote from "./components/ImageQuote"

import LandingPic from './images/japan_declares_war.jpg';
import NewspaperPic from './images/edict.svg';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/prime/execorder9066"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    <div className="App">
      <Header/>
        {/* {data && <Landing landing_image={LandingPic}/> } */}
        <Landing landing_image={LandingPic}/>
        <FocusQuote quote=
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ImageQuote left_image={NewspaperPic} quote = "this is quote 2 this is quote 2 this is quote 2 this is quote 2" />
      <Footer/>
    </div>
  );
}

export default App;
