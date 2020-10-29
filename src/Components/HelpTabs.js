import React from 'react';
import {
    // BrowserRouter as Router,
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
import HelpDID from './HelpDID';
import HelpBDD from './HelpBDD';
import HelpBPD from './HelpBPD';
import HelpPTSD from './HelpPTSD';
import HelpPsychosis from './HelpPsychosis';
import HelpED from './HelpBDD';
import HelpSchizophrenia from './HelpSchizophrenia';
import ShareIcon from '../Images/infoIcons-share.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HelpTabs() {
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
                <Route path={`${path}/did`}>
                    <HelpDID/>
                </Route>
                <Route path={`${path}/bdd`}>
                    <HelpBDD/>
                </Route>
                <Route path={`${path}/bpd`}>
                    <HelpBPD/>
                </Route>
                <Route path={`${path}/ptsd`}>
                    <HelpPTSD/>
                </Route>
                <Route path={`${path}/psychosis`}>
                    <HelpPsychosis/>
                </Route>
                <Route path={`${path}/eating-disorder`}>
                    <HelpED/>
                </Route>
                <Route path={`${path}/schizophrenia`}>
                    <HelpSchizophrenia/>
                </Route>
            </Switch>
        </div>
    );
}

export default HelpTabs;