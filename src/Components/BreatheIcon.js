import React from 'react';
import {useSpring, animated} from 'react-spring';
// import React, {useState} from 'react';
// import {useTransition, useSpring, animated} from 'react-spring';
// import SoothingScreen from './SoothingScreen';
import {Link, useRouteMatch, useHistory} from 'react-router-dom';
import { isIOS } from "react-device-detect";

function BreatheIcon() {
    const soothingtransition = useSpring ({
        opacity: 1, transform: 'translateY(0%)',
        from: { opacity: 0, transform: 'translateY(100%)'},
    });
    // const [showSoothing, setshowSoothing] = useState(false);
    let match = useRouteMatch({
        path: '/breathe',
        strict: true,
        sensitive: true
      })

    return (
            <div>
                {match ? <CloseBreathe/> : <OpenBreathe/>}
            </div>
        );

    function OpenBreathe() {
        return(
            <Link to="/breathe">                        
                <animated.div 
                        className="soothingIcon" style={soothingtransition}
                        >
                            <h4>BREATHE</h4>
                </animated.div>
            </Link>
        );
    }
    
    function CloseBreathe() {
        let history = useHistory()
        if(isIOS) {
        return(
            <Link to="/scene">                        
                <animated.div 
                        className="soothingIcon" style={soothingtransition}>
                            <h4>BREATHE</h4>
                </animated.div>
            </Link>
        );
        } else {
            return(
                <Link to="/scene">                        
                    <animated.div 
                            className="soothingIcon" style={soothingtransition}
                            onClick={() => history.goBack()}
                            >
                                <h4>BREATHE</h4>
                    </animated.div>
                </Link>
            );
        }
    }
}
export default BreatheIcon;
