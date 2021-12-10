import './Home.css';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const THEME_TO_FILTER = {
  '#1e832c': "invert(33%) sepia(18%) saturate(4468%) hue-rotate(94deg) brightness(100%) contrast(76%) opacity(80%)",
  '#343330': "invert(17%) sepia(12%) saturate(202%) hue-rotate(7deg) brightness(99%) contrast(93%)",
  '#A31621': "invert(16%) sepia(50%) saturate(6464%) hue-rotate(346deg) brightness(72%) contrast(94%)",
  '#0D3B66': "invert(19%) sepia(17%) saturate(4829%) hue-rotate(182deg) brightness(92%) contrast(95%)"
}


function Randomizer(props) {
  const [assets, setAssets] = useState({});
  const [addAsset, setAddAsset] = useState(false);
  const [currTimeOut, setCurrTimeOut] = useState(null);
  
  useLayoutEffect(function setRandom() {
    let randTime = Math.round(Math.random() * (1000)) + 2000;
    let assetNum = Math.floor(Math.random() * 20 + 1);
    
    // Set a random timeout to trigger setting an asset
    if (!addAsset & !currTimeOut) {
      let timeOut = setTimeout(function() {
        setAddAsset(true);
      }, randTime);
      setCurrTimeOut(timeOut)
    }

    // Reset on max assets on screen, trigger new random timeout
    if (addAsset && Object.keys(assets).length === 6) {
      setAddAsset(false);
      setAssets({});
      clearTimeout(currTimeOut);
      setCurrTimeOut(null)
    }
    
    // Find place asset in random spot
    if (addAsset && Object.keys(assets).length < 6) {

      // If the same asset is already on screen, trigger new random timeout
      if(Object.keys(assets).includes(`${assetNum}`)) {
        setAddAsset(false);
        clearTimeout(currTimeOut);
        setCurrTimeOut(null)
      }
      
      else {
        // Generate random positioning
        let randLeft;
        let randTop;

        while (!randLeft || !randTop) {
          randLeft = (Math.floor(Math.random() * 20) * 5) - 10;
          randTop = (Math.floor(Math.random() * 20) * 5 )- 10;
        }
        setAssets((oldAssets) => ({...oldAssets, [assetNum]: [randLeft,randTop]}));
        setAddAsset(false);
        clearTimeout(currTimeOut);
        setCurrTimeOut(null)
      }
    }}, [addAsset, assets, currTimeOut])

  return (
    <div className="RandomContainer">
      {Object.keys(assets).map((asset) => (
        <img className="RandomAsset" 
              src={process.env.PUBLIC_URL + `/ccc-assets/${asset}.png`}
              alt={`${asset}country-chain-chapel`}
              style={{position: "fixed",
                  left: `${assets[asset][0]}%`,
                  top: `${assets[asset][1]}%`,
                  maxWidth: "350px",
                  maxHeight: "350px",
                  width: "70%",
                  filter: `${THEME_TO_FILTER[props.theme]}`,
                  mixBlendMode: "color-burn"
                }} 
              />
      ))}
      </div>
  );
}

export default Randomizer;
