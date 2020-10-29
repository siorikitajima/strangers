import React from 'react';
import Img1in335 from '../Images/Data_1-in-335.png';

function DataSchizophrenia() {
    return(
        <div className="dataVizContainer">
            <img src={Img1in335} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/335</span> people across the world has experienced <br/><b>Schizophrenia</b> in their life.</p>
            </div>
            <p>A wide range of conditions that affect mood, thinking, and behavior. Among the conditions assessed in this study, MDD, alcohol abuse and OCD emerged as the top three mental disorders in Singapore.</p>
            <h2>What is Schizophrenia</h2>
            <p>In the 2016 study, more than 3/4 with a mental disorder in their lifetime did not seek any professional help. Among those who sought help, the majority of them did not seek help for 4 to 11 years. Past research have found that the inability to recognise the symptoms of a mental illness and concerns regarding the stigma associated with mental illness are two common reasons for treatment delay for mental disorders.</p>
            
            <a href="#/help/schizophrenia">
            <div className="helpLink">
                Find Help
            </div>
            </a>
        </div>
    );
}

export default DataSchizophrenia;