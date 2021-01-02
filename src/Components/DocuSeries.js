import React from 'react';
import Iframe from 'react-iframe';

function DocuSeries() {
    return(
        <div className="epContainer">
            <h2>One in Four</h2>
            <p>Person in the world suffer from mental health issues at some point in their life. This is an elusive and lonely battle that few talk about but many form opinions of. So, what constitutes our mental health? Why does society shun conversations about and around the states of mental health?</p>
            <p>To find answers, we step into the world of four individuals dealing with different mental health issues, and observe. <i>Strangers In My Head</i> is a 4-part documentary series that journals the perspective of each individual as they reveal the layers of their relationship with mental health issues and what being “normal” means to them.</p>
            <p>This is an intimate introspection, an attempt to articulate the frustration, the guilt, and the fatigue. Ultimately, through the many confusing voices and labels, they seek to assert their strength, identity, and place in society.</p>

            <Iframe url="https://player.vimeo.com/video/495782205"
                width="640"
                height = "360"
                display="initial"
                position="relative"
                allow="autoplay; fullscreen" allowfullscreen
                frameBorder="none"
                className = "embedVideoIframe"
                styles={{margin: "0", border: "none"}}/>

            <a href="https://www.channelnewsasia.com/news/video-on-demand/strangers-in-my-head/" target="_blank" rel="noopener noreferrer">
            <div className="helpLink">
                Watch Online
            </div>
            </a>

        </div>
    );
}

export default DocuSeries;