import React from 'react';
import Iframe from 'react-iframe';

function AboutShow() {
    return(
        <div className="aboutShow">
            <h2>Documentary Series: Strangers in my Head</h2>
            <p><b>Documentary Series: Strangers in my Head</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <a href="#/documentary/ep1">
            <div className="helpLink">
                See Episodes
            </div>
            </a>
            <Iframe url="https://player.vimeo.com/video/175612072"
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

export default AboutShow;