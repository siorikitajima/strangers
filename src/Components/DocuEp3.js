import React from 'react';
import Iframe from 'react-iframe';

function DocuEp3() {

    return(
        <div className="epContainer">
            <h2>Episode 3 - Karen</h2>
            <p className="dataText">
            As a caregiver to her son who has been dealing with Depression and Asperger Syndrome, Karen has devoted a large part of her life as a mother, a nurse, a counselor and a constant companion. Through her caregiving journey, she has been overwhelmed with worries for her son and uncertainties of the future. Aside from self-blame, she also faced harsh criticisms that she had been derelict in her duties as a mother.</p>
            <p>With most of her energy devoted to the caring of her son, over time, Karen began to feel trapped and lonely- the caregiver burnout.</p>
            <p>With the help of Caregivers Alliance Limited (CAL), Karen became aware of the importance of having a network of support. As her son’s condition improved, Karen is now helping to care for other caregivers. And at times when things get too much for her, Karen has to relearn how to take care of herself.</p>
            <p><b>Episode 3</b> Premiering <b>23 Dec 2020</b></p>

            <Iframe url="https://player.vimeo.com/video/477453845"
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

export default DocuEp3;