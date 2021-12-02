import './App.css';
import React, { useState, useEffect } from 'react';
import NavigationMerch from './NavigationMerch.js';
import { Container, Row, Col } from 'react-bootstrap';
import RandomizerRedo from './RandomizerRedo.js';
import './Store.css'
const THEMES = [
  {light: '#ff6e32', dark: '#1e832c'},
  {light: '#FFA737', dark: '#343330'},
  {light: '#BFDBF7', dark: '#A31621'},
  {light: '#FAF0CA', dark: '#0D3B66'}
]

function Store() {
  return (
    <div 
    className="background"
    style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/ccc-assets/store-background.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      padding: "2% 0% 2% 0%",
      backgroundAttachment: "fixed",
      height: "140vh",
      alignContent: "center",
      margin: "0 0",
      overflowX: "hidden"
      }}>
      <NavigationMerch />
      <RandomizerRedo theme={'#1e832c'} />
      <Container>
        <Row>
          <h2 style={{backgroundColor: "rgb(28, 28, 28)", padding:"1%"}}>Please send your order request with your name & address to <span><a href="mailto:management@nickdorian.com?subject = Nick Dorian Merch Order = Message">
           management@nickdorian.com</a></span>. Thanks for your support!</h2>
        </Row>
        <Row style={{height: "60vh", marginBottom: "10vh", marginTop:"2vw"}}>
          <Row><h3>Rooster Cream T-Shirt (S/M/L/XL) $25</h3></Row>
          <Row>
          <Col>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/merch/whiteshirt-front.png`}
        style={{
          width: "100%"
        }}/>
        </Col>
        <Col>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/merch/whiteshirt-back.png`}
        style={{
          width: "100%"
        }}/>
        </Col></Row>
         </Row>

         <Row style={{height: "60vh", marginBottom: "10vh", marginTop:"2vw"}}>
          <Row><h3>Rooster Pink Long Sleeve Shirt (S/M/L/XL) $35</h3></Row>
          <Row>
          <Col>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/merch/pinkshirt.png`}
        style={{
          width: "100%"
        }}/>
        </Col>
        <Col>
        </Col></Row>
        <Row style={{height: "60vh", marginBottom: "10vh", marginTop:"2vw"}}>
          <Row><h3>Planet Stardom Black Long Sleeve Shirt (S/M/L/XL) $20</h3></Row>
          <Row>
          <Col>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/merch/blackshirt.png`}
        style={{
          width: "100%",
          height: "87%"
        }}/>
        </Col>
        <Col>
        </Col></Row>
         </Row>
         <Row style={{height: "60vh", marginBottom: "30vh", marginTop:"2vw"}}>
          <Row><h3>Planet Stardom Canvas Tote $15</h3></Row>
          <Row>
          <Col>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/merch/tote.png`}
        style={{
          width: "90%"
        }}/>
        </Col>
        <Col>
        </Col></Row>
         </Row>
         </Row>
      </Container>
    </div>
  );
}

export default Store;
