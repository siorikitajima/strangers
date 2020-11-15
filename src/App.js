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
import Perspective from './Views/Perspective';
import Explore from './Views/Explore';
import Help from './Views/Help';
import Info from './Views/Info';
import Breathe from './Views/Breathe';
import BreatheIcon from './Components/BreatheIcon';
import Documentary from './Views/Documentary';

function App() {
  // if (isIE) {
  //   return (
  //     <div className="ie-warning">
  //       <h2>Unsupported Browser</h2>
  //       <p>App "Strangers in My Head" will not work in Internet Explorer. Use <a href="https://www.microsoft.com/en-us/edge/business/download" rel="noopener noreferrer" target="_blank">Microsoft Edge</a> or <a href="https://www.google.com/chrome/" rel="noopener noreferrer" target="_blank">Google Chrome</a> for the full experience.</p>
  //       <p>For streaming the documentary "Strangers in My Head", please visit <a href="https://www.channelnewsasia.com/" rel="noopener noreferrer" target="_blank">CNA</a></p>
  //     </div>
  //   );
  // }
  // else {
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
  // }
}

export default App;
