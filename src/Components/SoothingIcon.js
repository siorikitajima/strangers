import React, {useState} from 'react';
import {useTransition, useSpring, animated} from 'react-spring';
import SoothingScreen from './SoothingScreen';
// import P5Wrapper from 'react-p5-wrapper';
// import SketchZero from './SketchZero';
// import SketchOne from './SketchOne';

function SoothingIcon() {
    const [showSoothing, setshowSoothing] = useState(false);
    // const [sketchLink, setSketch] = useState('SketchZero');

    const soothingtransition = useSpring ({
        opacity: 1, transform: 'translateY(0%)',
        from: { opacity: 0, transform: 'translateY(100%)'},
    });

    // const showSoothingtransition = useTransition(showSoothing, null, {
    //     from: { opacity: 0, transform: 'translateY(100%)'},
    //     enter: { opacity: 1, transform: 'translateY(0%)'},
    //     leave: { opacity: 0, transform: 'translateY(100%)'},
    // });
    const soothingScreentransition = useTransition(showSoothing, null, {
        from: { transform: 'translateX(100%)'},
        enter: { transform: 'translateX(0%)'},
        leave: { transform: 'translateX(100%)'},
    });

    return (
        <div>
    <animated.div 
            className="soothingIcon" style={soothingtransition}
            onClick={() => setshowSoothing(!showSoothing)}>
                <h4>SOOTHING MODE</h4>
    </animated.div>
    {/* {
        showSoothingtransition.map(({ item, key, props}) =>
        item && 
        <animated.div 
        key={key} style={props}
        className="soothingModePanel">
            <P5Wrapper 
             sketch={SketchZero}
            />
        </animated.div>)
    } */}
    {
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
    }
    </div>
    );
}
export default SoothingIcon;
