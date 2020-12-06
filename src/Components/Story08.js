import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story08() {

    return (
      <div>
        <h1> &#47;&#47; Intense highs/Crushing lows &#47;&#47; </h1>
            <p className="storyText">How painful it is to be so overwhelmed</p>
            <p className="storyText">That you feel crippled and paralysed, unable to make sense</p>
            <p className="storyText">of what is happening to you and why.</p>
            <p className="storyText">A veritable tornado of nothing and everything, storming your entirety.</p>
            <p className="storyText">How painful it is to know that you are your only and worst enemy</p>
            <p className="storyText">That the enemy is within, a sure and certain part of you.</p>
            <p className="storyText">A terrifying, unidentifiable part of you that destroys and defeats</p>
            <p className="storyText">and parades your mangled remnants with triumphant, repulsive victory.</p>
            <p className="storyText">Science tells me that I am ill - a disease-stricken victim whose plight is not my fault</p>
            <p className="storyText">But that of biology and circumstance, trauma and scarring.</p>
            <p className="storyText">Spirituality tells me that everything is energy</p>
            <p className="storyText">And that hope is abound, for we are not built to suffer - we</p>
            <p className="storyText">are built to thrive.</p>
            <p className="storyText">How painful it is to not know your identity,</p>
            <p className="storyText">To be stuck between worlds</p>
            <p className="storyText">that seemingly clash, but together agree that</p>
            <p className="storyText">in the end, you are your only healer.</p>
            <p className="storyText">Endless -</p>
            <p className="storyText">How painful it is to constantly lose battles against yourself.</p>
            <p className="storyText">To only ever have been able to stare at the ceiling of awareness despite years of slamming yourself against it.</p>
            <p className="storyText">Bruised black and blue, desperate to walk further down the path of recovery -</p>
            <p className="storyText">but equally tired and injured</p>
            <p className="storyText">to persist.</p>
            <p className="storyText">Feeling overwhelmed, for me, is feeling a total and sudden loss of control over knowing who I am, what is happening to me, and what I can do to bring myself home.</p>
            <p className="storyText">You just feel helpless.</p>
            <p className="storyText">You question your sanity.</p>
            <p className="storyText">You feel sadness.</p>
            <p className="storyText">Blinding lights pinging, sounds clashing, heart racing and cruel voices screaming.</p>
            <p className="storyText">How painful it is that you can’t move, but neither can you</p>
            <p className="storyText">be.</p>
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

  export default Story08;