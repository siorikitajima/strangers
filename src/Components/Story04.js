import React from 'react';
import {Link} from "react-router-dom";
import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function Story04() {

    return (
      <div>
            <p className="storyText">In 1983, my father, Goh Poh Seng: doctor, poet, novelist, playwright, nightclub owner, businessman and entrepreneur was the sponsor and promoter of David Bowie’s <i>Serious Moonlight Tour</i> in Singapore. My father, widely acknowledged in hindsight as a pioneer of the arts and a man ahead of his time, almost went bankrupt financing the first big rock & roll concert in Singapore. I spent my summer holidays with my best friends acting as tour guides escorting Bowie’s bandmates showing them the sights of Singapore. Initially, my father contemplated bringing <i>Duran Duran</i> but decided on the rock musical legend Bowie instead. My father invited Bowie and his musicians to our home to listen to a live performance by classical Chinese musicians. Bowie's band came but the man himself declined, saying that he did not “fraternise with concert promoters.” My father sent David Bowie a message through his personal assistant, telling him to tell Mr. Bowie that “he is only a rock star. I, however, am a poet.” Bowie came to meet my father hat in hand to apologise for his rudeness. My father told Bowie that two of his songs had been banned from radio play. “This rock & roll business is more than just drugs, sex and rock and roll and making money, it is about freedom of speech.” Fired up, Bowie started his concert with the two banned songs, galvanised by his band. He spent more time in Singapore than any other country on his tour. In his Moonlight Tour book, he could have written about the whole tour or any country but dedicated the entire foreword to his recollections of his time in Singapore. Here is an excerpt from the book:</p>
            <p className="storyText">“The Singapore authorities are not friendly toward rock & roll. Two of my songs, “China Girl” and “Modern Love,” were banned from radio play. “Restricted,” as they say. Our wonderful and fearless promoter, Dr. Goh Poh Seng, risked his livelihood, bank balance, and even his freedom to get me and my band into his country. When the authorities heard I was going to do an impromptu guest appearance at his youth club two days before our major gig, they busted it, banned the resident band for indecent performance, and threatened Poh Seng with imprisonment if a guest of the club – (me) – should get up on stage and sing. He also faced incredible local resistance in getting the staging and lights together. When he asked for three yards of cable, local suppliers – knowing it was for rock & roll – would only sell him a 100-yard drum. No one would lease him timber for the stage, so he ended up buying an architect-designed permanent structure at ten times the cost… and so it went, over and over. The lights were flown in from all over Malaysia. Many arrived broken, and those intact not much more powerful than a bedroom lamp. But, good god, he tried.”</p>
            <p className="storyText">My father and Bowie became friends and talked about art, literature, music and poetry. Many years later in the 90s when Bowie came to Vancouver for his <i>Reality</i> tour. My father and I attended the concert and sent a message to Bowie that we would love to meet him. I showed the Serious Moonlight Tour book to the skeptical ushers and we were surprised and delighted to have an audience with the man himself after the concert. There was a huge lineup of the rich and famous waiting to have an audience with Bowie but he shunned them but allowed us to see him. You should have seen the shocked faces of these rich and famous socialites as we were ushered in to see Bowie and they were refused entry. Bowie was a consummate gentleman, kind, generous, affable, friendly, courteous and polite. He was particularly concerned about my Dad’s health and held his hand to steady him, aware of my father’s <i>Parkinson’s</i>. My father introduced me to Bowie and I told him I was a huge fan. I also told him I was a filmmaker, writer and poet. He asked me to send some of my writing to him and gave me his personal address on his business card. He invited my Dad and I to come visit him and his wife Iman in their home in Switzerland anytime – we had an open invitation. I confided to Bowie that I had a bipolar condition and he shared with me that his brother who had committed suicide also suffered from manic depression. He said many of the greatest artists were considered insane and mad. He considered both of us to be in good company and we shared a good laugh at that. I did send him my manuscript “Surviving Samsara” about my journey of recovery from mental illness as well as my memoir about my father’s courageous struggle with Parkinson’s. I am saddened to hear of his death. He is one of the greatest musicians of all time – a pioneer and man ahead of his time like my father. I find it fitting that both David Bowie and my father Goh Poh Seng, two friends and kindred spirits, died on the same day – January 10th. David Bowie, you are an inspiration! R.I.P.</p>
        <p className="right">
            Mad Love & Love Madly, Kagan Goh<br/>
            <a href="http://kagangoh.com/" rel="noopener noreferrer" target="_blank">kagangoh.com</a><br/>
            <a href="https://www.survivingsamsara.com/" rel="noopener noreferrer" target="_blank">survivingsamsara.com</a>
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

  export default Story04;