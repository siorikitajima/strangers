import React from 'react';
import PostVoice from '../Components/PostVoice';
import VoicesPosts from '../Components/VoicesPosts';

function Voices() {

      return (
            <div className="voices">
            <h1>&#47;&#47; Tell Me, Stranger &#47;&#47;</h1>
            <p className="center">Add your voice with a post.</p>
            <VoicesPosts/>
            <PostVoice />
            </div>
      )
      
}

export default Voices;