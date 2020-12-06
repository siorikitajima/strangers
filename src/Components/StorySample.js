import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function StorySample() {

    return (
      <div>
        <h1> &#47;&#47; Heading 1 Example &#47;&#47; </h1>
        
        <p className="storyText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus nec feugiat. Vehicula ipsum a arcu cursus vitae congue. <a href="http://patternbased.com/" target="_blank" rel="noopener noreferrer">Inline link example</a> facilisi cras fermentum odio eu feugiat. Nisi est sit amet facilisis magna. Quis lectus nulla at volutpat diam. Sed turpis tincidunt id aliquet risus feugiat in ante. <b>Bold font example</b> in hac habitasse. Elementum nibh tellus molestie nunc non blandit massa enim. <i>Italic font example</i> nibh praesent tristique magna sit amet purus. Felis bibendum ut tristique et. Enim neque volutpat ac tincidunt vitae. Nullam non nisi est sit amet facilisis magna etiam tempor.
        </p>

        <h3>Sub Heading Example</h3>
        <p className="storyText">
        Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Ut etiam sit amet nisl purus in mollis nunc sed. Diam volutpat commodo sed egestas egestas. Porttitor lacus luctus accumsan tortor posuere ac. Nibh tortor id aliquet lectus. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.
        </p>

        <img className="imageSingle" src="https://strangersinmyhead.info/media/ep1/SIMH-EP1_1.jpg" alt="Sample Single"/>

        <h3>Unordered List Example</h3>
        <ul className="storyList">
          <li>
          Et ultrices neque ornare aenean. Ipsum dolor sit amet consectetur adipiscing.
          </li>
          <li>
          Magna sit amet purus gravida. Massa massa ultricies mi quis hendrerit dolor magna. Lectus mauris ultrices eros in cursus turpis.
          </li>
          <li>
          Blandit massa enim nec dui nunc mattis enim ut tellus.
          </li>
        </ul>
        <h3>Ordered List Example</h3>
        <ol className="storyList">
          <li>
          Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
          </li>
          <li>
          Fringilla ut morbi tincidunt augue interdum. Leo a diam sollicitudin tempor id eu nisl. Est lorem ipsum dolor sit amet consectetur adipiscing elit.
          </li>
          <li>
          Consectetur purus ut faucibus pulvinar elementum integer enim. Eu volutpat odio facilisis mauris sit. Sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet.
          </li>
        </ol>

        <img className="imageDouble" src="https://strangersinmyhead.info/media/ep2/SIMH-EP2_2.jpg" alt="Sample Double"/>
        <img className="imageDouble" src="https://strangersinmyhead.info/media/ep4/SIMH-EP4_1.jpg" alt="Sample Double"/>

        <p className="storyText">
        Fusce ut placerat orci nulla pellentesque dignissim enim. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Ut morbi tincidunt augue interdum. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.
        </p>
        <p className="right">
          First Lastname<br/>Producer, Very!<br/>
          <a href="http://patternbased.com/" target="_blank" rel="noopener noreferrer">website.com</a>
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

  export default StorySample;