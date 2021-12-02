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
    marginTop: "2vw",
    maxHeight: "60vh",
    maxWidth: "60vw",
          verticalAlign: "middle", 
          textAlign: "center"}}>
      <Row>
        <Col></Col>
        <Col>
        <div style={{
          display: "table-cell", 
          height: "60vh",
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

/*<img 
src={`${process.env.PUBLIC_URL}/ccc-assets/1.jpg`}
style={{
  margin: "0 auto",
  width: "100%"
}}/>
</Col>
        </Row>
  </div>*/