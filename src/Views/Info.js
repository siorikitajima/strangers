import React from 'react';
import {
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import LearnIcon from '../Images/infoIcons-learn-dark.svg';
import HelpIcon from '../Images/infoIcons-help-dark.svg';
import VoicesIcon from '../Images/infoIcons-voices-dark.svg';
import ShareIcon from '../Images/infoIcons-share.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WatchBannerGeneral from '../Components/WatchBannerGeneral';
import {IssueInfoData} from '../Components/IssueInfoData';

function Info() {
    return(
        <div className="info">
          <Switch>
            <Route path="/info/:id/:issue" children={<Issues/>}/>
          </Switch>
      </div>
    );
}

function Issues() {
    let { issue } = useParams();
    let { id } = useParams();
    const thelink = window.location.href;
    const notify = () => toast("URL Copied");

    return (
      <div>
        <h1> &#47;&#47; {IssueInfoData[id].h1} &#47;&#47; 
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
        </h1>
        <img src={require(`../Images/Data_${IssueInfoData[id].img}.png`)} alt="data" className="dataVizImg"/>
        <p className="infoNumber"><span>1/{IssueInfoData[id].number}</span> {IssueInfoData[id].location} has experienced <br/><b>{IssueInfoData[id].h1}</b> in their life.</p>
        <h3>
          <img src={LearnIcon} alt="learn" className="headingIcons"/>
          {IssueInfoData[id].h1}
        </h3>
        <p className="infoText">
        {IssueInfoData[id].body}
        </p>

        <Link to={location => `../../explore/${issue}`} >
          <div className="helpLink">
                Learn More
          </div>
        </Link>

        <h3>
        <img src={HelpIcon} alt="help" className="headingIcons"/>
        Reach out for Help
        </h3>
        <p className="infoText">If you are experiencing mental health issues, we encourage you to reach out for help. In the <a href="https://www.imh.com.sg/research/" rel="noopener noreferrer" target="_blank">2016 Singapore Mental Health Study</a>, more than 75% of people with mental disorders in their lifetime did not seek any professional help.</p>
        <Link to={location => `../../help/${IssueInfoData[id].help}`} >
          <div className="helpLink">
                Find Help
          </div>
        </Link>

        <h3>
        <img src={VoicesIcon} alt="voices" className="headingIcons"/>
        Listen to Voices</h3>
        <p className="infoText">"Voices" is a message board to make the journey less lonely. Include your thoughts and experiences with a post.</p>
        <Link to={location => `../../voices`} >
          <div className="helpLink">
                See Voices
          </div>
        </Link>

        <WatchBannerGeneral/>
        <div className="spacerM"></div>
      </div>
    );
  }

export default Info;