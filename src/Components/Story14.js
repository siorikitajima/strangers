import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story14() {
    return (
      <div>
        <h1> &#47;&#47; JOY &#47;&#47; </h1>
            <p className="storyText">I was at a house party celebrating Canada Day
            <br/>when I met a woman named Joy.
            <br/>I said: “It’s a joy to meet you Joy.”
            <br/>She beamed at me,
            <br/>then said: “I am manic-depressive.”
            <br/>At once the conversation dried up.
            <br/>Not knowing what to say
            <br/>made an excuse:
            <br/>“I have to call my girlfriend.”
            <br/>A lie.
            <br/>I avoided her staying upstairs
            <br/>while she waited lost in the party below.
            <br/>She reminded me of a dog I once had.
            <br/>Always happy to see me,
            <br/>jumping and licking my face,
            <br/>overwhelmed by his affection,
            <br/>I fled upstairs, afraid to come down.
            <br/>Eventually my mother lost her patience:
            <br/>“OK, we’ll give him away to the S.P.C.A.”
            <br/>She made me accompany her.
            <br/>I carried the dog in my arms.
            <br/>It looked at me with the saddest eyes,
            <br/>wavering on the brink of tears.
            <br/>He spoke to me:
            <br/>“Don’t leave me.”
            <br/>I swear I did not imagine it.
            <br/>By the time we arrived at the S.P.C.A,
            <br/>I said: “Mum, I change my mind.
            <br/>I want to keep him.”
            <br/>“No. After all the trouble
            <br/>you’ve caused me,
            <br/>dragging me all the way here,
            <br/>you don’t deserve a dog.”
            <br/>I am sorry Joy.
            <br/>I was afraid.
            <br/>I didn’t understand
            <br/>until I too was diagnosed manic-depressive
            <br/>eight years ago on Valentine’s Day of all days.
            <br/>This is the way I feel every time
            <br/>I am led back to the psych ward,
            <br/>an obedient dog
            <br/>crying to God, don’t leave me.</p>
        <p className="right">
        Mad Love & Love Madly, Kagan Goh<br/>
            <a href="http://kagangoh.com/" rel="noopener noreferrer" target="_blank">kagangoh.com</a><br/>
            <a href="https://www.survivingsamsara.com/" rel="noopener noreferrer" target="_blank">survivingsamsara.com</a>
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

  export default Story14;