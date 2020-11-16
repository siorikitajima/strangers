import React from 'react';
import PostVoice from '../Components/PostVoice';
import VoicesPosts from '../Components/VoicesPosts';

function Voices() {

      return (
                <div className="voices">

                <h1>&#47;&#47; Voices from Strangers &#47;&#47;</h1>
    
                <VoicesPosts/>
    
                <PostVoice />
                
            </div>
      )
      
}

export default Voices;