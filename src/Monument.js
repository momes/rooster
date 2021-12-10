import './Home.css';
import React, { useEffect, useState } from 'react';
import './Monument.css';
import {Container, Row, Col} from 'react-bootstrap';

const ICON_ROTATION = [1,2,3,6,9,8,7,4];
function Monument() {
  const [counter, setCounter] = useState(0)

  useEffect(function showLoadingScreen() {
    setTimeout(function() {
      setCounter((currCount) => currCount + 1);
    }, 100)
  }, [counter, setCounter])

  const square = (num) => {
    return (
      <div className="square">
        <div className="content">
          <div className="table">
              <div className="table-cell">
                <img 
                  className="rs" 
                  alt=""
                  src={`${process.env.PUBLIC_URL}/ccc-assets/Icons/${num}.png`}
                  style={{
                    filter: `invert(33%) sepia(18%) saturate(4468%) hue-rotate(94deg) brightness(100%) contrast(76%) opacity(80%)`,
                    visibility: (ICON_ROTATION[counter % 8] === num || num === 5 ? "visible" : "hidden")
                    }}/>
              </div>
          </div>
      </div>
  </div>
    )
  }
return (
  <Container style={{height: "100vh"}}>
    <Row style={{height:"100vh", paddingTop:"20vh"}}>
  <div style={{height:"380px", width: "380px", margin: "0px auto"}}>
    {square(1)}
    {square(2)}
    {square(3)}
    {square(4)}
    {square(5)}
    {square(6)}
    {square(7)}
    {square(8)}
    {square(9)}
</div> </Row>
</Container>
)
}
export default Monument;
