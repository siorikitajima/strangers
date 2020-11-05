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
import Info from './Views/Info';
import Breathe from './Views/Breathe';
import BreatheIcon from './Components/BreatheIcon';
import Documentary from './Views/Documentary';
// import Home from './Views/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/">
            <Scene/>
          </Route>
          <Route exact path="/scene">
            <Scene/>
          </Route>
          <Route path="/documentary">
            <Documentary/>
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
          <Route path="/info">
            <Info/>
          </Route>
          <Route path="/breathe">
            <Breathe/>
          </Route>
        </Switch>
    </div>
    <BreatheIcon/>
    </Router>
  );
}

export default App;
