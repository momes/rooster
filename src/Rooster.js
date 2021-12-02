import './App.css';
import React from 'react';
import Navigation from './Navigation.js';
import Home from './Home.js'
import {Container, Row, Col} from 'react-bootstrap';

function Rooster() {
  return (
    <div 
      className="Rooster-container"
      style={{
        backgroundImage: `url("https://country-chain-chapel.s3.amazonaws.com/rooster.png")`,
        backgroundRepeat: "repeat",
        backgroundSize: "60%",
        padding: "2% 2% 2% 2%",
        bacgkroundPosition: "fixed"
        }}>
      <Navigation />
      <Container>
        <Home />
      </Container>
      <div
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255, 255, 255, 0.8))",
        width:"100%"
      }}>
        <img className="image-one"
      src={'https://country-chain-chapel.s3.amazonaws.com/33112919828_1b9a05b1b6_o.jpg'}
      width="100%"
      />
      <img className="image-one"
      src={'https://country-chain-chapel.s3.amazonaws.com/33112919828_1b9a05b1b6_o.jpg'}
      width="100%"
      />
      </div>
      
    </div>
  );
}

export default Rooster;
