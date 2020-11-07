import React from 'react';
import {Link} from 'react-router-dom';
import {useSpring, animated} from 'react-spring';

function AboutMain(){
    const homeLeftTrans = useSpring({
        config: { duration: 250 },
        transform: 'translateX(0%)', 
        from: {transform: 'translateX(-100%)'}});
    const homeRightTrans = useSpring({
        config: { duration: 250 },
        transform: 'translateX(0%)', 
        from: {transform: 'translateX(100%)'}});
    return(
        <div className="aboutMain">
            <div className="heroBanner">
                <h1>&#47;&#47; Hello Stranger &#47;&#47;</h1>
                <p>This is a Singapore- based mental health resource site created alongside the <Link to="/documentary/series">documentary series <b>Strangers in My Head</b></Link>.</p>
            </div>

            <div className="homePanelsTop">
                <animated.div className="homePanel" style={homeLeftTrans}>
                <Link to="/perspective">
                    <h3>Perspective</h3>
                    <p>Perspective captures visually the short data stories of how many among us are affected. Statistics are based on real-world numbers.</p>
                </Link>
                </animated.div>
                <animated.div className="homePanel" style={homeRightTrans}>
                <Link to="/voices">
                    <h3>Voices</h3>
                    <p>A message board to make the journey less lonely. Include your thoughts and experiences with a post.</p>
                    </Link>
                </animated.div>
            </div>
            <div className="homePanelsBottom">
                <animated.div className="homePanel" style={homeLeftTrans}>
                <Link to="/explore/general">
                <h3>Explore</h3>
                    <p>Shareable information, statistics, insights and contact resources for managing mental health in Singapore.</p>
                </Link>
                </animated.div>
                <animated.div className="homePanel" style={homeRightTrans}>
                <Link to="/breathe">
                    <h3>Breathe</h3>
                    <p>A series of soothing animations with relaxing music. Trigger this mode anytime you feel anxious.</p>
                </Link>
                </animated.div>
            </div>
        </div>
    );
}

export default AboutMain;