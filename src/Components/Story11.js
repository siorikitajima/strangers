import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story11() {

    return (
      <div>
        <h1> &#47;&#47; A random note for fellow warriors in therapy. &#47;&#47; </h1>
            <p className="storyText">You are braver and stronger than you think</p>
            <p className="storyText">Because when I see you getting help,</p>
            <p className="storyText">I know that what you are actually doing is mustering insane amounts of strength and resilience to focus and sit with your demons week after week, to uncover old wounds that never properly healed, and to show fresh ones that others cannot see.</p>
            <p className="storyText">You are digging into years and layers of pain, and giving them voices that they never used to have. You are exploring deep traumas that you wish you never had to think about again.</p>
            <p className="storyText">And outside all the hours of session work, you still wake up and function as best as you can - fresh, raw and vulnerable from the perpetuity of the process.</p>
            <p className="storyText">Getting help means that you are doing extremely hard work.</p>
            <p className="storyText">You fight through exhaustion and feeling extraordinarily drained. Your courage in bringing deep pain to the surface means that you are willing to fight through your days feeling extra sensitive to triggers caused by the ongoing process.</p>
            <p className="storyText">I think that in all that soft and open vulnerability, you are being so incredibly strong.</p>
            <p className="storyText">One day, you will see how wonderfully you have grown through it all,</p>
            <p className="storyText">and I can't wait for when everything you are doing finally brings you</p>
            <p className="storyText">the relief you so valiantly seek.</p>
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

  export default Story11;