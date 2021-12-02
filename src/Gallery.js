import './Gallery.css';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import GalleryYears from './GalleryYears.js';

const THEME_TO_FILTER = {
  '#1e832c': "invert(33%) sepia(18%) saturate(4468%) hue-rotate(94deg) brightness(100%) contrast(76%) opacity(80%)",
  '#343330': "invert(17%) sepia(12%) saturate(202%) hue-rotate(7deg) brightness(99%) contrast(93%)",
  '#A31621': "invert(16%) sepia(50%) saturate(6464%) hue-rotate(346deg) brightness(72%) contrast(94%)",
  '#0D3B66': "invert(19%) sepia(17%) saturate(4829%) hue-rotate(182deg) brightness(92%) contrast(95%)"
}
function Gallery(props) {

  return (
    <Container 
      className="Gallery" 
      style={{
        alignItems: "center",
        margin: "0 0 !important",
        maxWidth: "100vw",
        padding: "0% 0%",
        overflowX: "hidden",
        }}>
        <Row>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/2.jpg`}
        style={{
          margin: "0 auto",
          width: "90vw",
          padding: "2%"
        }}/>
        </Row>
        <Row
         style={{
          margin: "0 0",
          height: "65vw",
          padding: "2%"
        }}>
      <GalleryYears />
      </Row>
      <Row>
        
      </Row>
      <Row style={{
          height: "10vw",
          padding: "2% 0%",
          margin: "0px 0px",
          position:"relative"
        }}>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/5.jpg`}
        style={{
          margin: "0 auto",
          width: "20vw",
          position: "absolute",
          left: "7vw",
          top: "4vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/5.jpg`}
        style={{
          margin: "0 auto",
          width: "33vw",
          padding: "2%",
          position: "absolute",
          left: "30vw",
          top: "-2vw"
        }}/>
        </Row>
      <Row style={{
          padding: "2% 0%",
          margin: "0px 0px",
          width: "100vw",
          height:"30vw",
          backgroundColor:props.theme.light,
          color: props.theme.dark
        }}>
          <Col xs={4} style={{position:"relative"}}>
          </Col>
          <Col xs={8} style={{
            textAlign: "right",
            paddingRight: "5%"
          }}> 
          <p 
            style={{
              fontFamily: "'Lemonada', cursive", 
              fontSize: "3.8vw",
              position:"absolute",
              left: "30vw"
              }}>
                How are you?</p>
          <p style={{fontFamily: "'Playball', cursive", fontSize: "4vw",
              position:"absolute",
              left: "50vw",
              top: "10vw"}}>She said.</p> 
          <p style={{fontFamily: "'Lemonada', cursive", fontSize: "6vw",
        position:"absolute",
        left: "2vw",
        top: "18vw"}}> I'm getting older.</p>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/Icons/1.png`}
        style={{
          margin: "0 auto",
          width: "25vw",
          padding: "2%",
          position: "absolute",
          left: "-25vw",
          top: "5vw",
          filter: `${THEME_TO_FILTER[props.theme.dark]}`
        }}/>
          </Col>
      </Row>
      <Row style={{
          height: "140vw",
          padding: "2% 0%",
          margin: "0px 0px",
          position: "relative"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/7.jpg`}
        style={{
          margin: "0 auto",
          width: "25vw",
          position: "absolute",
          left: "73vw",
          top: "25vw",
          zIndex: "2"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/7.jpg`}
        style={{
          margin: "0 auto",
          width: "20vw",
          position: "absolute",
          left: "5vw",
          top: "100vw",
          zIndex: "4"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/8.jpg`}
        style={{
          margin: "0 auto",
          width: "75vw",
          padding: "0%",
          position: "absolute",
          left: "5vw",
          top: "5vw",
          zIndex: "1"
        }}/>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/9.jpg`}
        style={{
          margin: "0 auto",
          width: "80vw",
          padding: "0%",
          position: "absolute",
          left: "17vw",
          top: "75vw",
          zIndex: "3"
        }}/>
        </Row>
        <Row style={{
          height: "65vw",
          padding: "2% 0%",
          margin: "0px 0px",
          position: "relative"
        }}>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/6.jpg`}
        style={{
          margin: "0 auto",
          width: "90vw",
          padding: "0% 2%"
        }}/>
        </Row>
        <Row style={{
          padding: "2% 0%",
          margin: "0px 0px",
          width: "100vw",
          height:"30vw",
          backgroundColor:props.theme.light,
          color: props.theme.dark
        }}>
          <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          width: "90vw",
          position:"relative"
        }}> <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/Icons/2.png`}
        style={{
          margin: "0 auto",
          width: "20vw",
          padding: "2%",
          position: "absolute",
          left: "-5vw",
          top: "-3vw",
          zIndex:"5",
          filter: `${THEME_TO_FILTER[props.theme.dark]}`
        }}/>
          <p style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "3.8vw",
            position:"absolute",
            left: "10vw",
            top: "4vw"
          }}><span style={{
            fontFamily: "'Averia Serif Libre', cursive", 
          }}>I should have  </span> called my mom back . . .</p>
          </Row>
          <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          width: "90vw"
        }}>
          <Col xs={8} style={{
            textAlign: "right",
            paddingRight: "5%",
            position: "relative"
          }}>
            <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/11.jpg`}
        style={{
          margin: "0 auto",
          width: "60vw",
          padding: "0% 2%",
          position: "absolute",
          left: "0"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/12.jpg`}
        style={{
          margin: "0 auto",
          width: "40vw",
          padding: "0% 2%",
          position: "absolute",
          left: "50vw",
          top: "10vw"
        }}/>
          </Col>
          <Col xs={4} style={{
            textAlign: "left"}}>
              <p style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "2vw",
            position:"absolute"}}>I miss the back of the car.</p>
          </Col>
          </Row>
      </Row>
      <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "55vw"
        }}></Row>
      <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "80vw",
          position: "relative"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/13.jpg`}
        style={{
          margin: "0 auto",
          width: "60vw",
          padding: "0% 2%",
          position: "absolute",
          left: "40vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/14.jpg`}
        style={{
          margin: "0 auto",
          width: "55vw",
          padding: "0% 2%",
          position: "absolute",
          top: "40vw",
          left: "8vw",
          zIndex: "5"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/15.jpg`}
        style={{
          margin: "0 auto",
          width: "45vw",
          padding: "0% 2%",
          position: "absolute",
          left: "5vw",
          top:"5vw",
          zIndex: "5"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/17.jpg`}
        style={{
          margin: "0 auto",
          width: "50vw",
          padding: "0% 2%",
          position: "absolute",
          left: "50vw",
          top:"60vw",
          zIndex: "1"
        }}/>
        </Row>

        <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "60vw",
          position: "relative"
        }}>
          <div style={{
          padding: "2% 0%",
          margin: "0px 0px",
          width: "50vw",
          height:"45vw",
          backgroundColor:props.theme.light,
          color: props.theme.dark
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/Icons/3.png`}
        style={{
          margin: "0 auto",
          width: "22vw",
          padding: "2%",
          position: "absolute",
          left: "30vw",
          top: "-3vw",
          zIndex:"5",
          filter: `${THEME_TO_FILTER[props.theme.dark]}`
        }}/>
          <p style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "5vw",
            position:"absolute",
            left: "3vw",
            top: "8vw"
          }}>Lately I lack</p>
          <p style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "5vw",
            position:"absolute",
            left: "3vw",
            top:"15vw"
          }}>Lately I lack tooth</p>
          <p style={{
            fontFamily: "'Playball', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "5vw",
            top:"28vw"
          }}>You can skip</p>
          <p style={{
            fontFamily: "'Playball', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "30vw",
            top:"30vw"
          }}>the sidebar</p>
          <p style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "4vw",
            position:"absolute",
            top: "38vw",
            left: "20vw"
          }}>with me</p>
        </div>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/16.jpg`}
        style={{
          margin: "0 auto",
          width: "90vw",
          height: "50vw",
          padding: "0% 2%",
          position: "absolute",
          left: "5vw",
          top: "50vw"
        }}/>
        </Row>
        <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "20vw",
          position: "relative"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/19.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "-20vw",
          top: "45vw"
        }}/>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/19.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "5vw",
          top: "45vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/19.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "30vw",
          top: "45vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/19.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "55vw",
          top: "45vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/19.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "80vw",
          top: "45vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/19.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "5vw",
          top: "45vw"
        }}/>
          </Row>
        <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "130vw",
          position: "relative"
        }}>
           <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/18.jpg`}
        style={{
          margin: "0 auto",
          width: "80vw",
          padding: "0% 2%",
          position: "absolute",
          left: "15vw",
          top: "50vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/20.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "0vw",
          top: "60vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/21.jpg`}
        style={{
          margin: "0 auto",
          width: "50vw",
          padding: "0% 2%",
          position: "absolute",
          left: "50vw",
          top: "100vw"
        }}/>
         <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/21.jpg`}
        style={{
          margin: "0 auto",
          width: "40vw",
          padding: "0% 2%",
          position: "absolute",
          left: "10vw",
          top: "100vw"
        }}/>
        </Row>
        <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "75vw",
          position: "relative"
        }}>
          <div style={{
          padding: "2% 0%",
          margin: "0px 0px",
          width: "50vw",
          height:"10vw",
          left: "0vw",
          position: "absolute",
          zIndex: "5",
          backgroundColor:props.theme.light,
          color: props.theme.dark,
          }}>
            <p style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "3vw",
            top:"0vw"
          }}>Maybe I'll hit the <span style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "36vw",
            top:"2vw"
          }}>road</span></p>
          </div>
          <div style={{
          padding: "2% 0%",
          margin: "0px 0px",
          width: "50vw",
          height:"12vw",
          left: "55vw",
          top: "5vw",
          position: "absolute",
          zIndex: "5",
          backgroundColor:props.theme.light,
          color: props.theme.dark
          }}><img 
          src={`${process.env.PUBLIC_URL}/ccc-assets/Icons/8.png`}
          style={{
            margin: "0 auto",
            width: "18vw",
            padding: "2%",
            position: "absolute",
            left: "27vw",
            top: "-2vw",
            zIndex:"5",
            filter: `${THEME_TO_FILTER[props.theme.dark]}`
          }}/>
            <p style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "3vw",
            top:"2vw"
          }}>or maybe</p>
          </div>
          <div style={{
          padding: "2% 0%",
          margin: "0px 0px",
          width: "65vw",
          height:"12vw",
          position: "absolute",
          left: "60vw",
          top: "28vw",
          backgroundColor:props.theme.light,
          color: props.theme.dark,
          transform: "rotate(90deg)"
          }}>
            <p style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "22vw",
            top:"5vw"
          }}>I will sidewalk it.</p>
          </div>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/22.jpg`}
        style={{
          margin: "0 auto",
          width: "80vw",
          padding: "0% 2%",
          position: "absolute",
          left: "5vw",
          top: "10vw",
          zIndex: "2"
        }}/>
        </Row>
        <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "20vw",
          position: "relative"
        }}>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/24.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          height:"20vw",
          padding: "0% 2%",
          zIndex: "2"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/24.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          height:"20vw",
          padding: "0% 2%",
          zIndex: "2"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/24.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          height:"20vw",
          padding: "0% 2%",
          zIndex: "2"
        }}/>
        </Row>
        <Row 
        style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "52vw",
          position: "relative"
        }}>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/23.jpg`}
        style={{
          margin: "0 auto",
          width: "80vw",
          padding: "0% 2%", 
          position: "absolute",
          left: "10vw",
          top: "-2vw",
          zIndex: "1"
        }}/>
        </Row>
        <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "30vw",
          position: "relative",
          zIndex: "3"
        }}>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/25.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          height:"20vw",
          padding: "0% 2%"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/25.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          height:"20vw",
          padding: "0% 2%"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/25.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          height:"20vw",
          padding: "0% 2%"
        }}/>
        </Row>
        <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "55vw",
          position: "relative"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/28.jpg`}
        style={{
          margin: "0 auto",
          width: "60vw",
          padding: "0% 2%",
          position: "absolute",
          top: "-2vw",
          left: "2vw"
        }}/>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/26.jpg`}
        style={{
          margin: "0 auto",
          width: "40vw",
          padding: "0% 2%",
          position: "absolute",
          top: "18vw",
          left: "60vw"
        }}/>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/29.jpg`}
        style={{
          margin: "0 auto",
          width: "40vw",
          padding: "0% 2%",
          position: "absolute",
          top: "-7vw",
          left: "60vw"
        }}/>
        </Row>
        <Row style={{
          padding: "2% 5%",
          margin: "0px 0px",
          width: "100vw",
          height:"30vw",
          backgroundColor:props.theme.light,
          color: props.theme.dark,
          position:"relative"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/Icons/9.png`}
        style={{
          margin: "0 auto",
          width: "11vw",
          padding: "2%",
          position: "absolute",
          left: "17vw",
          top: "-1vw",
          zIndex:"5",
          filter: `${THEME_TO_FILTER[props.theme.dark]}`
        }}/>
          <p><span style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "3vw",
            top:"5vw"
          }}>Another</span> 
          <span style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "18vw",
            top:"7vw"
          }}>weight</span>
          <span style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "32vw",
            top:"5vw"
          }}>in         your shoe //</span></p>
          <p style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "8vw",
            top:"16vw"
          }}>Another</p>
          <p style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "17vw",
            top:"20vw"
          }}>string 'round</p>
          <p style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "41vw",
            top:"21vw"
          }}>your shoe</p>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/30.jpg`}
        style={{
          margin: "0 auto",
          width: "40vw",
          padding: "0% 2%",
          position: "absolute",
          left: "58vw",
          top: "-5vw",
          zIndex: "2"
        }}/>
        </Row>
        <Row style={{
          padding: "2% 0%",
          margin: "0px auto",
          height: "80vw",
          position: "relative"
        }}>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/27.jpg`}
        style={{
          margin: "0 auto",
          width: "90vw",
          padding: "0% 2%",
          position: "absolute",
          top: "3vw",
          left: "5vw",
          zIndex: "1"
        }}/>
        </Row>
        <Row style={{
          margin: "2vw 0px 2vw 0px",
          width: "100vw",
          height:"60vw",
          position:"relative"
        }}>
          <Row style={{
          padding: "2% 5%",
          margin: "2vw 0px 2vw 0px",
          width: "80vw",
          height:"10vw",
          backgroundColor:props.theme.light,
          color: props.theme.dark,
          position:"absolute",
          top: "-10vw"
        }}>
          <p>
            <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "-2vw",
            top:"2vw"
          }}>Television</span> 
          <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "24vw",
            top:"2vw"
          }}>sells</span>
          <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "33vw",
            top:"5vw"
          }}>tunnel</span>
          <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "41vw",
            top:"21vw"
          }}>vision</span></p>
          </Row>
          <Row style={{
          padding: "2% 5%",
          margin: "2vw 0px 2vw 0px",
          width: "80vw",
          height:"10vw",
          backgroundColor:props.theme.light,
          color: props.theme.dark,
          position:"absolute",
          top: "25vw",
          left:"20vw"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/Icons/5.png`}
        style={{
          margin: "0 auto",
          width: "15vw",
          padding: "2%",
          position: "absolute",
          left: "70vw",
          top: "-3vw",
          zIndex:"5",
          filter: `${THEME_TO_FILTER[props.theme.dark]}`
        }}/>
         <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/Icons/5.png`}
        style={{
          margin: "0 auto",
          width: "15vw",
          padding: "2%",
          position: "absolute",
          left: "18vw",
          top: "12vw",
          zIndex:"5",
          filter: `${THEME_TO_FILTER[props.theme.dark]}`
        }}/>
          
          <p>
            <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "0vw",
            top:"2vw"
          }}>Television</span> 
          <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "25vw",
            top:"2vw"
          }}>sells</span>
          <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "33vw",
            top:"5vw"
          }}>tunnel</span>
          <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "5vw",
            position:"absolute",
            left: "49vw",
            top:"0vw"
          }}>vision</span></p>
          </Row>
          <Row style={{
          padding: "2% 5%",
          margin: "2vw 0px 2vw 0px",
          width: "80vw",
          height:"10vw",
          backgroundColor:props.theme.light,
          color: props.theme.dark,
          position:"absolute",
          top: "40vw",
          left:"20vw"
        }}>
          <p>
            <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "30vw",
            top:"2vw"
          }}>Television</span> 
          <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "55vw",
            top:"2vw"
          }}>sells</span>
          <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "4vw",
            position:"absolute",
            left: "63vw",
            top:"5vw"
          }}>tunnel</span>
          <span style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "5vw",
            position:"absolute",
            left: "79vw",
            top:"0vw"
          }}>vision</span></p>
          </Row>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/32.jpg`}
        style={{
          margin: "0 auto",
          width: "40vw",
          padding: "0% 2%",
          position: "absolute",
          left: "2vw",
          top: "5vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/33.jpg`}
        style={{
          margin: "0 auto",
          width: "60vw",
          padding: "0% 2%",
          position: "absolute",
          left: "40vw",
          top: "-10vw"
        }}/>
        </Row>
        <Row style={{
          padding: "2% 0%",
          margin: "10vw auto 5vw",
          height: "20vw",
          position: "relative"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/31.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "-20vw"
        }}/>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/31.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "5vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/31.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "30vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/31.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "55vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/31.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "80vw"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/31.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "5vw"
        }}/>
          </Row>
        <Row style={{
          padding: "2% 5%",
          margin: "0vw 0px",
          width: "100vw",
          height:"40vw",
          backgroundColor:props.theme.light,
          color: props.theme.dark,
          position:"relative"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/Icons/4.png`}
        style={{
          margin: "0 auto",
          width: "23vw",
          padding: "2%",
          position: "absolute",
          left: "30vw",
          top: "6vw",
          zIndex:"5",
          filter: `${THEME_TO_FILTER[props.theme.dark]}`
        }}/>
          <p style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "5vw",
            position:"absolute",
            left: "2vw",
            top:"0vw"
          }}>I feel</p>
          <p style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "3.5vw",
            position:"absolute",
            left: "14vw",
            top:"5vw"
          }}>I should</p>
          <p style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "4.8vw",
            position:"absolute",
            left: "3vw",
            top:"9vw"
          }}>slow down</p>
          <p style={{
            fontFamily: "'Lemonada', cursive", 
            fontSize: "3.5vw",
            position:"absolute",
            left: "-1vw",
            top:"15vw"
          }}>slow down</p>
          <p style={{
            fontFamily: "'Playball', cursive", 
            fontSize: "6vw",
            position:"absolute",
            left: "5vw",
            top:"18vw"
          }}>slow down</p>
          <p style={{
            fontFamily: "'Playball', cursive", 
            fontSize: "3vw",
            position:"absolute",
            left: "0vw",
            top:"30vw"
          }}>slow down</p>
          <p style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "8vw",
            position:"absolute",
            left: "17vw",
            top:"23vw"
          }}>slow down</p>
          <p style={{
            fontFamily: "'Averia Serif Libre', cursive", 
            fontSize: "4.3vw",
            position:"absolute",
            left: "31vw",
            top:"33vw"
          }}>BUT YOU'RE THE ROCKET MAN!!</p>

          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/31.jpg`}
        style={{
          margin: "0 auto",
          width: "20vw",
          padding: "0% 2%",
          position: "absolute",
          left: "25vw",
          top: "-2vw"
        }}/>

<img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/31.jpg`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "2vw",
          top: "25vw"
        }}/>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/31.jpg`}
        style={{
          margin: "0 auto",
          width: "55vw",
          padding: "0% 2%",
          position: "absolute",
          left: "45vw",
          top: "-10vw"
        }}/>
        </Row>

        <Row style={{
          margin: "25vw 0px 2vw 0px",
          width: "100vw",
          height:"40vw",
          position:"relative"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/34a.png`}
        style={{
          margin: "0 auto",
          width: "30vw",
          padding: "0% 2%",
          position: "absolute",
          left: "5vw",
          top: "10vw",
          zIndex: "2"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/34b.png`}
        style={{
          margin: "0 auto",
          width: "25vw",
          padding: "0% 2%",
          position: "absolute",
          left: "10vw",
          top: "25vw",
          zIndex: "2"
        }}/>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/34.jpg`}
        style={{
          margin: "0 auto",
          width: "70vw",
          padding: "0% 2%",
          position: "absolute",
          left: "25vw",
          top: "-10vw",
          zIndex: "1"
        }}/>
          </Row>
          <Row style={{
          margin: "5vw 0px"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/flags.png`}
        style={{
          width: "100vw"
        }}/>
          </Row>
          <Row style={{
          width: "100vw",
          height:"60vw",
          position:"relative"
        }}>
<img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/35.jpg`}
        style={{
          margin: "2vw auto",
          width: "80vw",
          padding: "0% 2%",
          top: "-10vw"
        }}/>

        </Row>
        <Row style={{
          margin: "5vw 0px"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/flags.png`}
        style={{
          width: "100vw"
        }}/>
          </Row>
        <Row style={{
          width: "100vw",
          height:"60vw"
        }}>
<img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/36.jpg`}
        style={{
          margin: "2vw auto",
          width: "75vw",
          padding: "0% 2%",
        }}/>

        </Row> 
        <Row style={{
          margin: "0px"
        }}>
          <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/flags.png`}
        style={{

          width: "100vw"
        }}/>
          </Row>
    </Container>
  );
}

export default Gallery;
