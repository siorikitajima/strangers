import React from 'react';
import {useSpring, animated} from 'react-spring';
// import React, {useState} from 'react';
// import {useTransition, useSpring, animated} from 'react-spring';
// import SoothingScreen from './SoothingScreen';
import {Link} from 'react-router-dom';

function SoothingIcon() {
    // const [showSoothing, setshowSoothing] = useState(false);

    const soothingtransition = useSpring ({
        opacity: 1, transform: 'translateY(0%)',
        from: { opacity: 0, transform: 'translateY(100%)'},
    });

    // const soothingScreentransition = useTransition(showSoothing, null, {
    //     from: { transform: 'translateX(100%)'},
    //     enter: { transform: 'translateX(0%)'},
    //     leave: { transform: 'translateX(100%)'},
    // });

    return (
        <div>
            <Link to="/breathe">                        
                <animated.div 
                        className="soothingIcon" style={soothingtransition}
                        // onClick={() => setshowSoothing(!showSoothing)}
                        >
                            <h4>BREATHE</h4>
                </animated.div>
            </Link>
        {/* {
            soothingScreentransition.map(({ item, key, props}) =>
            item && 
            <animated.div 
            key={key} style={props}
            className="soothingScreen">
            <SoothingScreen
            //    sketchZero={() => setSketch('SketchZero')}
            //    sketchOne={() => setSketch('SketchOne')}
            //    sketchTwo={() => setSketch('SketchTwo')}
            />
            </animated.div>)
        } */}
        </div>
    );
}
export default SoothingIcon;
