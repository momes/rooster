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
      backgroundRepeat: "repeat",
      backgroundSize: "100%",
      padding: "2% 0% 2% 0%",
      backgroundAttachment: "fixed",
      width: "100vw",
      alignContent: "center",
      margin: "0 0",
      overflowX: "hidden"
      }}>
      <NavigationMerch />
      <RandomizerRedo theme={'#1e832c'} />
      <Container>
        <Row>
          <Col >
          <h2 style={{backgroundColor: "rgb(28, 28, 28)", padding:"1%", overflowWrap:"break-word"}}>
            Please send your order request with your name & address to <span style={{maxWidth:"70vw"}}><a style={{maxWidth:"70vw"}} href="mailto:management@nickdorian.com?subject = Nick Dorian Merch Order = Message">
           management@nickdorian.com</a></span>. Thanks for your support!</h2>
        </Col></Row>
        <Row style={{minHeight: "40vh", marginBottom: "10vh", marginTop:"10vw"}}>
          <Row style={{maxHeight:"15vh",padding:"0vw 2vw 2vw 2vw"}}>
            <Col><h3 style={{color:"#1d842c", backgroundColor:"#e3d4b6"}}>Rooster Cream T-Shirt Merch Pack (S/M/L/XL) $30</h3>
          </Col></Row><Row style={{padding:"2vw"}}>
          <Col>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/merch/rooster-merch.png`}
        style={{
          maxWidth: "95%",
          maxHeight:"95%"
        }}/>
        </Col>
        <Col>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/merch/rooster-merch-pack.png`}
        style={{
          maxWidth: "95%",
          maxHeight:"95%"
        }}/>
        </Col></Row>
         </Row>
        <Row style={{minHeight: "40vh", marginBottom: "10vh", marginTop:"10vw"}}>
          <Row style={{padding:"2vw"}}><Col><h3 style={{color:"#f2f2f1", backgroundColor:"#46423d"}}>Planet Stardom Black Long Sleeve Shirt (S/M/L/XL) $20</h3></Col></Row>
          <Row style={{padding:"5vw"}}>
          <Col>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/merch/blackshirt.png`}
        style={{
          maxWidth: "95%",
          maxHeight:"95%"
        }}/>
        </Col>
        <Col>
        </Col></Row>
         </Row>
         <Row style={{minHeight: "40vh", marginBottom: "30vh", marginTop:"2vw"}}>
          <Row style={{padding:"2vw"}}><Col><h3 style={{color:"#161c23", backgroundColor:"#d9dfd1"}}>Planet Stardom Canvas Tote $15</h3></Col></Row>
          <Row style={{padding:"5vw"}}>
          <Col>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/merch/tote.png`}
        style={{      
          maxWidth: "95%",
          maxHeight:"95%"
        }}/>
        </Col>
        <Col>
        </Col></Row>
         </Row>
      </Container>
    </div>
  );
}

export default Store;
