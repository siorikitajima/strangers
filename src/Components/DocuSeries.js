import React from 'react';
import Iframe from 'react-iframe';

function DocuSeries() {
    return(
        <div className="epContainer">
            <h2>Documentary Series: Strangers In My Head</h2>
            <p>One in four people in the world suffer from mental health issues at some point in their life. This is an elusive and lonely battle that few talks about; but many form opinions of. So, what constitutes our mental health? Why does society shun conversations about and around the states of mental health?</p>
            <p>To find answers, we step into the world of 4 individuals dealing with different mental health issues, and listened. Strangers In My Head is a 4-part documentary series that journals the perspective of each individual as they reveal the layers of their relationship with mental health issues and what being ‘normal’ means to them.</p>
            <p>This is an intimate introspection, an attempt to articulate the frustration, the guilt and the fatigue. Ultimately, through the many confusing voices and labels, they seek to assert their strength, identity and place in society.</p>

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

export default DocuSeries;