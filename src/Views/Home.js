import React from 'react';
import {Link} from 'react-router-dom';
import {useTransition, useSpring, animated} from 'react-spring';
import SoothingIcon from '../Components/SoothingIcon';

function Home(){
    const homeLeftTrans = useSpring({
        transform: 'translateX(0%)', 
        from: {transform: 'translateX(-100%)'}});
    const homeRightTrans = useSpring({
        transform: 'translateX(0%)', 
        from: {transform: 'translateX(100%)'}});
    return(
        <div className="home">
            <div className="homePanelsTop">
                <animated.div className="homePanel" style={homeLeftTrans}>
                <Link to="/scene">
                    <h2>Scene</h2>
                    <p><b>Scene</b> is dummy text of the printing and typesetting industry, unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Link>
                </animated.div>
                <animated.div className="homePanel" style={homeRightTrans}>
                <Link to="/voices">
                    <h2>Voices</h2>
                    <p><b>Voices</b> is dummy text of the printing and typesetting industry, unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Link>
                </animated.div>
            </div>
            <div className="heroBanner">
                <h1>Mental Health Awareness in Singapore</h1>
                <p>This Mini App is created along with a documentary series <b>'Strangers in my Head'</b>, in order to raise awareness of mental health issues in Singapore. If you like it, please share.</p>
                <button><Link to="/about">Learn More about the project</Link></button>
            </div>
            <div className="homePanelsBottom">
                <animated.div className="homePanel" style={homeLeftTrans}>
                <Link to="/data">
                <h2>Data</h2>
                    <p><b>Data</b> is dummy text of the printing and typesetting industry, unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Link>
                </animated.div>
                <animated.div className="homePanel" style={homeRightTrans}>
                    <h2>Soothing Mode</h2>
                    <p><b>Soothing Mode</b> is dummy text of the printing and typesetting industry, unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </animated.div>
            </div>
            <SoothingIcon/>
        </div>
    );
}

export default Home;