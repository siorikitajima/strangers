import React from 'react';
import AGirl from '../Images/aGirl.svg';

function AboutTop() {
    return(
        <div>
            <img className="aboutImages" src={AGirl} alt="aGirl"/>
            <h1>About "Strangers in my Head"</h1>
            <p><b>Mini-App: Strangers in my Head</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
    );
}

export default AboutTop;