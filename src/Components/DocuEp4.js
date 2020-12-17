import React from 'react';
import Iframe from 'react-iframe';

function DocuEp4() {

    return(
        <div className="epContainer">
            <h2>Episode 4 - Jess</h2>
            <p className="dataText">Jess is a passionate pursuer of the arts. She is a Creative Director and founded her very own visual arts studio. She is a freelance hand poke tattoo artist and a co-partner of a vintage wear online retail site. Jess is also managing co-morbid mental health issues and she has chosen to confront the stigma, rather than retreat from judgements.</p>
            <p>Jess had been through some trying times in her childhood years which triggered co-morbid mental health issues such as <i>Anxiety, Post-Traumatic Stress Disorder, Dissociative Identity Disorder</i> to name a few. There were many times when she was destructive, felt lost and wanted to give up.</p>
            <p>Although the healing process is long and slow, Jess’s outlook in life has shifted. She has reconciled and is coping much better with most of the mental health issues and she is here to share her journey. Behind her artistic pursuits and appearance, conceals the vulnerability and perseverance of a girl that is just trying to be herself and be accepted as she is.</p>
            <p><b>Episode 4</b> Premiering <b>30 Dec 2020</b></p>

            <Iframe url="https://player.vimeo.com/video/480105305"
                width="640"
                height = "360"
                display="initial"
                position="relative"
                allow="autoplay; fullscreen" allowfullscreen
                frameBorder="none"
                className = "embedVideoIframe"
                styles={{margin: "0", border: "none"}}/>
                
            {/* <a href="https://www.channelnewsasia.com/news/video-on-demand/strangers-in-my-head/" target="_blank" rel="noopener noreferrer"> */}
            <div className="helpLink disable">
                Watch Online
            </div>
            {/* </a> */}
        </div>
    );
}

export default DocuEp4;