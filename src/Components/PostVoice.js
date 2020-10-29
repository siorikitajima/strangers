import React, {useState} from 'react';
import {useTransition, useSpring, animated} from 'react-spring';
import PostOption from './PostOption';
import PostIcon from '../Images/infoIcons-voices.svg';

function PostVoice(props) {
    const [showPostOpt, setShowPostOpt] = useState(false);
    const [postClicked, setPostClicked] = useState(false);

    function handleChange(newValue) {
        setShowPostOpt(newValue);
      }
    const postVoicetransition = useSpring ({
        opacity: 1, transform: 'translateY(0%)',
        from: { opacity: 0, transform: 'translateY(100%)'},
    });

    const promptPostTransition = useSpring ({
        to: async (next) => {
            await next({opacity: 1, transform: 'translateX(0%)', background: 'rgb(34, 34, 34)'})
            await next({opacity: 1, transform: 'translateX(0%)', background: 'rgb(255, 53, 98)',config: { duration: 500 }})
            await next({opacity: 1, transform: 'translateX(0%)', background: 'rgb(255, 53, 98)',config: { duration: 1000 }})
            await next({opacity: 1, transform: 'translateX(0%)', background: 'rgb(34, 34, 34)',config: { duration: 500 }})
            await next({opacity: 1, transform: 'translateX(-100%)', background: 'rgb(34, 34, 34)'})
          },
        from: { opacity: 0, transform: 'translateX(-100%)', background: 'rgb(34, 34, 34)'},
        delay: 5000,
    });

    const postOptTransition = useTransition(showPostOpt, null, {
        from: { transform: 'translateY(110%)'},
        enter: { transform: 'translateY(0%)'},
        leave: { transform: 'translateY(110%)'},
    });

    return (
    <div>
        <animated.div 
        className="postvoice"
        style={postVoicetransition}
        onClick={() => {
            setShowPostOpt(!showPostOpt);
            setPostClicked(true);
        }}
        >
            <h4>POST YOURS</h4>
        </animated.div>

        <animated.div className="promptPost"
        onClick={() => {
            setShowPostOpt(!showPostOpt);
            setPostClicked(true);
        }}
        style={postClicked ? null : promptPostTransition}

        >
            <img src={PostIcon} alt="Post icon"/>
            <h3>POST YOURS</h3>
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
