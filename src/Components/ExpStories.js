import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

function ExpStories() {
    return(
        <div className="docSectionDiv">
            <hr/>
            <h2>&#47;&#47;SIMH Stories&#47;&#47;</h2>
            <Accordion defaultActiveKey="0">
            <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Card.Header>
                "Healthy Healthcare Workers" by <b>Abel Ang</b>, Group CEO, Advanced MedTech
                </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            <h4>Issue: <b>General Mental Health</b></h4>
            <h2>Healthy Healthcare Workers</h2>
            <p>We live in a world where healthcare workers are heroes. We clap, sing, and even salute them with a fly pass during the <i>National Day Parade</i>. But who cares for these heroes when they fall? Especially when they are robbed of their mental health, by the very work for which they are lauded.</p>
            <p>According to a pre-pandemic survey by the <i>Medical Protection Society</i>, a global not-for-profit which seeks to protect health professionals; 85% of doctors in the UK have experienced mental health issues. The report reveals that one out of every two doctors surveyed have had to deal with anxiety, and one in every three doctors has experienced depression during their medical career.</p>
            <p>With the onset of the pandemic, the situation has deteriorated precipitously. A recent <i>New England Journal of Medicine</i> study of frontline nurses in China, dealing with the pandemic, found that half of the nurses were burned out, and nine out of 10 nurses reported moderate to high levels of anxiety.</p>
            <p>For afflicted healthcare workers, anxiety and helplessness hover like old friends. These were the friends that visited Dr. Lorna Breen, cello playing, salsa dancing, emergency room physician, who managed the Emergency Room of <i>New York-Presbyterian Allen Hospital</i> in Manhattan. She suffered a mental breakdown during the height of the COVID crisis in New York in April and eventually killed herself at the end of the month. In one of her last few text messages she typed: “I’m drowning right now – May be AWOL for a while.”</p>
            <p>Healthcare workers that help patients with mental health, often suffer alone. Even in stressful situations like the pandemic, healthcare workers are expected to soldier on.</p>
            <p>Like everyone, healthcare workers need support when they are down. The journey to better mental health requires support for healthcare workers and their patients.</p>
            <p>In our quest for improved mental health, let’s not forget the healthcare workers. Unless the hero is allowed to be rescued, they will continue to fall. The work is not done, until everyone who needs help, gets it, regardless of who they are.</p>
            <p className="right">Abel Ang<br/>Group CEO, Advanced MedTech</p>
            <h5 className="source-header">&#47;&#47; Sources &#47;&#47;</h5>
            <p className="sources"><a href="https://www.medicalprotection.org/uk/articles/85-of-doctors-have-experienced-mental-health-issues-reveals-medical-protection-survey" target="_blank" rel="noopener noreferrer">85% of doctors have experienced mental health issues, reveals Medical Protection survey</a> (Medical Protection)<br/>
            <a href="https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(20)30168-1/fulltext" target="_blank" rel="noopener noreferrer">Frontline nurses’ burnout, anxiety, depression, and fear statuses and their associated factors during the COVID-19 outbreak in Wuhan, China: A large-scale cross-sectional study</a> (E Clinical Medicine)<br/>
            <a href="https://www.nytimes.com/2020/07/11/nyregion/lorna-breen-suicide-coronavirus.html" target="_blank" rel="noopener noreferrer">
            ‘I Couldn’t Do Anything’: The Virus and an E.R. Doctor’s Suicide</a> (The New York Times)
            </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Card.Header>
    A Story by <b>Yuga J Vardhan</b>, Director/Producer
                </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
            <Card.Body>
            <h4>Issue: <b>General Mental Health</b></h4>
            <p>A healthy mind equates to a healthy body. The importance of eating right, exercising, keeping an active lifestyle has always been directed towards ensuring that we have a healthy body free from ailments such as diabetes, high blood pressure, cardio-related diseases, etc. However, these habits are equally important for the mind. Interestingly one of the main causes of such medical conditions is due to stress. The day we come to a complete awareness where we start seeing mental illnesses on par with physical illnesses, mankind would take a huge leap into wholesome holistic wellness for itself.</p>
            <p>On a side note, whilst researching for a film on the topic of dementia, an online article stroked a chord. An American woman in her 80s started speaking in German when after being diagnosed with Dementia, a language she never spoke after migrating to the US at the age of 6.  It was amazing to know how the human mind works and we all have to play our part in keeping our and one another’s healthy and sound.</p>
            <p className="right">Yuga J Vardhan<br/>Director/Producer</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <Card.Header>
    "THEY ARE WATCHING ME" by <b>Kenny Png</b>, Filmmaker/ Director/ Media Whore
                </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
            <Card.Body>
            <h4>Issue: <b>Schizophrenia</b></h4>
            <h2>THEY ARE WATCHING ME</h2>
            <p>“There, they are watching me from there, do you see them?”</p>
            <p>Whispered my father, his body crouched low against the lower windows of our balcony. Beside him, my neighbour was attempting to nod sympathetically, though he was obviously confused.</p>
            <p>I tip-toed over, to peek over from the top grills. What I saw was no revelation, just the usual streetlights, parked vans and casual strollers whose steps were occasionally drowned out by the rumble of the passing KL Express train from the nearby tracks.</p>
            <p>The sight of my father was much more haunting; he was not a man I could say that I knew well, but the haggard lines spreading across his face as he crouched, hunched like a hunted animal was far from the swagger of the figure always seen in the living room.</p>
            <p>That night, our neighbour went down to the streets, poking out the shadows from every dim corner, harassing sleeping workers in their trucks to chastising responses. It seemed like there were really no “ghosts” lurking in the darkness waiting to ensnare my father for whatever he was told he was being hunted for.</p>
            <p>Whatever he was told. Or whatever the voices were telling him.</p>
            <p>The year was 1988 or 1989, we had finally moved into a large HDB flat after moving from terrace to semi-detached after the failure of the family business. We could not afford to stay in that house with that big garden and that lovely orange swing anymore. Probably the stress of the loss, coupled with other ills that have crept over my father’s shoulders caused a breakdown.</p>
            <p><i>Or that would be what others would have thought.</i></p>
            <p>Our family knew better, much better than our dear neighbour who was trying to help that night; my paternal grandfather who I never met spent his last days wrapping and unwrapping his wrinkled hands with soiled bandages, muttering to himself non-stop. Everyone remembered that about him. And everyone wondered who else in the family might end up in the same fate.</p>
            <p>In those days, the idea that someone may be suffering from an illness that affects their mental state was not as prevalent as it is today. The idea that one could suffer from mental illness was considered a shame or even… inexplicable.</p>
            <p>My mother must have been the first person to utter the word, “schizophrenia” when she tried to explain to us what our father was going through. Yet, it was not a word you would say out loud, not in public, not in view of others.</p>
            <p><i>It was stigma.</i></p>
            <p>Especially in Asia, especially in conservative Singapore then.</p>
            <p>Looking back today, I am amazed by how informed my mother was back then. After all, no one spoke about mental illness. No one explained anything. The only thing I heard tossed around in hushed voices was the irrational fear that it could be hereditary and hence you did not tell anyone if one of your family had the condition.</p>
            <p>And even for myself, I only had a slightly better sense of the possible kinds of afflictions after an ex-girlfriend in junior college passed me a copy of Oliver Sack’s “The Man Who Mistook His Wife for His Hat”.</p>
            <p>About my father? He never admitted to his afflictions, never sought help beyond the constant supply of valium pills from our former family physician (who we could no longer afford by then) to help him sleep off the voices. And like all diseases, sometimes the symptoms suffered more, at other times, you could not tell he was ill.</p>
            <p>Towards the end of his life (he passed early, just as I became 21 at the turn of the millennium), Father maintained his lucidity. And I retained the memory of that evening from when I was barely ten years old, amongst many other fragments of those times.</p>
            <p>Today, I hope that others understand that such a condition is neither stigma nor shame. Nor should anyone regard it as a condition that “you can snap out of”.</p>
            <p>You would not ask a stage 4 cancer patient to snap out of his pain and get out to jog in the sun.</p>
            <p>You would urge them to seek medical help, and you would hold their hand to get there if they fear the unknown.</p>
            <p className="right">Kenny Png<br/>Filmmaker/ Director/ Media Whore</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <Card.Header>
    "JOY" by <b>Kagan Goh</b>, Director/Producer
                </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
            <Card.Body>
            <h4>Issue: <b>Manic depression</b></h4>
            <h2>JOY</h2>
            <p>I was at a house party celebrating Canada Day<br/>
            when I met a woman named Joy.<br/>
            I said: “It’s a joy to meet you Joy.”<br/>
            She beamed at me,<br/>
            then said: “I am manic-depressive.”<br/>
            At once the conversation dried up.<br/>
            Not knowing what to say<br/>
            made an excuse:<br/>
            “I have to call my girlfriend.”<br/>
            A lie.<br/>
            I avoided her staying upstairs<br/>
            while she waited lost in the party below.<br/>
            She reminded me of a dog I once had.<br/>
            Always happy to see me,<br/>
            jumping and licking my face,<br/>
            overwhelmed by his affection,<br/>
            I fled upstairs, afraid to come down.<br/>
            Eventually my mother lost her patience:<br/>
            “OK, we’ll give him away to the S.P.C.A.”<br/>
            She made me accompany her.<br/>
            I carried the dog in my arms.<br/>
            It looked at me with the saddest eyes,<br/>
            wavering on the brink of tears.<br/>
            He spoke to me:<br/>
            “Don’t leave me.”<br/>
            I swear I did not imagine it.<br/>
            By the time we arrived at the S.P.C.A,<br/>
            I said: “Mum, I change my mind.<br/>
            I want to keep him.”<br/>
            “No. After all the trouble<br/>
            you’ve caused me,<br/>
            dragging me all the way here,<br/>
            you don’t deserve a dog.”<br/>
            I am sorry Joy.<br/>
            I was afraid.<br/>
            I didn’t understand<br/>
            until I too was diagnosed manic-depressive<br/>
            eight years ago on Valentine’s Day of all days.<br/>
            This is the way I feel every time<br/>
            I am led back to the psych ward,<br/>
            an obedient dog<br/>
            crying to God, don’t leave me. </p>
            <p className="docuCredit right">Mad Love & Love Madly, Kagan Goh<br/>
            <a href="http://kagangoh.com/" rel="noopener noreferrer" target="_blank">kagangoh.com</a><br/>
            <a href="https://www.survivingsamsara.com/" rel="noopener noreferrer" target="_blank">survivingsamsara.com</a>
            </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <Card.Header>
    A Story by <b>Kagan Goh</b>, Director/Producer
                </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
            <Card.Body>
            <h4>Issue: <b>Manic depression</b></h4>
            <p>In 1983, my father, Goh Poh Seng: doctor, poet, novelist, playwright, nightclub owner, businessman and entrepreneur was the sponsor and promoter of David Bowie’s <i>Serious Moonlight Tour</i> in Singapore. My father, widely acknowledged in hindsight as a pioneer of the arts and a man ahead of his time, almost went bankrupt financing the first big rock & roll concert in Singapore. I spent my summer holidays with my best friends acting as tour guides escorting Bowie’s bandmates showing them the sights of Singapore. Initially, my father contemplated bringing <i>Duran Duran</i> but decided on the rock musical legend Bowie instead. My father invited Bowie and his musicians to our home to listen to a live performance by classical Chinese musicians. Bowie's band came but the man himself declined, saying that he did not “fraternise with concert promoters.” My father sent David Bowie a message through his personal assistant, telling him to tell Mr. Bowie that “he is only a rock star. I, however, am a poet.” Bowie came to meet my father hat in hand to apologise for his rudeness. My father told Bowie that two of his songs had been banned from radio play. “This rock & roll business is more than just drugs, sex and rock and roll and making money, it is about freedom of speech.” Fired up, Bowie started his concert with the two banned songs, galvanised by his band. He spent more time in Singapore than any other country on his tour. In his Moonlight Tour book, he could have written about the whole tour or any country but dedicated the entire foreword to his recollections of his time in Singapore. Here is an excerpt from the book:</p>
            <p>“The Singapore authorities are not friendly toward rock & roll. Two of my songs, “China Girl” and “Modern Love,” were banned from radio play. “Restricted,” as they say. Our wonderful and fearless promoter, Dr. Goh Poh Seng, risked his livelihood, bank balance, and even his freedom to get me and my band into his country. When the authorities heard I was going to do an impromptu guest appearance at his youth club two days before our major gig, they busted it, banned the resident band for indecent performance, and threatened Poh Seng with imprisonment if a guest of the club – (me) – should get up on stage and sing. He also faced incredible local resistance in getting the staging and lights together. When he asked for three yards of cable, local suppliers – knowing it was for rock & roll – would only sell him a 100-yard drum. No one would lease him timber for the stage, so he ended up buying an architect-designed permanent structure at ten times the cost… and so it went, over and over. The lights were flown in from all over Malaysia. Many arrived broken, and those intact not much more powerful than a bedroom lamp. But, good god, he tried.”</p>
            <p>My father and Bowie became friends and talked about art, literature, music and poetry. Many years later in the 90s when Bowie came to Vancouver for his <i>Reality</i> tour. My father and I attended the concert and sent a message to Bowie that we would love to meet him. I showed the Serious Moonlight Tour book to the skeptical ushers and we were surprised and delighted to have an audience with the man himself after the concert. There was a huge lineup of the rich and famous waiting to have an audience with Bowie but he shunned them but allowed us to see him. You should have seen the shocked faces of these rich and famous socialites as we were ushered in to see Bowie and they were refused entry. Bowie was a consummate gentleman, kind, generous, affable, friendly, courteous and polite. He was particularly concerned about my Dad’s health and held his hand to steady him, aware of my father’s <i>Parkinson’s</i>. My father introduced me to Bowie and I told him I was a huge fan. I also told him I was a filmmaker, writer and poet. He asked me to send some of my writing to him and gave me his personal address on his business card. He invited my Dad and I to come visit him and his wife Iman in their home in Switzerland anytime – we had an open invitation. I confided to Bowie that I had a bipolar condition and he shared with me that his brother who had committed suicide also suffered from manic depression. He said many of the greatest artists were considered insane and mad. He considered both of us to be in good company and we shared a good laugh at that. I did send him my manuscript “Surviving Samsara” about my journey of recovery from mental illness as well as my memoir about my father’s courageous struggle with Parkinson’s. I am saddened to hear of his death. He is one of the greatest musicians of all time – a pioneer and man ahead of his time like my father. I find it fitting that both David Bowie and my father Goh Poh Seng, two friends and kindred spirits, died on the same day – January 10th. David Bowie, you are an inspiration! R.I.P.</p>
            <p className="docuCredit right">Mad Love & Love Madly, Kagan Goh<br/>
            <a href="http://kagangoh.com/" rel="noopener noreferrer" target="_blank">kagangoh.com</a><br/>
            <a href="https://www.survivingsamsara.com/" rel="noopener noreferrer" target="_blank">survivingsamsara.com</a>
            </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
                <Card.Header>
    "Dying to be Alive" by <b>Sha-En Yeo</b>, Happiness Scientist
                </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
            <Card.Body>
            <h4>Issue: <b>General Mental Health</b></h4>
            <h2>Dying to be Alive: an unconventional path to finding happiness</h2>
            <h3>Tragedy strikes</h3>
            <p>In 2015, I received a text from an ex-colleague: “Recalling all <i>CARE (Caring Action in Response to Emergencies)</i> trained officers. Please standby to offer support.” At that moment, I was puzzled – what support did they need from us?</p>
            <p>Soon, the news came. “Earthquake in Sabah, a number of students and teachers have perished. Help needed to support the family and teachers at the respective wakes.” It was the school holidays, and the school had sent a team of teachers and students for an overseas trip to climb Mount Kinabalu. As many school counsellors and teachers were on vacation, we were activated.</p>
            <p>I was deployed to the wake of a 12 year old girl. She was months away from taking her <i>Primary School Leaving Examination (PSLE)</i>, an examination she must have been preparing very hard for. At the wake, her mother played a tape of her in her ballet attire, a confident smile spread over her face as she did each pirouette. I imagined the years of time, energy, and love that had gone into this little girl, and now there she was, resting in a coffin, way too early. It was heart-wrenching watching as her family collapsed into sobs each time someone said “We’re sorry for your loss.”</p>
            <p>My job was to check-in with the girls’ friends (fellow students) to see how they were coping; also, with the survivors who had returned from Mount Kinabalu, scathed from the earthquake and heartbroken from the loss of their friends. Many of them were still in shock, unsure of how to respond. I laid out pens and colourful paper, and asked the students to write a goodbye note to pin on a tree. Many shared stories of their friend: her good qualities and fond memories they remember. I held back my tears.</p>
            <p>At around 4 p.m., a man decked in a yellow robe walked in. He carried a bell and walked hurriedly over to the family. They looked relieved to see him, and quickly gathered their whole family to stand up and surround the coffin. Two candles were lit. He rang the bell several times, began chanting in words I didn’t recognise, and then he walked around and around the coffin.</p>
            <p>Watching him perform the ritual made me want to turn and run. It didn’t feel right! Why was this happening to someone so young and innocent? What if she didn’t want the Priest to be here? Did she even have a choice of what last rites she wanted? What would she have wanted to do with her life?</p>
            <p>As I tried (in vain) to answer these questions, I came face to face with my own life. If that were me in the coffin, would I have done everything I had wanted to do? Would I die without regrets? In other words, would I be happy to die on that very day? The answer was a resounding NO.</p>
            <h3>Epiphany</h3>
            <p>It was like a slap in the face. I had thought I was happy; but at that moment, it became clear to me that there was so much left to do. There was so much more to give and contribute to this world. I had been playing it small.</p>
            <p>That night, after the funeral, I laid in bed and cried. I cried for the mother who had lost a daughter (for I too have two daughters); I cried for the loss of the potentially bright future this girl had – the graduations, the birthdays, the challenges and adventures. But mostly, I cried because of the reminder this experience had given me: You are ALIVE!</p>
            <p>As the months passed following her funeral, I found myself going back to this moment over and over again. Now you may think this is a surefire way of making myself sad and depressed, but this practice of contemplating death actually brought greater clarity into my life.</p>
            <p>“I realised thinking about death doesn’t depress me. It makes me seize the moment and see things I might not ordinarily see.” (Linda Leaming)</p>
            <h3>Contemplating death: a Bhutanese practice</h3>
            <p>In fact, that same year, I read with enthusiasm Eric Weiner’s article: <i>Bhutan’s Dark Secret to Happiness</i>. In Bhutan, one of the only countries in the world that measures <i>Gross National Happiness (GNH)</i>, they do not fear death. On his travels to the magical country, Eric Weiner got talking with Ura, (director of the Centre for Bhutan Studies) who shared that thinking about death was part and parcel of normal living. In fact, the knowledge that one day they would cease to exist was not a morbid thought, but one that could perhaps be a secret to their happiness. In research conducted by <i>Roy Baumeister & Nathan DeWall (2007)</i>, they found that subjects who had been asked to think about death completed word stems (e.g. “jo__”) more positively. Their conclusion? The more the <i>“people contemplate [death], apparently the automatic system begins to search for happy thoughts.”</i></p>
            <h3>Being truly alive</h3>
            <p>Indeed, this has rung true for me. Many nights, as I sit in contemplation reviewing those moments as I watched the priest go around the coffin, I ask myself: What does it mean to be truly alive? It is a powerful question that brings into focus what is really important. Every day is not to be taken for granted, as it has been given to me. Over the years since then, I’ve come to define being alive as:</p>
            <ol>
              <li>Saying “yes” to life i.e. do things that inspire, bring me joy.</li>
              <li>Letting go of all that burdens me e.g. anger, emotional baggage.</li>
              <li>Leaving a legacy that will make the world a better place.</li>
              <li>Spending time with the people who matter.</li>
            </ol>
            <p>I have internalised these four principles well over the last four years. Perhaps in some way, it is a way of saying to the girl: Your death meant something. So while it is a tragedy that she perished, ironically, pondering on death has allowed me to find new conviction to truly live. And it is from living these principles, that I truly feel happy within.</p>
            <p>How about you? If you knew death awaits, what would you do? I’d love to hear your thoughts and comments.</p>
            <p className="docuCredit right">Sha-En Yeo, MAPP<br/>
            Founder Happiness Scientist<br/>
            <a href="https://happinessscientists.com/" rel="noopener noreferrer" target="_blank">happinessscientists.com</a>
            </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
                       
        </div>
    );
}

export default ExpStories;