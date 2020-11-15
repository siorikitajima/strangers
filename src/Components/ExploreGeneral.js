import React from 'react';
import Img1in7 from '../Images/Data_1-in-7.png';
import Img3in4 from '../Images/Data_3-in-4.png';
import WatchBannerGeneral from '../Components/WatchBannerGeneral';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreGeneral() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[7].h1}</h2>

            <img src={Img1in7} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[7].number}</span><br/> {IssueInfoData[7].location} has experienced <br/><b>{IssueInfoData[7].h1}</b> in their life.
            <br/>(Source: <a href={IssueInfoData[7].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[7].source}</a>)
            </p>
            </div>

            <p className="infoText">{IssueInfoData[7].body} (Source: <a href={IssueInfoData[7].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[7].source}</a>, <a href='https://en.wikipedia.org/wiki/Mental_disorder' rel="noopener noreferrer" target="_blank">Wikipedia</a>)</p>
            
            <img src={Img3in4} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>3/4</span><br/> people with mental health issues <br/><b>did not seek help</b>.</p>
            </div>
            <p className="infoText">More than 3/4 of people with a mental disorder in Singapore did not seek any professional help. Among those who sought help, the majority of them did not seek help for 4 to 11 years. Past research have found that the inability to recognise the symptoms of a mental illness and concerns regarding the stigma associated with mental illness are two common reasons for the treatment delay. (Source: <a href={IssueInfoData[7].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[7].source}</a>)<br/>If you are experiencing mental health issues, we encourage you to reach out for help.</p>
            
            <a href="#/help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>

            <WatchBannerGeneral/>
        </div>
    );
}

export default ExploreGeneral;