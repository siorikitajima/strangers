import React from 'react';
import Header from './Components/Header'
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Voices from './Views/Voices';
import About from './Views/About';
import Scene from './Views/Scene';
import Data from './Views/Data';
import Help from './Views/Help';
// import Home from './Views/Home';

function App() {
  return (
    <Router>
    {/* <Router> */}
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/">
            <Scene/>
          </Route>
          <Route exact path="/scene">
            <Scene/>
          </Route>
          <Route path="/voices">
            <Voices/>
          </Route>
          <Route path="/data">
            <Data/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/help">
            <Help/>
          </Route>
        </Switch>
    </div>
    {/* </Router> */}
    </Router>
  );
}

export default App;
