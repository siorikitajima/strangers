import React from 'react';
import Iframe from 'react-iframe';

function DocuSoundtrack() {
    return(
        <div className="epContainer">
            <h2>Strangers In My Head Soundtrack</h2>
            <p className="infoText">This is the extended soundtrack to <i>Strangers In My Head</i> composed by <a href="https://www.josephminadeo.com/" rel="noopener noreferrer" target="_blank">Joseph Minadeo</a>. This soundtrack is composed of intimate piano along with subtle strings and synthesizers aimed at a fairly peaceful and quiet tone as if written to calm the characters rather than overly emphasise their sometimes discordant mental states. As with the subjects of the films, while there is no shortage of melancholy and anxiety, there are also moments of serenity and clarity. The soundtrack also includes extended versions of the <i>Breathe</i> section in this site meant to induce a peaceful state. We hope you enjoy it.</p>

            <Iframe url="https://bandcamp.com/EmbeddedPlayer/album=2194277061/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/"
                width="640"
                height = "360"
                display="initial"
                position="relative"
                allow="autoplay; fullscreen" allowfullscreen
                frameBorder="none"
                className = "embedAudioIframe"
                styles={{margin: "0", border: "none"}}/>

            <a href="https://albums.patternbased.com/album/strangers-in-my-head-soundtrack" target="_blank" rel="noopener noreferrer">
            <div className="helpLink">
                More Info
            </div>
            </a>
        </div>
    );
}

export default DocuSoundtrack;