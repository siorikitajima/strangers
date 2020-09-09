import React from 'react';
import Header from './Components/Header'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Voices from './Views/Voices';
import About from './Views/About';
import Scene from './Views/Scene';
import Data from './Views/Data';
import Home from './Views/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/scene">
            <Scene/>
          </Route>
          <Route path="/voice">
            <Voices/>
          </Route>
          <Route path="/data">
            <Data/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/sooth">
            <div className="demo">Sooth</div>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
