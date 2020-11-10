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
// import Helmet from "react-helmet";

function App() {
  return (
    <Router>
      {/* <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        {/* <title>Strangers in My Head</title>
        <meta name="description" content="This is a Singapore- based mental health resource site created alongside the documentary series Strangers in My Head"/> */}

        {/* <!-- Google / Search Engine Tags --> */}
        {/* <meta itemprop="name" content="Strangers in My Head"/>
        <meta itemprop="description" content="This is a Singapore- based mental health resource site created alongside the documentary series Strangers in My Head"/>
        <meta itemprop="image" content="https://strangersinmyhead.info/media/strangers-in-my-head.jpg"/> */}

        {/* <!-- Facebook Meta Tags --> */}
        {/* <meta property="og:url" content="https://strangersinmyhead.info"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Strangers in My Head"/>
        <meta property="og:description" content="This is a Singapore- based mental health resource site created alongside the documentary series Strangers in My Head"/>
        <meta property="og:image" content="https://strangersinmyhead.info/media/strangers-in-my-head.jpg"/> */}

        {/* <!-- Twitter Meta Tags --> */}
        {/* <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Strangers in My Head"/>
        <meta name="twitter:description" content="This is a Singapore- based mental health resource site created alongside the documentary series Strangers in My Head"/>
        <meta name="twitter:image" content="https://strangersinmyhead.info/media/strangers-in-my-head.jpg"/>
      </Helmet> */} 
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
