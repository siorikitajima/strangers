import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story10() {

    return (
      <div>
        <h1> &#47;&#47; Superhuman &#47;&#47; </h1>
            <p className="storyText">In your wounded, raw and vulnerable state, you give in to their hopeful, almost pleading coaxing. You hear how much they want you to open up and share something about what you are going through with them - you have people who love you and want to help. It is beautiful, you are blessed.</p>
            <p className="storyText">In your heart of hearts though, you know that this is for them, and not for you. The years have taught you that you speak different languages. In the dark days that depression decides to show up at your side again, taunting you that it was just biding its time, you exist in a foreign land. Nothing you say is going to translate, and the vast majority of what you are going to hear is going to make you feel worse and even more debilitatingly alone. The people who are there feel more connected to you, but you just end up feeling further and further away from them.</p>
            <p className="storyText">When your mind is not yours, and you feel like breathing is in itself a chore because of that weighted, heavy, dark blanket of depression that has wrapped itself around you, choking and compressing the parts of you that need to expand, what can you really share that is going to sound human?</p>
            <p className="storyText">People say that being vulnerable and opening yourself up to others is courageous.</p>
            <p className="storyText">It is. And we should.</p>
            <p className="storyText">But if you put others first and do this for them in the throes of your suffering,</p>
            <p className="storyText">I call it superhuman.</p>
        <p className="right">
        Dheesha
        </p>

        <Link to={location => `../../voices`} >
          <div className="helpLink">
          &#9666;&#9666; Read Other Voices
          </div>
        </Link>

        <hr/>

        <WatchBannerGeneral/>
        <div className="spacerM"></div>
      </div>
    );
  }

  export default Story10;