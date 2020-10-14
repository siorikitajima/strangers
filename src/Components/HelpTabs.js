import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
import HelpGeneral from './HelpGeneral';
import HelpDepression from './HelpDepression';
import HelpBipolar from './HelpBipolar';
import HelpAnxiety from './HelpAnxiety';
import HelpOCD from './HelpOCD';
import HelpAA from './HelpAA';
import HelpAD from './HelpAD';
import HelpBDD from './HelpBDD';

function HelpTabs() {
    let { path, url } = useRouteMatch();

    return(
        <div>
            <ul id="HelpTab">
                <li className="tabs">
                <NavLink to={`${url}/general`} activeClassName = "selectedTab"
                >General</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/depression`} activeClassName = "selectedTab">Depression</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/bipolar`} activeClassName = "selectedTab">Bipolar</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/anxiety`} activeClassName = "selectedTab">Anxiety</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/ocd`} activeClassName = "selectedTab">OCD</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/alcohol-abuse`} activeClassName = "selectedTab">Alcohol Abuse</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/alcohol-dependence`} activeClassName = "selectedTab">Alcohol Dependence</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/bdd`} activeClassName = "selectedTab">BDD</NavLink>
                </li>                
            </ul>
            <Switch>
                <Route exact path={path}>
                    <HelpGeneral/>
                </Route>
                <Route exact path={`${path}/general`}>
                    <HelpGeneral/>
                </Route>
                <Route path={`${path}/depression`}>
                    <HelpDepression/>
                </Route>
                <Route path={`${path}/bipolar`}>
                    <HelpBipolar/>
                </Route>
                <Route path={`${path}/anxiety`}>
                    <HelpAnxiety/>
                </Route>
                <Route path={`${path}/ocd`}>
                    <HelpOCD/>
                </Route>
                <Route path={`${path}/alcohol-abuse`}>
                    <HelpAA/>
                </Route>
                <Route path={`${path}/alcohol-dependence`}>
                    <HelpAD/>
                </Route>
                <Route path={`${path}/bdd`}>
                    <HelpBDD/>
                </Route>
            </Switch>
        </div>
    );
}

export default HelpTabs;