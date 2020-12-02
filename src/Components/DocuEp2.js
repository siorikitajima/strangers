import React from 'react';
import Iframe from 'react-iframe';

function DocuEp2() {

    return(
        <div className="epContainer">
            <h2>Episode 2 - Dheesha</h2>
            <p className="dataText">
            Dheesha was a happy and outgoing child. She was energetic and excelled in school. She was never “like this” until she first experienced depression and anxiety whilst studying in university, and later, diagnosed with <i>Borderline Personality Disorder</i> (BPD). BPD has impacted the way Dheesha thinks and feels about herself and others, it has caused her to be uncertain of her own interests. BPD has sequestered her within an invisible wall from the world and she wants to get out.</p>
            <p>Over the years, as Dheesha learns to cope with her mental health issues, she has had to set aside some plans, goals, and dreams. But she is far from giving them up. Instead, Dheesha is meticulous and contemplative in finding ways to move forward. With a smile, Dheesha tries to conceal her feelings of precariousness and musters up the determination to keep trying. Because for Dheesha, she has to scale a wall and journey a much longer route than others in order to get to where she wants.</p>
            <p><b>Episode 2</b> Premiering <b>16 Dec 2020</b></p>

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