import './Home.css';
import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Randomizer from './Randomizer';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Navigation from './Navigation.js';
import Gallery from './Gallery.js';
import Monument from './Monument.js';
import RoosterHome from './RoosterHome.js';

library.add(fab);

const THEMES = [
  {light: '#ff6e32', dark: '#1e832c'},
  {light: '#FFA737', dark: '#343330'},
  {light: '#BFDBF7', dark: '#A31621'},
  {light: '#FAF0CA', dark: '#0D3B66'}
]

const THEME_TO_FILTER = {
  '#1e832c': "invert(33%) sepia(18%) saturate(4468%) hue-rotate(94deg) brightness(100%) contrast(76%) opacity(80%)",
  '#343330': "invert(17%) sepia(12%) saturate(202%) hue-rotate(7deg) brightness(99%) contrast(93%)",
  '#A31621': "invert(16%) sepia(50%) saturate(6464%) hue-rotate(346deg) brightness(72%) contrast(94%)",
  '#0D3B66': "invert(19%) sepia(17%) saturate(4829%) hue-rotate(182deg) brightness(92%) contrast(95%)"
}
function Homeedit() {
  const [currTheme, setCurrTheme] = useState(0)
  const [changeTheme, setChangeTheme] = useState(false)
  const [timerCount, setTimerCount] = useState(0)

  useEffect(function changeThemes() {
    let randTime = Math.round(Math.random() * (1000)) + 5000;
    if (!changeTheme) {
    setTimeout(function() {
      setChangeTheme(true);
      setTimerCount((currTime) => currTime + 1)
    }, randTime);
    }

    if (changeTheme) {
      currTheme < THEMES.length - 1 
        ? setCurrTheme((currTheme) => currTheme + 1) 
        : setCurrTheme(0);
      setChangeTheme(false);
    }

  }, [currTheme, changeTheme])

  return (
    <div 
      className="background"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/ccc-assets/rooster-home-bg.png)`,
        backgroundRepeat: "repeat",
        backgroundSize: "50%",
        padding: "2% 0% 2% 0%",
        backgroundAttachment: "fixed",
        minHeight: "100%",
        alignContent: "center",
        margin: "0 0"
        }}>
      <Navigation />
      <Row style={{height:"70vh"}}>
        <Col xs={0} sm={0} md={2} lg={3}></Col>
        <Col xs={12} sm={12} md={8} lg={6}>
    <RoosterHome />
      </Col>
      </Row>
      <Gallery theme={THEMES[currTheme]}/>
  </div>
  );
}

export default Homeedit;