import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story12() {

    return (
      <div>
            <p className="storyText">It's been 11 months, a month more to celebrating a year relationship with my girlfriend struggling with a borderline personality disorder. Most people tend to make conclusions of the difficulties in my relationship and very often the general crowd are quick to feel pity for a person like me being in a challenging relationship. I ask these people, does it mean someone with mental illness is not deserving of love and affection?</p>
            <p className="storyText">Speaking from my experience, and my experience alone, I guess one can never be mentally prepared for challenges with such a person like my GF.</p>
            <p className="storyText">When I first met my GF, she was open to sharing her condition, I thought she was brave for telling. As we spent more time together as friends, very often, I found moments in which she exuded so much kindness, such as liveliness and deep wisdom from our chats. I found it so strange that I struggled to find such qualities from everyday people especially family and friends.</p>
            <p className="storyText">Also through our interactions, I sensed she lived in constant guilt, having put the people around her in uncomfortable situations, either not showing up for a meeting/events, being highly introverted, or just not being present in people's life.</p>
            <p className="storyText">Knowing all the signs and symptoms, I felt I was brave enough to enter into this relationship, and whatever came, I would face it. To me, I've never seen my GF as the problem, more so, I see her with a problem. It's very clear, she struggles to cure a problem that has been generated within her. I don't have solutions, but I have suggestions. We try to work around the issues.</p>
            <p className="storyText">It can be very tiring sometimes thinking of ways around the mood dips. Some days coming home after a long day of work and seeing your GF curled up in bed the same way you left her 12 hours ago can stir up a pot of negative emotions. And seeing such sight can trouble the mind to raise questions about the relationship. But it's important to pause and be objective. Do I have doubts about my relationship when we're happy together? No! I then realise that my relationship is not very different from any other. Everyone has challenges, but a relationship has variabilities. We have to keep working on it every single day.</p>
            <p className="storyText">I guess the biggest challenge is not what she says or does, but existing in my presence while she is feeling troubled within. Many times she has no idea what troubles her and that becomes the larger trouble. I'm not sure how people take to the idea of vibes. But it can severely do more damage than words or actions cause I'm constantly clueless to what's happening in her head. I don't know if it's me or something from the past or if she is concerned about the future.</p>
            <p className="storyText">One lesson I've learnt from the relationship is that it's ok to take time to be sad or upset. I've always been one to bounce back quickly, but for my GF, she's taught me to honour my feelings. I've learnt a lot about myself via this relationship. I'm constantly tested. But I've also learnt that labels such as BPD and others do more damage to the person suffering then they could to themselves. I know the doctors are here to help but are they helping? I've seen her cry way more often after a medical session than in her own time. I make no judgements, but how can you truly help a person not knowing anything about their lives? How does one expect an hourly session per week to do much good? I know it's something better than nothing but I feel troubled trying not to see the medical industry as a business than truly serving a purpose to heal. I honestly believe her medication has done more damage to her health than her surroundings cause I've seen how numb she becomes after. This is harmful as it creates a constant doubt about her existence.</p>
            <p className="storyText">From what I've seen from my exposure abroad, deep work with the body and mind, like yoga, meditation or fitness training is the direction to a cure or it creates an awareness to suppress the voices in the head. I think it's time that such awareness be brought about.</p>
            <p className="storyText">That being said, the bravest souls are those suffering alone, so please do come out and seek help.</p>
        <p className="right">
        Much Love,<br/>Desh
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

  export default Story12;