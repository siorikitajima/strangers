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
          </Switch>
      </div>
    );
}
export default Story;