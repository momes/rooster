import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function NavigationMerch(active) {
return (
    <Navbar style={{
      padding: "0 2vw"
    }}>
      <Nav>
        <div>
        <Nav.Link>
          <Link to="/" 
          style={{
      backgroundColor: "orange"
    }}>
          <img 
  src={`${process.env.PUBLIC_URL}/ccc-assets/nav/back-to-left.png`}
  alt=""
  style={{
    margin: "0 auto",
    width: "40vw"
  }}/>
          </Link>
        </Nav.Link>
        </div>
        <div>
        <Nav.Link>
          <Link to="/projects" style={{
      backgroundColor: "orange"
    }}>
          <img 
  src={`${process.env.PUBLIC_URL}/ccc-assets/nav/projects.png`}
  alt=""
  style={{
    margin: "0 auto",
    width: "20vw",
  }}/>
          </Link>
        </Nav.Link>
        </div>
        </Nav>
      </Navbar>
)
}

export default NavigationMerch;