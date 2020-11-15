import React from 'react';
import Iframe from 'react-iframe';

function DocuEp1() {

    return(
        <div className="epContainer">
            <h2>Episode #1 Title</h2>
            <p className="dataText">
                <b>Episode 1 Synopsis here.</b> The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here.<br/>
                <b>Episode 1 "Episode1 title"</b> releasing on <b>December 9</b>, 2020 12:00 AM SGT
            </p>

            <Iframe url="https://player.vimeo.com/video/477453809"
                width="640"
                height = "360"
                display="initial"
                position="relative"
                allow="autoplay; fullscreen" allowfullscreen
                frameBorder="none"
                className = "embedVideoIframe"
                styles={{margin: "0", border: "none"}}/>

            {/* <a href="#/help/alcohol-abuse"> */}
            <div className="helpLink disable">
                Coming Soon on CNA
            </div>
            {/* </a> */}
        </div>
    );
}

export default DocuEp1;