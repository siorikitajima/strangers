import React from 'react';
import Iframe from 'react-iframe';

function DocuSeries() {
    return(
        <div className="epContainer">
            <h2>Strangers in my Head</h2>
            <p><b>Documentary Series: Strangers in my Head</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/>
                <b>The series</b> releasing on <b>December 9</b>, 2020 12:00 AM SGT
            </p>

            <Iframe url="https://player.vimeo.com/video/175612072"
                width="640"
                height = "360"
                display="initial"
                position="relative"
                allow="autoplay; fullscreen" allowfullscreen
                frameBorder="none"
                className = "embedVideoIframe"
                styles={{margin: "0", border: "none"}}/>

            <a href="#/help/alcohol-abuse">
            <div className="helpLink">
                Watch Online
            </div>
            </a>

        </div>
    );
}

export default DocuSeries;