import React, {useState} from 'react';
import AVoice from '../Components/AVoice';
import PostVoice from '../Components/PostVoice';
import SoothingIcon from '../Components/SoothingIcon';

function Voices() {
    const [hideSoothing, setHideSoothing] = useState(false);
    function handleChange(newValue) {
        setHideSoothing(newValue);
      }
    const hideSoothingIcon = ()=>{
        if(hideSoothing === true){
            return null
        } else {
            return <SoothingIcon value={hideSoothing} onChange={handleChange} />;
        }
      };
    return(
        <div className="voices">
            <h1>Voices from my Strangers to others</h1>
            <div className="voiceContainer">
            <AVoice />
            <AVoice />
            <AVoice />
            <AVoice />
            <AVoice />
            <AVoice />
            <AVoice />
            <AVoice />
            <AVoice />
            <AVoice />
            <AVoice />
            <AVoice />
            </div>
            <PostVoice
             value={hideSoothing} onChange={handleChange} 
             />
            {hideSoothingIcon()}
        </div>
    );
}

export default Voices;