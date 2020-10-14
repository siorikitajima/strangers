import React from 'react';
// import {useTransition, animated} from 'react-spring';
import {useSpring, animated} from 'react-spring';
import numberAnimation from '../Images/numbers-animation.gif';
// import PBLogoL from '../Images/patternbasedlogo-light.png';
// import VeryLogoL from '../Images/verylogo-light.png';

function SceneModal() {
    // const [showModal, setShowModal] = useState(true);

    // const modalTransition = useTransition(showModal, null, {
    //     from: { opacity: 1},
    //     enter: { opacity: 1},
    //     leave: { opacity: 0},
    // });
    // const screenTransition = useTransition(showModal, null, {
    //     from: { opacity: 1},
    //     enter: { opacity: 1},
    //     leave: { opacity: 0},
    // });
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setShowModal(!showModal);
    //     }, 5000);
    //     return () => clearTimeout(timer);
    //   }, []);

    const modalSpring = useSpring ({
        opacity: 0,
        from: { opacity: 1},
        config: { duration: 1000},
        delay:4000
    });

    return (
        <animated.div
        style={modalSpring}
        className="modalScreen">
            <img src={numberAnimation} alt="number-Animation"/>
        </animated.div>
    // <div>
    //     {/* {
    //     modalTransition.map(({ item, key, props}) =>
    //     item &&  */}
    //     <animated.div 
    //     // key={key} 
    //     // style={props}
    //     style={modalSpring}
    //     className="sceneModal"
    //     // onClick={() => {
    //     //     setShowModal(!showModal);
    //     // }}
    //     >
    //         <img src={numberAnimation} alt="number-Animation"/>
    //        {/* <h1>Mental Health Awareness</h1>
    //        <div className="dots">
    //            <div className="aDot"></div>
    //            <div className="aDot"></div>
    //            <div className="aDot"></div>
    //            <div className="aDot"></div>
    //            <div className="aDot"></div>
    //        </div> */}
    //        {/* <p>This Mini App was created along side the documentary series <b>'Strangers in my Head'</b>, in order to raise awareness of mental health issues in Singapore.</p>
    //        <p>This generative animation is a data visualization of ‘how many of us suffer’.</p> */}
    //        {/* <div className="logosSM">
    //         <img src={PBLogoL} alt="PB logo"/>
    //         <img src={VeryLogoL} alt="Very logo"/>
    //         </div> */}
    //     </animated.div>)
    //     {/* } */}
    //     {/* { */}
    //      {/* screenTransition.map(({ item, key, props}) =>
    //      item &&  */}
    //     <animated.div 
    //     // key={key} style={props}
    //     style={modalSpring}
    //     className="modalScreen"
    //     // onClick={() => {
    //     //     setShowModal(!showModal);
    //     // }}
    //     >
    //     </animated.div>
    //      {/* )
    //      } */}
    // </div>
    );
}
export default SceneModal;
