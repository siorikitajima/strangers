import React from 'react';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
import ExploreGeneral from './ExploreGeneral';
import ExploreDepression from './ExploreDepression';
import ExploreBipolar from './ExploreBipolar';
import ExploreAnxiety from './ExploreAnxiety';
import ExploreOCD from './ExploreOCD';
import ExploreAA from './ExploreAA';
import ExploreDID from './ExploreDID';
import ExploreBDD from './ExploreBDD';
import ExploreBPD from './ExploreBPD';
import ExplorePTSD from './ExplorePTSD';
import ExplorePsychosis from './ExplorePsychosis';
import ExploreED from './ExploreED';
import ExploreSchizophrenia from './ExploreSchizophrenia';
import ShareIcon from '../Images/infoIcons-share.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ExploreTabs() {
    let { path, url } = useRouteMatch();
    const thelink = window.location.href;
    const notify = () => toast("URL Copied");

    return(
        <div>
            <CopyToClipboard text={thelink}
                onCopy={notify}>
                <img src={ShareIcon} alt="share" className="shareIcon"/>
                </CopyToClipboard>
                <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                closeOnClick
                rtl={true}
                />

            <ul id="expTab">
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
                <NavLink to={`${url}/eating-disorder`} activeClassName = "selectedTab">Eating Disorder</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/schizophrenia`} activeClassName = "selectedTab">Schizophrenia</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <ExploreGeneral/>
                </Route>
                <Route exact path={`${path}/general`}>
                    <ExploreGeneral/>
                </Route>
                <Route path={`${path}/depression`}>
                    <ExploreDepression/>
                </Route>
                <Route path={`${path}/bipolar`}>
                    <ExploreBipolar/>
                </Route>
                <Route path={`${path}/anxiety`}>
                    <ExploreAnxiety/>
                </Route>
                <Route path={`${path}/ocd`}>
                    <ExploreOCD/>
                </Route>
                <Route path={`${path}/alcohol-abuse`}>
                    <ExploreAA/>
                </Route>
                <Route path={`${path}/did`}>
                    <ExploreDID/>
                </Route>
                <Route path={`${path}/bdd`}>
                    <ExploreBDD/>
                </Route>
                <Route path={`${path}/bpd`}>
                    <ExploreBPD/>
                </Route>
                <Route path={`${path}/ptsd`}>
                    <ExplorePTSD/>
                </Route>
                <Route path={`${path}/psychosis`}>
                    <ExplorePsychosis/>
                </Route>
                <Route path={`${path}/eating-disorder`}>
                    <ExploreED/>
                </Route>
                <Route path={`${path}/schizophrenia`}>
                    <ExploreSchizophrenia/>
                </Route>
            </Switch>
        </div>
    );
}

export default ExploreTabs;