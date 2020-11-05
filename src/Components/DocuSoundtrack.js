import React from 'react';
import Iframe from 'react-iframe';

function DocuSoundtrack() {
    return(
        <div className="epContainer">
            <h2>Strangers in my Head Soundtrack</h2>
            <p><b>Soundtrack: Strangers in my Head</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <Iframe url="https://bandcamp.com/EmbeddedPlayer/album=1216646502/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/"
                width="640"
                height = "360"
                display="initial"
                position="relative"
                allow="autoplay; fullscreen" allowfullscreen
                frameBorder="none"
                className = "embedAudioIframe"
                styles={{margin: "0", border: "none"}}/>

        </div>
    );
}

export default DocuSoundtrack;