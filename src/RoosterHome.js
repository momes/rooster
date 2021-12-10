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
    maxHeight: "80vh",
    maxWidth: "80vw",
          verticalAlign: "middle", 
          textAlign: "center"}}>
      <Row style={{
          verticalAlign: "middle",
          alignItems: "center",
          textAlign: "center",
          maxHeight: "95vh",
          verticalAlign: "middle",
          alignItems: "center",
          textAlign: "center"}}>
            <span style={{display:"inline-block", height: "100%", verticalAlign:"middle"}}></span>
  <img 
  src={`${process.env.PUBLIC_URL}/ccc-assets/banner/${BANNER_IMAGES[counter % 10]}`}
  alt=""
  style={{
    marginLeft: "50%",
    transform: "translateX(-50%)",
    maxHeight: "60vh",
    maxWidth: "60vw",
    verticalAlign: "middle",
          alignItems: "center",
          textAlign: "center"
  }}/></Row></Container>
  )
}

export default RoosterHome;
