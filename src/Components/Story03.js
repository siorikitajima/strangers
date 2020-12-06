import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story03() {
    return (
      <div>
        <h1> &#47;&#47; THEY ARE WATCHING ME &#47;&#47; </h1>
            <p className="storyText">“There, they are watching me from there, do you see them?”</p>
            <p className="storyText">Whispered my father, his body crouched low against the lower windows of our balcony. Beside him, my neighbour was attempting to nod sympathetically, though he was obviously confused.</p>
            <p className="storyText">I tip-toed over, to peek over from the top grills. What I saw was no revelation, just the usual streetlights, parked vans and casual strollers whose steps were occasionally drowned out by the rumble of the passing KL Express train from the nearby tracks.</p>
            <p className="storyText">The sight of my father was much more haunting; he was not a man I could say that I knew well, but the haggard lines spreading across his face as he crouched, hunched like a hunted animal was far from the swagger of the figure always seen in the living room.</p>
            <p className="storyText">That night, our neighbour went down to the streets, poking out the shadows from every dim corner, harassing sleeping workers in their trucks to chastising responses. It seemed like there were really no “ghosts” lurking in the darkness waiting to ensnare my father for whatever he was told he was being hunted for.</p>
            <p className="storyText">Whatever he was told. Or whatever the voices were telling him.</p>
            <p className="storyText">The year was 1988 or 1989, we had finally moved into a large HDB flat after moving from terrace to semi-detached after the failure of the family business. We could not afford to stay in that house with that big garden and that lovely orange swing anymore. Probably the stress of the loss, coupled with other ills that have crept over my father’s shoulders caused a breakdown.</p>
            <p className="storyText"><i>Or that would be what others would have thought.</i></p>
            <p className="storyText">Our family knew better, much better than our dear neighbour who was trying to help that night; my paternal grandfather who I never met spent his last days wrapping and unwrapping his wrinkled hands with soiled bandages, muttering to himself non-stop. Everyone remembered that about him. And everyone wondered who else in the family might end up in the same fate.</p>
            <p className="storyText">In those days, the idea that someone may be suffering from an illness that affects their mental state was not as prevalent as it is today. The idea that one could suffer from mental illness was considered a shame or even… inexplicable.</p>
            <p className="storyText">My mother must have been the first person to utter the word, “schizophrenia” when she tried to explain to us what our father was going through. Yet, it was not a word you would say out loud, not in public, not in view of others.</p>
            <p className="storyText"><i>It was stigma.</i></p>
            <p className="storyText">Especially in Asia, especially in conservative Singapore then.</p>
            <p className="storyText">Looking back today, I am amazed by how informed my mother was back then. After all, no one spoke about mental illness. No one explained anything. The only thing I heard tossed around in hushed voices was the irrational fear that it could be hereditary and hence you did not tell anyone if one of your family had the condition.</p>
            <p className="storyText">And even for myself, I only had a slightly better sense of the possible kinds of afflictions after an ex-girlfriend in junior college passed me a copy of Oliver Sack’s “The Man Who Mistook His Wife for His Hat”.</p>
            <p className="storyText">About my father? He never admitted to his afflictions, never sought help beyond the constant supply of valium pills from our former family physician (who we could no longer afford by then) to help him sleep off the voices. And like all diseases, sometimes the symptoms suffered more, at other times, you could not tell he was ill.</p>
            <p className="storyText">Towards the end of his life (he passed early, just as I became 21 at the turn of the millennium), Father maintained his lucidity. And I retained the memory of that evening from when I was barely ten years old, amongst many other fragments of those times.</p>
            <p className="storyText">Today, I hope that others understand that such a condition is neither stigma nor shame. Nor should anyone regard it as a condition that “you can snap out of”.</p>
            <p className="storyText">You would not ask a stage 4 cancer patient to snap out of his pain and get out to jog in the sun.</p>
            <p className="storyText">You would urge them to seek medical help, and you would hold their hand to get there if they fear the unknown.</p>
        <p className="right">
        Kenny Png<br/>Filmmaker/ Director/ Media Whore
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

  export default Story03;