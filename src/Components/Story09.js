import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story09() {

    return (
      <div>
            <p className="storyText">I was first diagnosed with Major Depressive Disorder when I was 20, and in University. It took me about three or four years before I could bring myself to believe that something may not be quite right, and it was only through the persistence of a close friend that I finally saw a Counsellor. I'd just assumed that the melancholy, emptiness, overwhelming emotions and existential conflicts I'd kept experiencing from a younger age were just personality traits of mine. Since that first visit to a psychiatrist, my diagnosis was changed a number of times due to the complex and seemingly shifting paradigms of psychiatric testing and the evolving DSM, and I was soon told I had Bipolar II, only to eventually be labelled with Borderline Personality Disorder. I've been on so many different medications for 10 years now, each of which came with a host of side effects and messed with my sense of self. I honestly feel like I don't know who I am anymore - my sense of identity got lost along the way with the constant influx of chemicals, and every day is still a massive struggle. Time has neither lessened my feelings of guilt for putting my loved ones through my struggle, nor has it truly seen me reach a point of acceptance or lasting recovery. It has been a nightmare, trying to convince myself of the basic premise that life is worth living, while also trying to deal with the more common stresses such as holding down a job, having an income, maintaining friendships, etc. In my case, the closeted, vulnerable child hiding in my 30 year old body is also still so desperate to make my parents feel proud of me. Being 30, lost in life and unemployed is overwhelmingly scary, especially when you have been in schools and work environments and even just living in our community that tends to measure success based on financial status and achievements in school and work. I am doing what I can, and I visit a doctor and a psychologist regularly, but complete recovery feels...far off. I feel disconnected from the world around me, and it is incredibly hard to find someone to talk to who might be able to empathise or even sympathise with the condition without inadvertently making me feel worse about myself. I hope that if any of this resonates with you, you know that you are not alone. As explicit as this is to post publicly, I think it needs to be acknowledged and spoken about - I have had to consciously decide, on many occasions, that suicide cannot be an option - I tell myself that it would just be a transference of pain to those around me that will haunt them for a lifetime. Sometimes it feels like the easier, and even only way out, but when I can muster the energy to hope, and imagine a future, I know that I want to be able to help others in pain. And that I need to be here to do that.</p>
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

  export default Story09;