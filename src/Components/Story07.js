import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story07() {

    return (
      <div>
        <h1> &#47;&#47; Social Anxiety &#47;&#47; </h1>
            <p className="storyText">Being socially anxious is exhausting, as is being anxious in general. Social anxiety, however, is particularly challenging in my opinion, because we all live in communities and communities are essentially based upon social relationships and interactions.</p>
            <p className="storyText">For me, having social anxiety feels as though I am walking around in a giant bubble made out of the highest grade of magnifying glass. It also means that it feels for me, as though everybody can read my mind- and my mind is not a kind place to myself. The feeling that people can read my mind feels to me that everybody thinks I’m a fraud, or unintelligent, or just plain unworthy of just about anything.</p>
            <p className="storyText">Choosing to step out of home, even to meet a good friend, is a decision that can torture me for two to three days prior to the appointment. I think about having to be seen in public. I think about the tiny pigments of skin colour on my face that are uneven, the tiny hair follicles on my arm, on my face, above my lips, the way I would have to place one foot in front of the other in what would appear like a casual gait in front of people, where I would have to look while I would walk (Do I look at people directly? Do I just stare into space vaguely behind them? Do I smile?)</p>
            <p className="storyText">And these are just the thoughts that occur when I have to meet a friend.</p>
            <p className="storyText">As I write this article, I can’t help but tear up as I recall the infinite difficulties I face having this type of anxiety. I have excelled in school my entire life, having finally completed my Masters recently, but I don’t feel the celebration of an achievement at all – instead, I feel absolute fear at now having to enter the real world and the work force where interactions are unavoidable; where I have to finally start being an adult, and stop hiding behind my ever-understanding parents who have constantly helped me make excuses over the years for not attending family dinners or big celebrations because I would be having panic attacks as we were all getting dressed.</p>
            <p className="storyText">They saw and still see how the thoughts get to me, how my body starts to shake and my hands start to tremble. How I start to perspire tremendously, and how I start breathing quickly and less deeply. How I then become breathless, and am unable to speak a full sentence without taking a breath in between. How my eyes start to well up, as I see and feel the way my body reacts, and think of how much I wish it was not doing so; that I had more control and confidence over the simple situation of visiting a relative, or sitting at a dinner table with my cousins. And then, how I finally throw up until my throat is raw with pain, and the fresh water that my parents anxiously offer me tastes like syrup to me due to the amount of bile that had come up.</p>
            <p className="storyText">Social anxiety is debilitating, and I am grateful for anybody who sees my nervous twitches while I talk to them, or notices my hands trembling as I hold a dinner spoon and yet, do not make a fuss. I appreciate you noticing my nervousness, and then speaking to me a little kinder. I appreciate you asking me if I’m alright, and not giving me a weird look when I explain that I’m just a little shaky and that I’ll be fine in a minute.</p>
            <p className="storyText">But most of all, I am grateful for the people amongst whom I do not experience this anxiety with. This article is dedicated to my closest friends, my parents whom I love very much, my sister who is my passionate protector, and my brother in law whom I have loved for years, much before he officially became family.</p>
            <p className="storyText">To everyone else who may be experiencing anxiety as well, you are not alone. I’m still fighting, and I know you can too.</p>
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

  export default Story07;