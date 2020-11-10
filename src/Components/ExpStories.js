import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

function ExpStories() {
    return(
        <div className="docSectionDiv">
            <hr/>
            <h2>&#47;&#47;SIMH Stories&#47;&#47;</h2>
            <Accordion defaultActiveKey="1">
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
            <p>We live in a world where healthcare workers are heroes. We clap, sing, and even salute them with a fly pass during the National Day Parade. But who cares for these heroes when they fall? Especially when they are robbed of their mental health, by the very work for which they are lauded.</p>
            <p>According to a pre-pandemic survey by the Medical Protection Society, a global not-for-profit which seeks to protect health professionals; 85% of doctors in the UK have experienced mental health issues. The report reveals that one out of every two doctors surveyed have had to deal with anxiety, and one in every three doctors has experienced depression during their medical career.</p>
            <p>With the onset of the pandemic, the situation has deteriorated precipitously. A recent New England Journal of Medicine study of frontline nurses in China, dealing with the pandemic, found that half of the nurses were burned out, and nine out of ten nurses reported moderate to high levels of anxiety.</p>
            <p>For afflicted healthcare workers, anxiety and helplessness hover like old friends. These were the friends that visited Dr. Lorna Breen, cello playing, salsa dancing, emergency room physician, who managed the Emergency Room of NewYork-Presbyterian Allen Hospital in Manhattan. She suffered a mental breakdown during the height of the COVID crisis in New York in April and eventually killed herself at the end of the month. In one of her last few text messages she typed: “I’m drowning right now – May be AWOL for a while.”</p>
            <p>Healthcare workers that help patients with mental health, often suffer alone. Even in stressful situations like the pandemic, healthcare workers are expected to soldier on.</p>
            <p>Like everyone, healthcare workers need support when they are down. The journey to better mental health requires support for healthcare workers and their patients.</p>
            <p>In our quest for improved mental health, let’s not forget the healthcare workers. Unless the hero is allowed to be rescued, they will continue to fall. The work is not done, until everyone who needs help, gets it, regardless of who they are.</p>
            <p className="right">Abel Ang,<br/>Group CEO, Advanced MedTech</p>
            <p className="sources"><a href="https://www.medicalprotection.org/uk/articles/85-of-doctors-have-experienced-mental-health-issues-reveals-medical-protection-survey" target="_blank" rel="noopener noreferrer">85% of doctors have experienced mental health issues, reveals Medical Protection survey (Medical Protection)</a><br/>
            <a href="https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(20)30168-1/fulltext" target="_blank" rel="noopener noreferrer">Frontline nurses’ burnout, anxiety, depression, and fear statuses and their associated factors during the COVID-19 outbreak in Wuhan, China: A large-scale cross-sectional study (E Clinical Medicine)</a><br/>
            <a href="https://www.nytimes.com/2020/07/11/nyregion/lorna-breen-suicide-coronavirus.html" target="_blank" rel="noopener noreferrer">
            ‘I Couldn’t Do Anything’: The Virus and an E.R. Doctor’s Suicide (The New York Times)</a>
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
            <p className="right">Yuga J Vardhan,<br/>Director/Producer</p>
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
            <p>Or that would be what others would have thought.</p>
            <p>Our family knew better, much better than our dear neighbour who was trying to help that night; my paternal grandfather who I never met spent his last days wrapping and unwrapping his wrinkled hands with soiled bandages, muttering to himself non-stop. Everyone remembered that about him. And everyone wondered who else in the family might end up in the same fate.</p>
            <p>In those days, the idea that someone may be suffering from an illness that affects their mental state was not as prevalent as it is today. The idea that one could suffer from mental illness was considered a shame or even… inexplicable.</p>
            <p>My mother must have been the first person to utter the word, “schizophrenia” when she tried to explain to us what our father was going through. Yet, it was not a word you would say out loud, not in public, not in view of others.</p>
            <p>It was stigma.</p>
            <p>Especially in Asia, especially in conservative Singapore then.</p>
            <p>Looking back today, I am amazed by how informed my mother was back then. After all, no one spoke about mental illness. No one explained anything. The only thing I heard tossed around in hushed voices was the irrational fear that it could be hereditary and hence you did not tell anyone if one of your family had the condition.</p>
            <p>And even for myself, I only had a slightly better sense of the possible kinds of afflictions after an ex-girlfriend in junior college passed me a copy of Oliver Sack’s “The Man Who Mistook His Wife for His Hat”.</p>
            <p>About my father? He never admitted to his afflictions, never sought help beyond the constant supply of valium pills from our former family physician (who we could no longer afford by then) to help him sleep off the voices. And like all diseases, sometimes the symptoms suffered more, at other times, you could not tell he was ill.</p>
            <p>Towards the end of his life (he passed early, just as I became 21 at the turn of the millennium), Father maintained his lucidity. And I retained the memory of that evening from when I was barely ten years old, amongst many other fragments of those times.</p>
            <p>Today, I hope that others understand that such a condition is neither stigma nor shame. Nor should anyone regard it as a condition that “you can snap out of”.</p>
            <p>You would not ask a stage 4 cancer patient to snap out of his pain and get out to jog in the sun.</p>
            <p>You would urge them to seek medical help, and you would hold their hand to get there if they fear the unknown.</p>
            <p className="right">Kenny Png, <br/>Filmmaker/ Director/ Media Whore</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <Card.Header>
    "JOY" by <b>Name Name</b>, Director/Producer
                </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
            <Card.Body>
            <h4>Issue: <b>General Mental Health</b></h4>
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
            <p className="right">Name Name,<br/>Director/Producer</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
                       
        </div>
    );
}

export default ExpStories;