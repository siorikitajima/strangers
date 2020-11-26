import React from 'react';
import Iframe from 'react-iframe';

function AboutShow() {
    return(
        <div className="aboutShow">
            <h2>Documentary Series: Strangers In My Head</h2>
            <p>Strangers in My Head follows 4 individuals as they quietly examine and search for their identity and place in society, amidst their ceaseless strife with different mental health issues.</p>
            <a href="../documentary/ep1">
            <div className="helpLink">
                See Episodes
            </div>
            </a>
            <Iframe url="https://player.vimeo.com/video/483380152"
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

export default AboutShow;