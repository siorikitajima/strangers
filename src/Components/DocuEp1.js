import React from 'react';
import Iframe from 'react-iframe';

function DocuEp1() {

    return(
        <div className="epContainer">
            <h2>Episode 1 - Le Yong</h2>
            <p className="dataText">
            Youthful and outgoing, one can hardly tell that Le Yong battles with a mental health issue. <i>Body Dysmorphic Disorder</i> (BDD) is an under-diagnosed condition, characterised by obsessive and intrusive thoughts of perceived flaws in a person’s appearance. Unaware of this mental health disorder at an earlier age, Le Yong has had cosmetic surgeries to correct his perceived flaws. However, surgery has not fixed his body image issues.</p>
            <p>Every day, Le Yong needs to make an extra effort to manage the distorted image he sees of himself and the feelings of shame for having these obsessive and “vain” thoughts. As he feels the pressure to measure up to society’s standards of what it means to be normal and the perceived expectations of what a man should achieve, Le Yong dreams of a simple life free from BDD.</p>
            <p><b>Episode 1</b> Premiering <b>9 Dec 2020</b></p>

            <Iframe url="https://player.vimeo.com/video/477453809"
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

export default DocuEp1;