import './App.css';
import React from 'react';
import NavigationProjects from './NavigationProjects.js';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';


function Projects() {
  return (
    <div className="Projects-Container" 
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + "/ccc-assets/project-background.png"}`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: "150vh"
      }}>
      <NavigationProjects />
    
    <Container 
      style={{padding: "5vw"}}>
        <div style={{
          textAlign: "left",
          paddingLeft: "10%",
        }}>
          <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/albums.png`}
      style={{width: "30%"}}/>
        </div>
      
      <Row style={{marginBottom: "5vw", marginTop:"2vw"}}>
      <Col xs={12} sm={4}><a href='https://ffm.to/roosternd'>
        <div>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/rooster.jpg`}
      style={{maxWidth: "90%",
      maxHeight: "90%"}}/>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/rooster-font.png`}
      style={{width: "90%", marginBottom:"5vw"}}/>
      </div></a>
      </Col>
      <Col xs={12} sm={4}>

      <a href='https://ffm.to/j45vpyl'><div>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/planet-stardom.jpg`}
      style={{maxWidth: "90%",
      maxHeight: "90%"}}/>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/planet-stardom-font.png`}
      style={{width: "90%", marginBottom:"5vw"}}/>
      
      </div></a></Col>
      <Col xs={12} sm={4}>

      <a href='https://ffm.to/rx8paj5'><div>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/hamburg-style.jpg`}
      style={{maxWidth: "90%",
      maxHeight: "90%"}}/>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/hamburg-style-font.png`}
      style={{width: "90%", marginBottom:"5vw"}}/>
      </div>
      </a></Col>
    </Row>
    <div style={{
          textAlign: "left",
          paddingLeft: "10%"
        }}>
          <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/EPs.png`}
      style={{width: "15%"}}/>
        </div>
      <Row style={{marginBottom: "5vw", marginTop:"2vw"}}>
      <Col xs={12} sm={4}><a href='https://ffm.to/rrpeqqk'>
        <div>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/demos-for-daphne.jpg`}
      style={{maxWidth: "90%",
      maxHeight: "90%"}}/>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/demos-for-daphne-font.png`}
      style={{width: "90%", marginBottom:"5vw"}}/>
      </div></a>
      </Col>
      <Col xs={12} sm={4}><a href='https://ffm.to/aarqxk'>
        <div>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/my-friend-dorian.jpg`}
      style={{maxWidth: "90%",
      maxHeight: "90%"}}/>
      <img src={`${process.env.PUBLIC_URL}/ccc-assets/projects/my-friend-dorian-font.png`}
      style={{width: "90%", marginBottom:"5vw"}}/>
      </div></a>
      </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Projects;
