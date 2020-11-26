import React from 'react';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
import HelpSuicide from './HelpSuicide';
import HelpCounselling from './HelpCounselling';
import HelpSpecialists from './HelpSpecialists';
import HelpYouth from './HelpYouth';
import HelpCareGivers from './HelpCareGivers';
import HelpSocialIntegration from './HelpSocialIntegration';
import HelpSupport from './HelpSupport';
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
                <NavLink to={`${url}/suicide-prevention`} activeClassName = "selectedTab"
                >Suicide Prevention</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/counselling`} activeClassName = "selectedTab">Counselling</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/specialists`} activeClassName = "selectedTab">Specialists</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/youth`} activeClassName = "selectedTab">Youth and Children</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/care-givers`} activeClassName = "selectedTab">Care Providers</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/social-integration`} activeClassName = "selectedTab">Social Integration</NavLink>
                </li>
                <li className="tabs">
                <NavLink to={`${url}/support`} activeClassName = "selectedTab">Support Groups</NavLink>
                </li>            
            </ul>
            <Switch>
                <Route exact path={path}>
                    <HelpSuicide/>
                </Route>
                <Route exact path={`${path}/suicide-prevention`}>
                    <HelpSuicide/>
                </Route>
                <Route path={`${path}/counselling`}>
                    <HelpCounselling/>
                </Route>
                <Route path={`${path}/specialists`}>
                    <HelpSpecialists/>
                </Route>
                <Route path={`${path}/youth`}>
                    <HelpYouth/>
                </Route>
                <Route path={`${path}/care-givers`}>
                    <HelpCareGivers/>
                </Route>
                <Route path={`${path}/social-integration`}>
                    <HelpSocialIntegration/>
                </Route>
                <Route path={`${path}/support`}>
                    <HelpSupport/>
                </Route>
            </Switch>
        </div>
    );
}

export default HelpTabs;