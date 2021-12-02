import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(active) {
return (
    <Navbar style={{
      padding: "0 2vw"
    }}>
      <Nav>
        <div>
        <Nav.Link>
          <Link to="/projects" 
          style={{
      backgroundColor: "orange"
    }}>
          <img 
  src={`${process.env.PUBLIC_URL}/ccc-assets/nav/projects.png`}
  alt=""
  style={{
    margin: "0 auto",
    width: "20vw"
  }}/>
          </Link>
        </Nav.Link>
        </div>
        <div>
        <Nav.Link>
          <Link to="/store" style={{
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
        </Nav>
      </Navbar>
)
}

export default Navigation;