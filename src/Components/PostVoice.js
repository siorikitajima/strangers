import React, {useState} from 'react';
import {useTransition, useSpring, animated} from 'react-spring';
import PostOption from './PostOption';

function PostVoice(props) {
    const [showPostOpt, setShowPostOpt] = useState(false);
    function handleChange(newValue) {
        setShowPostOpt(newValue);
      }
    const postVoicetransition = useSpring ({
        opacity: 1, transform: 'translateY(0%)',
        from: { opacity: 0, transform: 'translateY(100%)'},
    });

    const postOptTransition = useTransition(showPostOpt, null, {
        from: { transform: 'translateY(110%)'},
        enter: { transform: 'translateY(0%)'},
        leave: { transform: 'translateY(110%)'},
    });

    return (
    <div>
        <animated.div 
        className="postvoice" style={postVoicetransition}
        onClick={() => {
            setShowPostOpt(!showPostOpt);
        }}
        >
            <h4>POST YOURS</h4>
        </animated.div>
        {
        postOptTransition.map(({ item, key, props}) =>
        item && 
        <animated.div 
        key={key} style={props}
        className="postOption">
           <PostOption showPostOpt={showPostOpt} onChange={handleChange}/>
        </animated.div>)
        }
    </div>
    );
}
export default PostVoice;
