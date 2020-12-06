import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story01() {

    return (
      <div>
        <h1> &#47;&#47; Healthy Healthcare Workers &#47;&#47; </h1>
            <p className="storyText">We live in a world where healthcare workers are heroes. We clap, sing, and even salute them with a fly pass during the <i>National Day Parade</i>. But who cares for these heroes when they fall? Especially when they are robbed of their mental health, by the very work for which they are lauded.</p>
            <p className="storyText">According to a pre-pandemic survey by the <i>Medical Protection Society</i>, a global not-for-profit which seeks to protect health professionals; 85% of doctors in the UK have experienced mental health issues. The report reveals that one out of every two doctors surveyed have had to deal with anxiety, and one in every three doctors has experienced depression during their medical career.</p>
            <p className="storyText">With the onset of the pandemic, the situation has deteriorated precipitously. A recent <i>New England Journal of Medicine</i> study of frontline nurses in China, dealing with the pandemic, found that half of the nurses were burned out, and nine out of 10 nurses reported moderate to high levels of anxiety.</p>
            <p className="storyText">For afflicted healthcare workers, anxiety and helplessness hover like old friends. These were the friends that visited Dr. Lorna Breen, cello playing, salsa dancing, emergency room physician, who managed the Emergency Room of <i>New York-Presbyterian Allen Hospital</i> in Manhattan. She suffered a mental breakdown during the height of the COVID crisis in New York in April and eventually killed herself at the end of the month. In one of her last few text messages she typed: “I’m drowning right now – May be AWOL for a while.”</p>
            <p className="storyText">Healthcare workers that help patients with mental health, often suffer alone. Even in stressful situations like the pandemic, healthcare workers are expected to soldier on.</p>
            <p className="storyText">Like everyone, healthcare workers need support when they are down. The journey to better mental health requires support for healthcare workers and their patients.</p>
            <p className="storyText">In our quest for improved mental health, let’s not forget the healthcare workers. Unless the hero is allowed to be rescued, they will continue to fall. The work is not done, until everyone who needs help, gets it, regardless of who they are.</p>
        <p className="right">
        Abel Ang<br/>Group CEO, Advanced MedTech
        </p>

        <p className="storyTextSource">
            <span>&#47;&#47; SOURCES &#47;&#47;</span>
            <a href="https://www.medicalprotection.org/uk/articles/85-of-doctors-have-experienced-mental-health-issues-reveals-medical-protection-survey" target="_blank" rel="noopener noreferrer">85% of doctors have experienced mental health issues, reveals Medical Protection survey</a> (Medical Protection)<br/>
            <a href="https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(20)30168-1/fulltext" target="_blank" rel="noopener noreferrer">Frontline nurses’ burnout, anxiety, depression, and fear statuses and their associated factors during the COVID-19 outbreak in Wuhan, China: A large-scale cross-sectional study</a> (E Clinical Medicine)<br/>
            <a href="https://www.nytimes.com/2020/07/11/nyregion/lorna-breen-suicide-coronavirus.html" target="_blank" rel="noopener noreferrer">
            ‘I Couldn’t Do Anything’: The Virus and an E.R. Doctor’s Suicide</a> (The New York Times)
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

  export default Story01;