import React from 'react';
import Header from './Components/Header'
import './App.scss';
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Voices from './Views/Voices';
import About from './Views/About';
import Perspective from './Views/Perspective';
import Explore from './Views/Explore';
import Help from './Views/Help';
import Info from './Views/Info';
import Breathe from './Views/Breathe';
import BreatheIcon from './Components/BreatheIcon';
import Documentary from './Views/Documentary';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/">
            <Perspective/>
          </Route>
          <Route exact path="/perspective">
            <Perspective/>
          </Route>
          <Route path="/documentary">
            <Documentary/>
          </Route>
          <Route path="/voices">
            <Voices/>
          </Route>
          <Route path="/explore">
            <Explore/>
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
