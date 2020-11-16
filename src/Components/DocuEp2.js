import React from 'react';
import Iframe from 'react-iframe';

function DocuEp2() {

    return(
        <div className="epContainer">
            <h2>Episode #2 Title</h2>
            <p className="dataText">
                <b>Episode 2 Synopsis here.</b> The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here.<br/>
                <b>Episode 2 "Episode1 title"</b> releasing on <b>December 16</b>, 2020 12:00 AM SGT
            </p>

            <Iframe url="https://player.vimeo.com/video/477453826"
                width="640"
                height = "360"
                display="initial"
                position="relative"
                allow="autoplay; fullscreen" allowfullscreen
                frameBorder="none"
                className = "embedVideoIframe"
                styles={{margin: "0", border: "none"}}/>
                
            {/* <a href="../help/alcohol-abuse"> */}
            <div className="helpLink disable">
                Coming Soon on CNA
            </div>
            {/* </a> */}
        </div>
    );
}

export default DocuEp2;