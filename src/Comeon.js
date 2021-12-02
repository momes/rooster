import './Home.css';
import React, { useEffect, useState } from 'react';


function Comeon(props){
  const [count, setCount] = useState(0);

  useEffect(function changeRooster() {
    if (count === 0) {
      
    }
  }, [count])
return (

        <div style={{
          backgroundColor: `${props.theme.light}`,
          alignItems: "center"
          }}>
        <div style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + `/ccc-assets/1.jpg`})`,
          backgroundSize: "50%",
          minHeight: "40vh"
        }}></div>
      </div>
  );
}

export default Comeon;
