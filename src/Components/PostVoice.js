import React, {useState} from 'react';
import {useTransition, useSpring, animated} from 'react-spring';
import PostOption from './PostOption';

function PostVoice(props) {
    const [showPostOpt, setShowPostOpt] = useState(false);
    const postVoicetransition = useSpring ({
        opacity: 1, transform: 'translateY(0%)',
        from: { opacity: 0, transform: 'translateY(100%)'},
    });

    const postOptTransition = useTransition(showPostOpt, null, {
        from: { transform: 'translateX(-100%)'},
        enter: { transform: 'translateX(0%)'},
        leave: { transform: 'translateX(-100%)'},
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
           <PostOption/>
        </animated.div>)
        }
    </div>
    );
}
export default PostVoice;
