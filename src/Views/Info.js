import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useParams,
    useLocation
  } from "react-router-dom";
import LearnIcon from '../Images/infoIcons-learn-dark.svg';
import HelpIcon from '../Images/infoIcons-help-dark.svg';
import VoicesIcon from '../Images/infoIcons-voices-dark.svg';
import ShareIcon from '../Images/infoIcons-share.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const infoData = [
    {id:0, 
      slug:'depression', 
      h1:'Depression / MDD', 
      number: '16', 
      body:'Persistently depressed mood or loss of interest in activities causing significant impairment in daily life. The most common mental disorder in Singapore.'},
    {id:1, 
      slug:'bipolar', 
      h1:'Bipolar', 
      number: '62', 
      body:'Episodes of mood swings ranging from depressive lows to manic highs. This disorder is characterised by depressive episodes and mania.'},
    {id:2, 
      slug:'anxiety', 
      h1:'Anxiety / GAD', 
      number: '62', 
      body:"Feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities. They are often accompanied by other symptoms."},
    {id:3, 
      slug:'ocd', 
      h1:'OCD', 
      number: '28', body:'Obsessive-Compulsive Disorder. The occurrence of obsessions, compulsive rituals or, both recurrent and persistent thoughts, impulses, or images that are experienced as intrusive and cause great anxiety.'},
    {id:4, 
      slug:'alcohol-abuse', 
      h1:'Alcohol Abuse', 
      number: '28', 
      body:'Recurrent alcohol use resulting in failure to fulfill major role obligations, or recurrent use in situations in which it is physically hazardous.'},
    {id:5, 
      slug:'alcohol-dependence', 
      h1:'Alcohol Dependence', 
      number: '200', 
      body:'Maladaptive pattern of alcohol use, leading to clinically significant impairment or distress, and the essential feature of which is a cluster of cognitive, behavioural and physical symptoms.'},
    {id:6, 
      slug:'multiple-issues', 
      h1:'Multiple issues', 
      number: '100', 
      body:'Comorbidity, presence of two or more of the above mental disorders in the same period. Symptoms often overlap and can be additive.'},
    {id:7, 
      slug:'general', 
      h1:'Mental health issues', 
      number: '7', 
      body:'A wide range of conditions that affect mood, thinking, and behavior. 1 in 7 people in Singapore has experienced mental issues, with only two of them seeking help.'}]

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
    const [copied, setCopied] = useState(false);
    const theID = infoData[id].id;
    const theissue = infoData[id].slug;
    // const thelink = window.location.pathname + "/info/" + theID + "/" + theissue;
    const thelink = window.location.href;
    return (
      <div>
        <h1> // {infoData[id].h1} // 
        <CopyToClipboard text={thelink}
          onCopy={() => {setCopied(true)}}>
          <img src={ShareIcon} alt="share" className="shareIcon"/>
        </CopyToClipboard>
        {copied ? 
         <span>URL Copied</span> : null }
        </h1>
        <div className="dataVizImg">
        </div>
        <p className="infoNumber"><span>1/{infoData[id].number}</span> people in Singapore has experienced <br/><b>{infoData[id].h1}</b> in their life.</p>
        <h3>
          <img src={LearnIcon} alt="learn" className="headingIcons"/>
          What is {infoData[id].h1}
        </h3>
        <p className="infoText">
        {/* Current issue parameter is <strong>{issue}</strong>
        <br />
        The ID is <strong>{id}</strong> */}
        {infoData[id].body}
        </p>

        <Link to={location => `../../data/${issue}`} >
          <div className="helpLink">
                Learn More
          </div>
        </Link>

        <h3>
        <img src={HelpIcon} alt="help" className="headingIcons"/>
        Reach out for Help
        </h3>
        <p className="infoText">Copy here to encourage people to reach out for help. In the 2016 study, more than 3/4 with a mental disorder in their lifetime did not seek any professional help.</p>
        <Link to={location => `../../help/${issue}`} >
          <div className="helpLink">
                Find Help
          </div>
        </Link>

        <h3>
        <img src={VoicesIcon} alt="voices" className="headingIcons"/>
        Listen to Voices</h3>
        <p className="infoText"><b>Voices</b> is an exhibition of real messages from mental illness fighters to others. If you want to share your story, please drop a line.</p>
        <Link to={location => `../../voices`} >
          <div className="helpLink">
                See Voices
          </div>
        </Link>

        <div className="spacerM"></div>
      </div>
    );
  }

export default Info;