import './Home.css';
import React, { useEffect, useState } from 'react';
import './RoosterHome.css';
import {Row, Col, Container} from 'react-bootstrap';
const BANNER_IMAGES = ["nick-dorian.png","follow.jpeg","rooster.png","quint.jpeg","out-now.png","television.jpeg","petsonally-yours.png","follow.jpeg","comeon.png","quint.jpeg","rooster.png"]


function RoosterHome() {
  const [counter, setCounter] = useState(0)

  useEffect(function setTimerCount() {
    setTimeout(function() {
      setCounter((currCount) => currCount + 1);
    }, 1000)
  }, [counter, setCounter])
  
return (
  <Container style={{
    margin: "2vw auto",
    maxHeight: "80vw",
    maxWidth: "80vw",
          verticalAlign: "middle", 
          textAlign: "center"}}>
      <Row>
        <Col></Col>
        <Col style={{
          verticalAlign: "middle",
          alignItems: "center",
          textAlign: "center"}}>
        <div style={{
          display: "table-cell", 
          maxHeight: "80vw",
          width: "60vw", 
          margin: "0 auto",
          verticalAlign: "middle",
          alignItems: "center",
          textAlign: "center"}}>
  <img 
  src={`${process.env.PUBLIC_URL}/ccc-assets/banner/${BANNER_IMAGES[counter % 10]}`}
  alt=""
  style={{
    margin: "0 auto",
    maxHeight: "60vh",
    maxWidth: "60vw"
  }}/></div></Col>
  <Col></Col></Row></Container>
  )
}

export default RoosterHome;
