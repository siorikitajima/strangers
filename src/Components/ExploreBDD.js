import React from 'react';
import Img1in50 from '../Images/Data_1-in-50.png';
import WatchBanner from '../Components/WatchBanner';

function ExploreBDD() {
    return(
        <div className="dataVizContainer">
            <img src={Img1in50} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/50</span> people in Singapore has experienced <br/><b>BDD / Body dysmorphic disorder</b> in their life.</p>
            </div>
            <p>A wide range of conditions that affect mood, thinking, and behavior. Among the conditions assessed in this study, MDD, alcohol abuse and OCD emerged as the top three mental disorders in Singapore.</p>
            <h2>What is BDD / Body dysmorphic disorder</h2>
            <p>In the 2016 study, more than 3/4 with a mental disorder in their lifetime did not seek any professional help. Among those who sought help, the majority of them did not seek help for 4 to 11 years. Past research have found that the inability to recognise the symptoms of a mental illness and concerns regarding the stigma associated with mental illness are two common reasons for treatment delay for mental disorders.</p>
            
            <a href="#/help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>

            <WatchBanner issue={"Body dysmorphic disorder"} ep={"1"} date={"9 Dec"} link={"../../documentary/ep1"} />
            
        </div>
    );
}

export default ExploreBDD;