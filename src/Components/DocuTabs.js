import React from 'react';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
import ShareIcon from '../Images/infoIcons-share.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DocuSeries from '../Components/DocuSeries';
import DocEp1 from '../Components/DocuEp1';
import DocEp2 from '../Components/DocuEp2';
import DocEp3 from '../Components/DocuEp3';
import DocEp4 from '../Components/DocuEp4';
import DocuSoundtrack from '../Components/DocuSoundtrack';

function DocuTabs() {
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

            <ul id="docuTab">
                <li className="tabs">
                <NavLink to={`${url}/series`} activeClassName = "selectedTab">Series</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/ep1`} activeClassName = "selectedTab">EP1</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/ep2`} activeClassName = "selectedTab">EP2</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/ep3`} activeClassName = "selectedTab">EP3</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/ep4`} activeClassName = "selectedTab">EP4</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/soundtrack`} activeClassName = "selectedTab">Soundtrack</NavLink>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <DocuSeries/>
                </Route>
                <Route exact path={`${path}/series`}>
                    <DocuSeries/>
                </Route>
                <Route exact path={`${path}/ep1`}>
                    <DocEp1/>
                </Route>
                <Route path={`${path}/ep2`}>
                    <DocEp2/>
                </Route>
                <Route path={`${path}/ep3`}>
                    <DocEp3/>
                </Route>
                <Route path={`${path}/ep4`}>
                    <DocEp4/>
                </Route>
                <Route path={`${path}/soundtrack`}>
                    <DocuSoundtrack/>
                </Route>
            </Switch>
        </div>
    );
}

export default DocuTabs;