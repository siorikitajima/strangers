import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story15() {
    return (
      <div>
            <p className="storyText">My personal experience with mental illness is seeing a close one dealing with addiction. It was like a dark cloud over our heads - a painful 6-year journey that still impacts me today. The person I know had changed completely with the addiction. Even in their lucid moments, it’s as if they knew they were trapped. In this case, the person chose not to actively get out of this. We spoke with various counsellors and went to IMH but perhaps the stigma of seeking help was too much for the person to bear. It maybe didn’t help that the professional was clinical and not very compassionate so it enhanced the “illness” aspect.</p>
            <p className="storyText">This year has been an intense one, with most of the world confined in their homes, or if not, country. Many friends remarked that they felt trapped. I imagine that must be how some coping with mental illness feel - as if they were trapped in their own minds. It takes a lot of will-power, probably medical intervention in some cases and lots and lots of social support to realise that we can go beyond what our minds tell us. Social support is probably what most of us can provide, as a friend or family member. And if enough of us rally around, perhaps it would be less draining or daunting for the caregiver.</p>
            <p className="storyText">My biggest wish, as a parent, is for Singapore to be kinder in its education system and society in general. That while we encourage excellence, it is excellence in exploring the interest of each child, excellence in pursuing that interest, nurturing the uniqueness in each one, and compassion should we fall and need to re-explore. It should not be excellence only in numbers - achieving over 90% in tests and exams or being number one in everything we do. Not easy but definitely worth doing. So that kids, our next generation, have a more balanced perspective, support, which in turn leads to stronger mental health and confidence, knowing that they can master their minds, and turn it into something for their good, which in turn becomes for the greater good.</p>
        <p className="right">
        Karen Phan<br/>
        Producer
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

  export default Story15;