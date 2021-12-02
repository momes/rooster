import './Home.css';
import React from 'react';

function GalleryYears() {

  return (
    <div 
      className="Gallery" 
      style={{
        alignItems: "center",
        position: "relative"
        }}>
      <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/3.jpg`}
        style={{
          margin: "2% auto",
          width: "30vw",
          position: "absolute",
          zIndex: "99",
          top: "5vh",
          left: "0"
        }}/>
        <img 
        src={`${process.env.PUBLIC_URL}/ccc-assets/4.jpg`}
        style={{
          margin: "0 0",
          width: "80vw",
          position: "absolute",
          top: "0vh",
          left: "15vw",
          zIndex: "5"
        }}/>
        </div>
  );
}

export default GalleryYears;
