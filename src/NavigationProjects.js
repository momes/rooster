import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar style={{
      padding: "2vw 2vw"
    }}>
      <Nav>
        <div>
        <Nav.Link>
          <Link to="/store" 
          style={{
      backgroundColor: "orange"
    }}>
          <img 
  src={`${process.env.PUBLIC_URL}/ccc-assets/nav/merch.png`}
  alt=""
  style={{
    margin: "0 auto",
    width: "15vw",
  }}/>
          </Link>
        </Nav.Link>
        </div>
        <div>
        <Nav.Link>
          <Link to="/" style={{
      backgroundColor: "orange"
    }}>
          <img 
  src={`${process.env.PUBLIC_URL}/ccc-assets/nav/back-to-right.png`}
  alt=""
  style={{
    margin: "0 auto",
    width: "45vw",
  }}/>
          </Link>
        </Nav.Link>
        </div>
        </Nav>
      </Navbar>
)
}

export default Navigation;