import React from 'react';
import Img1in19 from '../Images/Data_1-in-19.png';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExplorePTSD() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[10].h1}</h2>

            <img src={Img1in19} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[10].number}</span><br/> {IssueInfoData[10].location} has experienced <br/><b>{IssueInfoData[10].h1}</b> in their life.
            <br/>(Source: <a href="https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(19)30031-8/fulltext" rel="noopener noreferrer" target="_blank">The Lancet</a>)</p>
            </div>

            <p className="infoText">{IssueInfoData[10].body} (Source: <a href={IssueInfoData[10].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[10].source}</a>)</p>
            
            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="../help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>
        </div>
    );
}

export default ExplorePTSD;