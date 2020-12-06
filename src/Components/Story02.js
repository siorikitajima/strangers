import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story02() {

    return (
      <div>
            <p className="storyText">A healthy mind equates to a healthy body. The importance of eating right, exercising, keeping an active lifestyle has always been directed towards ensuring that we have a healthy body free from ailments such as diabetes, high blood pressure, cardio-related diseases, etc. However, these habits are equally important for the mind. Interestingly one of the main causes of such medical conditions is due to stress. The day we come to a complete awareness where we start seeing mental illnesses on par with physical illnesses, mankind would take a huge leap into wholesome holistic wellness for itself.</p>
            <p className="storyText">On a side note, whilst researching for a film on the topic of dementia, an online article stroked a chord. An American woman in her 80s started speaking in German when after being diagnosed with Dementia, a language she never spoke after migrating to the US at the age of 6.  It was amazing to know how the human mind works and we all have to play our part in keeping our and one another’s healthy and sound.</p>
        <p className="right">
        Yuga J Vardhan<br/>Director/Producer
        </p>

        <Link to={location => `../../voices`} >
          <div className="helpLink">
          &#9666;&#9666; Read Other Voices
          </div>
        </Link>

        <hr/>

        <WatchBannerGeneral/>
        <div className="spacerM"></div>
      </div>
    );
  }

  export default Story02;