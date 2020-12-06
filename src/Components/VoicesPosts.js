import React from 'react';
import {PostData} from '../Components/PostData';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    Link,
    useParams
  } from "react-router-dom";
import ShareIcon from '../Images/infoIcons-share.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import Masonry from 'react-masonry-css';

function VoicesPosts() {
    let { path, url } = useRouteMatch();
    const thelink = window.location.href;
    const notify = () => toast("URL Copied");

      return (
        <div className="voiceContainer">
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

                <ul id="voiceTab">
                <li className="tabs">
                <NavLink to={`${url}/all`} activeClassName = "selectedTab">All</NavLink></li>
                <li className="tabs">
                <NavLink to={`${url}/general`} activeClassName = "selectedTab">General</NavLink></li>
                <li className="tabs">
                <NavLink to={`${url}/depression`} activeClassName = "selectedTab">Depression</NavLink></li>
                <li className="tabs">
                <NavLink to={`${url}/bipolar`} activeClassName = "selectedTab">Bipolar</NavLink></li>
                <li className="tabs">
                <NavLink to={`${url}/anxiety`} activeClassName = "selectedTab">Anxiety</NavLink></li>
                {/* <li className="tabs">
                <NavLink to={`${url}/ocd`} activeClassName = "selectedTab">OCD</NavLink></li>
                <li className="tabs">
                <NavLink to={`${url}/alcohol-abuse`} activeClassName = "selectedTab">Alcohol Abuse</NavLink></li>
                <li className="tabs">
                <NavLink to={`${url}/did`} activeClassName = "selectedTab">DID</NavLink></li>
                <li className="tabs">
                <NavLink to={`${url}/bdd`} activeClassName = "selectedTab">BDD</NavLink></li> */}
                <li className="tabs">
                <NavLink to={`${url}/bpd`} activeClassName = "selectedTab">BPD</NavLink></li>
                {/* <li className="tabs">
                <NavLink to={`${url}/ptsd`} activeClassName = "selectedTab">PTSD</NavLink></li>
                <li className="tabs">
                <NavLink to={`${url}/psychosis`} activeClassName = "selectedTab">Psychosis</NavLink></li>
                <li className="tabs">
                <NavLink to={`${url}/eating-disorder`} activeClassName = "selectedTab">Eating Disorder</NavLink></li> */}
                <li className="tabs">
                <NavLink to={`${url}/schizophrenia`} activeClassName = "selectedTab">Schizophrenia</NavLink></li>
                </ul>
                <Switch>
                <Route exact path={path}>
                    <div className="allVoices">
                    <Masonry
                    breakpointCols={{default: 4, 1400: 3, 800:2, 600:1}}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                    >
                    {
                        PostData.filter(post => post.issueslug.includes('all')).map(filteredPost => (
                        <div key={filteredPost.id} className="voice">
                            <h3>{filteredPost.quote}</h3>
                            <h6 className="byline">{filteredPost.name}</h6>
                            {filteredPost.link == null ?  <div></div> :
                            <Link to={filteredPost.link}>
                            <button className="readmoreBtn">READ MORE</button>
                            </Link>
                            }
                            <p className="byline">{filteredPost.issue}</p>
                        </div>
                    ))
                    }
                    </Masonry>
                    </div>
                </Route>
                <Route path={`${path}/:filterName`} children={<Filters/>}>
                </Route>
                </Switch>
        </div>
      )
}

function Filters() {
    let { filterName } = useParams();
    return(
    <div className="allVoices">
    <Masonry
    breakpointCols={{default: 4, 1400: 3, 800:2, 600:1}}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
    >
    {
        PostData.filter(post => post.issueslug.includes(filterName)).map(filteredPost => (
        <div key={filteredPost.id} className="voice">
            <h3>{filteredPost.quote}</h3>
            <h6 className="byline">{filteredPost.name}</h6>
            {filteredPost.link == null ?  <div></div> :
            <Link to={filteredPost.link}>
            <button className="readmoreBtn">READ MORE</button>
            </Link>
            }
            <p className="byline">{filteredPost.issue}</p>
        </div>
    ))
    }
    </Masonry>
    </div>
    );
}

export default VoicesPosts;