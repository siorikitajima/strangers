import React from 'react';
import {Link} from 'react-router-dom';
import {useSpring, animated} from 'react-spring';
import SoothingIcon from './SoothingIcon';

function AboutMain(){
    const homeLeftTrans = useSpring({
        transform: 'translateX(0%)', 
        from: {transform: 'translateX(-100%)'}});
    const homeRightTrans = useSpring({
        transform: 'translateX(0%)', 
        from: {transform: 'translateX(100%)'}});
    return(
        <div className="aboutMain">
            <div className="heroBanner">
                <h1>// Mental Health Awareness //</h1>
                <p>This Mini App was created along side the documentary series <b>'Strangers in my Head'</b>, in order to raise awareness of mental health issues in Singapore.</p>
            </div>

            <div className="homePanelsTop">
                <animated.div className="homePanel" style={homeLeftTrans}>
                <Link to="/scene">
                    <h2>Scene</h2>
                    <p><b>Scene</b> is a data visualization of ‘how many of us suffer’. The ratio of characters with mental issues in this generative animation reflects real world statistics.</p>
                </Link>
                </animated.div>
                <animated.div className="homePanel" style={homeRightTrans}>
                <Link to="/voices">
                    <h2>Voices</h2>
                    <p><b>Voices</b> is an exhibition of real messages from mental illness fighters to others. If you want to share your story, please drop a line.</p>
                    </Link>
                </animated.div>
            </div>
            <div className="homePanelsBottom">
                <animated.div className="homePanel" style={homeLeftTrans}>
                <Link to="/data">
                <h2>Data</h2>
                    <p><b>Data</b> is a collection of the data and resources about mental health in Singapore. You can find information, numbers and contact for help.</p>
                </Link>
                </animated.div>
                <animated.div className="homePanel" style={homeRightTrans}>
                    <h2>Soothing Mode</h2>
                    <p><b>Soothing Mode</b> is series of soothing animations with relaxing music. You can trigger this mode anytime when you feel anxious.</p>
                </animated.div>
            </div>
            <SoothingIcon/>
        </div>
    );
}

export default AboutMain;