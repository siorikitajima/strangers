import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story05() {
    return (
      <div>
        <h1> &#47;&#47; Dying to be Alive: an unconventional path to finding happiness &#47;&#47; </h1>
        <h3>Tragedy strikes</h3>
            <p className="storyText">In 2015, I received a text from an ex-colleague: “Recalling all <i>CARE (Caring Action in Response to Emergencies)</i> trained officers. Please standby to offer support.” At that moment, I was puzzled – what support did they need from us?</p>
            <p className="storyText">Soon, the news came. “Earthquake in Sabah, a number of students and teachers have perished. Help needed to support the family and teachers at the respective wakes.” It was the school holidays, and the school had sent a team of teachers and students for an overseas trip to climb Mount Kinabalu. As many school counsellors and teachers were on vacation, we were activated.</p>
            <p className="storyText">I was deployed to the wake of a 12 year old girl. She was months away from taking her <i>Primary School Leaving Examination (PSLE)</i>, an examination she must have been preparing very hard for. At the wake, her mother played a tape of her in her ballet attire, a confident smile spread over her face as she did each pirouette. I imagined the years of time, energy, and love that had gone into this little girl, and now there she was, resting in a coffin, way too early. It was heart-wrenching watching as her family collapsed into sobs each time someone said “We’re sorry for your loss.”</p>
            <p className="storyText">My job was to check-in with the girls’ friends (fellow students) to see how they were coping; also, with the survivors who had returned from Mount Kinabalu, scathed from the earthquake and heartbroken from the loss of their friends. Many of them were still in shock, unsure of how to respond. I laid out pens and colourful paper, and asked the students to write a goodbye note to pin on a tree. Many shared stories of their friend: her good qualities and fond memories they remember. I held back my tears.</p>
            <p className="storyText">At around 4 p.m., a man decked in a yellow robe walked in. He carried a bell and walked hurriedly over to the family. They looked relieved to see him, and quickly gathered their whole family to stand up and surround the coffin. Two candles were lit. He rang the bell several times, began chanting in words I didn’t recognise, and then he walked around and around the coffin.</p>
            <p className="storyText">Watching him perform the ritual made me want to turn and run. It didn’t feel right! Why was this happening to someone so young and innocent? What if she didn’t want the Priest to be here? Did she even have a choice of what last rites she wanted? What would she have wanted to do with her life?</p>
            <p className="storyText">As I tried (in vain) to answer these questions, I came face to face with my own life. If that were me in the coffin, would I have done everything I had wanted to do? Would I die without regrets? In other words, would I be happy to die on that very day? The answer was a resounding NO.</p>
        <h3>Epiphany</h3>
            <p className="storyText">It was like a slap in the face. I had thought I was happy; but at that moment, it became clear to me that there was so much left to do. There was so much more to give and contribute to this world. I had been playing it small.</p>
            <p className="storyText">That night, after the funeral, I laid in bed and cried. I cried for the mother who had lost a daughter (for I too have two daughters); I cried for the loss of the potentially bright future this girl had – the graduations, the birthdays, the challenges and adventures. But mostly, I cried because of the reminder this experience had given me: You are ALIVE!</p>
            <p className="storyText">As the months passed following her funeral, I found myself going back to this moment over and over again. Now you may think this is a surefire way of making myself sad and depressed, but this practice of contemplating death actually brought greater clarity into my life.</p>
            <p className="storyText">“I realised thinking about death doesn’t depress me. It makes me seize the moment and see things I might not ordinarily see.” (Linda Leaming)</p>
        <h3>Contemplating death: a Bhutanese practice</h3>
            <p className="storyText">In fact, that same year, I read with enthusiasm Eric Weiner’s article: <i>Bhutan’s Dark Secret to Happiness</i>. In Bhutan, one of the only countries in the world that measures <i>Gross National Happiness (GNH)</i>, they do not fear death. On his travels to the magical country, Eric Weiner got talking with Ura, (director of the Centre for Bhutan Studies) who shared that thinking about death was part and parcel of normal living. In fact, the knowledge that one day they would cease to exist was not a morbid thought, but one that could perhaps be a secret to their happiness. In research conducted by <i>Roy Baumeister & Nathan DeWall (2007)</i>, they found that subjects who had been asked to think about death completed word stems (e.g. “jo__”) more positively. Their conclusion? The more the <i>“people contemplate [death], apparently the automatic system begins to search for happy thoughts.”</i></p>
        <h3>Being truly alive</h3>
            <p className="storyText">Indeed, this has rung true for me. Many nights, as I sit in contemplation reviewing those moments as I watched the priest go around the coffin, I ask myself: What does it mean to be truly alive? It is a powerful question that brings into focus what is really important. Every day is not to be taken for granted, as it has been given to me. Over the years since then, I’ve come to define being alive as:</p>
            <ol className="storyList">
              <li>Saying “yes” to life i.e. do things that inspire, bring me joy.</li>
              <li>Letting go of all that burdens me e.g. anger, emotional baggage.</li>
              <li>Leaving a legacy that will make the world a better place.</li>
              <li>Spending time with the people who matter.</li>
            </ol>
            <p className="storyText">I have internalised these four principles well over the last four years. Perhaps in some way, it is a way of saying to the girl: Your death meant something. So while it is a tragedy that she perished, ironically, pondering on death has allowed me to find new conviction to truly live. And it is from living these principles, that I truly feel happy within.</p>
            <p className="storyText">How about you? If you knew death awaits, what would you do? I’d love to hear your thoughts and comments.</p>
        <p className="right">
            Sha-En Yeo, MAPP<br/>
            Founder Happiness Scientist<br/>
            <a href="https://happinessscientists.com/" rel="noopener noreferrer" target="_blank">happinessscientists.com</a>
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

  export default Story05;