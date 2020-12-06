import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    useRouteMatch
  } from "react-router-dom";
import ShareIcon from '../Images/infoIcons-share.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StorySample from '../Components/StorySample';
import Story01 from '../Components/Story01';
import Story02 from '../Components/Story02';
import Story03 from '../Components/Story03';
import Story04 from '../Components/Story04';
import Story05 from '../Components/Story05';
import Story06 from '../Components/Story06';
import Story07 from '../Components/Story07';
import Story08 from '../Components/Story08';
import Story09 from '../Components/Story09';
import Story10 from '../Components/Story10';
import Story11 from '../Components/Story11';
import Story12 from '../Components/Story12';
import Story13 from '../Components/Story13';

function Story() {
    let { path } = useRouteMatch();
    const thelink = window.location.href;
    const notify = () => toast("URL Copied");

    return(
        <div className="story">
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

          <Switch>
            <Route exact path={path}>
                <Redirect to="../voices" />
            </Route>
            <Route path={`${path}/sample`}>
                <StorySample/>
            </Route>
            <Route path={`${path}/healthy-healthcare-workers`}>
                <Story01/>
            </Route>
            <Route path={`${path}/a-healthy-mind`}>
                <Story02/>
            </Route>
            <Route path={`${path}/they-are-watching-me`}>
                <Story03/>
            </Route>
            <Route path={`${path}/in-1983-my-father`}>
                <Story04/>
            </Route>
            <Route path={`${path}/dying-to-be-alive`}>
                <Story05/>
            </Route>
            <Route path={`${path}/an-average-morning`}>
                <Story06/>
            </Route>
            <Route path={`${path}/social-anxiety`}>
                <Story07/>
            </Route>
            <Route path={`${path}/intense-highs-crushing-lows`}>
                <Story08/>
            </Route>
            <Route path={`${path}/i-was-first-diagnosed`}>
                <Story09/>
            </Route>
            <Route path={`${path}/superhuman`}>
                <Story10/>
            </Route>
            <Route path={`${path}/a-random-note-for-fellow-warriors`}>
                <Story11/>
            </Route>
            <Route path={`${path}/its-been-11-months`}>
                <Story12/>
            </Route>
            <Route path={`${path}/a-couple-of-decades-ago`}>
                <Story13/>
            </Route>
          </Switch>
      </div>
    );
}
export default Story;