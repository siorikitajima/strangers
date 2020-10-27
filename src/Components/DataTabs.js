import React from 'react';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
import DataGeneral from './DataGeneral';
import DataDepression from './DataDepression';
import DataBipolar from './DataBipolar';
import DataAnxiety from './DataAnxiety';
import DataOCD from './DataOCD';
import DataAA from './DataAA';
import DataDID from './DataDID';
import DataBDD from './DataBDD';
import DataBPD from './DataBPD';
import DataPTSD from './DataPTSD';
import DataPsychosis from './DataPsychosis';
import DataED from './DataED';
import DataSchizophrenia from './DataSchizophrenia';

function DataTabs() {
    let { path, url } = useRouteMatch();

    return(
        <div>
            <ul id="dataTab">
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
                <NavLink to={`${url}/did`} activeClassName = "selectedTab">DID</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/bdd`} activeClassName = "selectedTab">BDD</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/bpd`} activeClassName = "selectedTab">BPD</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/ptsd`} activeClassName = "selectedTab">PTSD</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/psychosis`} activeClassName = "selectedTab">Psychosis</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/eating-disorder`} activeClassName = "selectedTab">Eating DisorderD</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/schizophrenia`} activeClassName = "selectedTab">Schizophrenia</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <DataGeneral/>
                </Route>
                <Route exact path={`${path}/general`}>
                    <DataGeneral/>
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
                <Route path={`${path}/did`}>
                    <DataDID/>
                </Route>
                <Route path={`${path}/bdd`}>
                    <DataBDD/>
                </Route>
                <Route path={`${path}/bpd`}>
                    <DataBPD/>
                </Route>
                <Route path={`${path}/ptsd`}>
                    <DataPTSD/>
                </Route>
                <Route path={`${path}/psychosis`}>
                    <DataPsychosis/>
                </Route>
                <Route path={`${path}/eating-disorder`}>
                    <DataED/>
                </Route>
                <Route path={`${path}/schizophrenia`}>
                    <DataSchizophrenia/>
                </Route>
            </Switch>
        </div>
    );
}

export default DataTabs;