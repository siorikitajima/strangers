import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story13() {

    return (
      <div>
            <p className="storyText">A couple of decades ago, a good friend of mine jumped to her death. She was only 26, but had been suffering from anorexia and depression for a couple of years. Her family and many of her friends including me were gutted. We were filled with guilt and asked ourselves many questions: Could we have done more? Should we have spent more time with her? Why was she depressed? We had no answers.</p>
            <p className="storyText">Mental illness is a very complex condition and it is more prevalent among us than we realise. Many years later, I organised a creative writing programme for the mentally ill residents at Pelangi Village, a welfare home complex. I was surprised to learn that a majority of the residents were male (more than half) and many of them were homeless. They were either driven out by their families or they could not take care of themselves. According to <a href="https://www.who.int/news-room/facts-in-pictures/detail/mental-health" target="_blank" rel="noopener noreferrer">WHO</a>, "around 1 in 5 of the world's children and adolescents have a mental disorder" and even more worryingly, "1 person dies from suicide every 40 seconds. Suicide is the second leading cause of death in individuals aged 15-29 years". These are very sobering figures that all of us should be concerned about.</p>
            <p className="storyText">It is vital that we seek help early if we are experiencing mental issues, or advise our loved ones and friends to do the same. The <a href="https://www.samhealth.org.sg/" target="_blank" rel="noopener noreferrer">Singapore Association for Mental Health</a> has many resources that we could all tap on. We need to break the taboos of discussing mental illness and raise the awareness of its treatment. It is only by creating a more open, caring and inclusive environment that we could more effectively support our friends and families who need help. Let's help one another be alive mentally and emotionally.</p>
        <p className="right">
        William Phuan<br/>Art Manager
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

  export default Story13;