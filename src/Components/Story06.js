import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story06() {

    return (
      <div>
        <h1> &#47;&#47; An Average Morning. &#47;&#47; </h1>
            <p className="storyText">This post is not going to be pretty.</p>
            <p className="storyText">I crawled back into bed when I started to feel overwhelming feelings of unworthiness from underachievement. From guilt, and from shame.</p>
            <p className="storyText">Crawling back into bed and hiding under the blanket is like running back to your fort made out of sheets. If you sleep it off, you might not have to feel all the bad stuff - this is so clearly an unhealthy coping method, but this has been my long standing flight reaction. 30 years of wiring should be allowed 30 years of re-wiring, don't you think? But time is a funny thing, and we don't always sit on the same side.</p>
            <p className="storyText">Today, I'm hiding from my own disappointment and shame that I overslept. That oversleeping by 3 whole hours was a very real and controllable choice I made with every press of the snooze button.</p>
            <p className="storyText">I'm hiding from how I have nothing to show really, from the hours of being awake so far. All I did was search - always searching, looking for answers, but searching is an ongoing process and it does not always give you a tangible result you can show those who ask "So, what did you do today?" as though this might finally be the day my answer indicates productivity.</p>
            <p className="storyText">I'm hiding from how my mind, body and soul feel tired and how I really want to give up doing anything more for the rest of the day despite having been awake for barely 6 hours.</p>
            <p className="storyText">I'm hiding from the shame of feeling like I have no strength or qualities of perseverance.</p>
            <p className="storyText">I'm hiding from the pain of all this self-loathing that began hours before I even got out of bed.</p>
            <p className="storyText">And then, I'm terrified too - because if I, the one and only person who knows and lives my own struggles, can still judge myself this harshly, how much worse can/must others think of me?</p>
            <p className="storyText">And while sleep might offer me temporary reprieve, these thoughts will haunt me all through the (not so easy) process of trying to fall asleep.</p>
            <p className="storyText">And let's not kid ourselves, I'm also going to be very busy wondering what those who see me go back to bed in the middle of the day might/must/can be thinking too.</p>
            <p className="storyText">So many thoughts, and none of which are particularly helpful or kind.</p>
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

  export default Story06;