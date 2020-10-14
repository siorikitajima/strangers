import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
import DataOverview from './DataOverview';
import DataDepression from './DataDepression';
import DataBipolar from './DataBipolar';
import DataAnxiety from './DataAnxiety';
import DataOCD from './DataOCD';
import DataAA from './DataAA';
import DataAD from './DataAD';
import DataBDD from './DataBDD';

function DataTabs() {
    let { path, url } = useRouteMatch();

    return(
        <div>
            <ul id="dataTab">
                <li className="tabs">
                <NavLink to={`${url}/overview`} activeClassName = "selectedTab"
                >Overview</NavLink>
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
                    <DataOverview/>
                </Route>
                <Route exact path={`${path}/overview`}>
                    <DataOverview/>
                </Route>
                <Route path={`${path}/depression`}>
                    <DataDepression/>
                </Route>
                <Route path={`${path}/bipolar`}>
                    <DataBipolar/>
                </Route>
                <Route path={`${path}/anxiety`}>
                    <DataAnxiety/>
                </Route>
                <Route path={`${path}/ocd`}>
                    <DataOCD/>
                </Route>
                <Route path={`${path}/alcohol-abuse`}>
                    <DataAA/>
                </Route>
                <Route path={`${path}/alcohol-dependence`}>
                    <DataAD/>
                </Route>
                <Route path={`${path}/bdd`}>
                    <DataBDD/>
                </Route>
            </Switch>
        </div>
    );
}

export default DataTabs;