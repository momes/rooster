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
import Homeedit from './Homeedit.js';
import Monument from './Monument.js';
library.add(fab);

function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(function showLoadingScreen() {
    if (isLoading) {
    setTimeout(function() {
      setIsLoading(false);
    }, 1800)
  }}, [isLoading, setIsLoading])

  return (
    <div>
      {isLoading && (<Monument />)}
      {!isLoading && (<Homeedit />)}
    </div>
  );
}

export default Home;
