import './App.css';
import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home.js';
import Store from './Store.js';
import Projects from './Projects.js';
import Rooster from './Rooster.js';
import Shows from './Shows.js';
import Homeedit from './Homeedit.js';

function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
    <BrowserRouter>
    <Switch>
      <Route path='/store'>
        <Store/>
      </Route>
      <Route path='/projects'>
        <Projects/>
      </Route>
      <Route path='/shows'>
        <Shows/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
      <Redirect to='/' />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
