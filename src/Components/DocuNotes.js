import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap';

function DocuNotes() {
  return (
    <div className="docSectionDiv">
    <h2>Creators' Notes</h2>

      <Accordion defaultActiveKey="0">
      <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Card.Header>
    <b>Mui Koon</b>, Director
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
    <p>When I was first conceptualising this series together with the team, I asked myself what is it that I want to see and know about mental health issues that’s not already common knowledge? Is it the science behind it? Is it to question what causes mental health conditions? Or is it to explore the treatment involved?</p>
    <p>As a teenager and young adult, I’ve gone through periods of depression. I’ve explored self-harm, not to take my life but to feel and see the pain inside me. I’ve also danced with the idea of suicide. But till this day, I’m not sure what exactly is mental illness. How does it look like? When does it warrant a trip to the doctor?</p>
    <p>I believe that the role of documentary is not to instruct but rather, to understand. Only having gained some understanding and knowledge can we then attempt to help and find solutions. For me, it all begins with empathy.</p>
    <p><i>Strangers In My Head</i> is an invitation to all of you. Come, enter the lives of Le Yong, Dheesha, Jess, and Karen. Experience their pain, share in their frustrations, celebrate their triumphs – no matter how big or small.</p>
    <p>It’s my hope that after watching this documentary, you’d ask yourself as a family member, a friend, a colleague, an employer or even a stranger – what can you do to walk alongside someone who may be suffering with their mental health?</p>
    <p>It’s been a privilege to know our contributors and to see their pain and courage up-close. Their illness may be invisible but their pain is real. May their stories move you and may we all do our part to make space for them in our world.</p>
    <p className="right">Mui Koon<br/>Director</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
                <Card.Header>
    <b>Shiying</b>, Producer
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
    <p>To: Le Yong, Dheesha, Karen, and Jess</p>
    <p>Thank you for letting us into your home and into your life. We know it was a difficult and demanding decision to make. You trusted us with your vexations, your tears, your solitude. At the same time, you are unaware that we have also witnessed your deep compassion and acute regard for the feelings of those around you as you carefully share but not want to burden. Through each moment spent together during the making of the documentary, I realise that there is much I do not yet understand about mental health issues and about life in fact, but you have been patient in educating me.</p>
    <p>Thank you for helping me re-learn to take one step at a time no matter how small that step might be. Thank you for reminding me of the grace to find your own path even when others misjudge you. Thank you for showing me the strength to persevere and not give up. You have been an inspiration and I truly wish someday I’ll be half as tenacious and determined as you are.</p>
    <p>With all my love and ears whenever you may need.</p>
    <p className="right">Shiying<br/>Producer</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Card.Header>
    <b>Danny</b>, Director of Photography
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
    <p>Before working on this series as the <i>Director of Photography</i>, I knew very little about mental health. Sometimes, the shooting process can be highly stressful. It’s not easy to have a camera pointing directly at the protagonists’ faces and for them to pretend that the camera isn’t there. I was worried that the contributors might not feel comfortable with that.</p>
    <p>True enough, many of our contributors were not very comfortable in front of the camera. What really moved me was that even though they struggled to face the camera during shoot, they still did their best every single day. What I saw through my viewfinder was immense courage from each and every one of them.</p>
    <p>Through them, I learned that true courage is in overcoming the small things that seem so easy to do for others, but yet so hard to accomplish for them. And they have to face their fears every single day.</p>
    <p>At the end of the shoot, I don’t see them as individuals with mental health conditions. I see them as people who are incredibly strong and courageous.</p>
    <p className="right">Danny<br/>Director of Photography</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <Card.Header>
    <b>Carl</b>, Location Sound Recordist
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
    <p>Being mindful.</p>
    <p>I remember meeting them on our first day of filming and thinking to myself – these guys look and behave no different from anyone else on the street.</p>
    <p>As their sound recordist throughout this journey, I had the privilege of listening to their carefully-crafted words. They are more than willing to speak their minds, but they do so with caution so as not to make their loved ones worry about them. That’s how thoughtful they are.</p>
    <p>In my mind, being able to bring forward the essence of what each of them is going through was the main challenge for me. I hope I did them justice with the audio recordings. And, I do hope their heartfelt stories are listened to carefully by the viewer.</p>
    <p>We all eventually became close, and each of them taught me a valuable lesson. To count your blessings and be grateful for what you have.</p>
    <p>My love to them all – Le Yong, Dheesha, Karen, and Jess.</p>
    <p className="right">Carl<br/>Location Sound Recordist</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <Card.Header>
    <b>Martyn</b>, Editor
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
    <p><i>Strangers In My Head</i> is edited in a manner that is quiet, introspective, and meditative, in deliberate contrast to the constant war of voices that torment the minds of our profiles, all of whom spoke calmly and courageously about their mental condition.</p>
    <p>I hope this series provides not just vital information to viewers but act as a 4-part companion to all of us who, in varying degrees, are battling inner voices in our heads.</p>
    <p className="right">Peace, Martyn<br/>Editor</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <Card.Header>
    <b>Veron</b>, Post Production Manager
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
    <p>This series opened my eyes to a world I’ve never encountered. I never knew these issues existed. I’ll learn to be more sensitive towards people from now on. Indeed, a little patience and understanding go a long way.</p>
    <p className="right">Veron<br/>Post Production Manager</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
                <Card.Header>
    <b>Koon Su</b>, Audio Engineer
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
    <p>It is important to educate the general public about mental health conditions. Many go about their own lives without bothering to find out more about the struggles of others. Not every life is smooth-sailing, some go through much more challenges than others and it is definitely not of their own choice or doing.</p>
    <p className="right">Koon Su<br/>Audio Engineer</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
                <Card.Header>
    <b>Joseph</b>, Composer
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
    <p>It has been an honour to compose the score for <i>Strangers In My Head</i> considering how important mental health is to me and those around me. As someone who has experienced a range of mental health issues, I feel that I can relate to the people profiled in this show, in some cases, very deeply.</p>
    <p>The subject of mental health feels vast and somewhat nebulous covering biology, psychology, society, perception, consciousness, etc., and it all intersects with politics, socioeconomics, vast and growing inequality and injustice, environmental destruction and living in a period of mass extinction. These things can cause great anxiety, especially, and rightfully so, in younger generations. It seems perfectly natural and normal that they do. I think billions of animals burning to death in Australia SHOULD cause great and possibly prolonged anxiety to anyone with empathy, anyone who cares about this world. Watching the world breakdown IS depressing and anxious to any thinking and caring human and it should be ok to talk about.</p>
    <p>I also believe that the science is still VERY young regarding the brain, perception, and how individuals experience the world. Some terms like <i>Attention Deficit Disorder</i> (something I have been diagnosed with), I often disagree with. I think attention “issues” can actually be a healthy brain interacting with an overstimulating world. Our biology evolved over millions of years on a planet much different than the one that exists all of the sudden. A much quieter, darker and simpler planet. Now we are bombarded with light and sound pollution, air pollution, information overload, manipulative media, etc. To put it as simply as I can, I actually often think “crazy” is normal.</p>
    <p>I am no stranger to mental health issues and I think, whether diagnosed or not, very few people are. But like Greta Thunberg, I often think of the things a doctor would diagnose as a disorder as my super powers. What a doctor might call <i>ADD</i>, I call fast tangential thinking, and it is clearly a driving force behind making original music and art. My strong empathy for life on this planet, while sometimes soul crushing, is also a huge reason I can make emotive creations and match aesthetics of projects. I am extremely lucky and privileged that I have an outlet, a way to turn my emotions and inner turbulence into something.</p>
    <p>Mental health will continue to evolve and change as society changes. Advances in neuroscience, biology, and even things like quantum mechanics and computing power will continue to shape our understanding of the mind and mental health. When I see terms like neural diversity, it makes me feel like we are moving in the right direction in regards to mental health, away from reductive binaries, spectrums, and simplistic terms, and towards acknowledging the infinitely complex beings we all are. My hope is that a deeper understanding of these things will help lead to a more empathetic and humane society.</p>
    <p className="right">Joseph<br/>Composer</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="8">
                <Card.Header>
    <b>Siori</b>, Multimedia Artist
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
    <p>Le Young, Deesha, Karen, and Jess. You are my true heroes.<br/>Thank you for being an inspiration and helping so many people by sharing your stories. All my respect for your courage.</p>
    <p>I grew up in downtown Tokyo in the 80s, where mental issues were ignored and invisible. Since I was a little kid, I had problems understanding people’s emotions. For me, people got mad, frustrated, sad or happy all of a sudden, and in a way I couldn’t follow, and yet I was often badly affected by their emotional outcomes. It was like riding a rollercoaster to be with a group of kids my age: they were crying, angry, screaming and laughing, it was overwhelming and made me anxious and awkward.</p>
    <p>As I grew up, I got depressed, anxious and avoided people more because I was afraid of them finding out I had problems. I spent most of my time in school reading books or drawing on a notebook - so that I had an excuse not to interact with others.</p>
    <p>When I was 14 years old, I read a book about mental health issues, and then I finally knew that I was not alone. I still remember the feeling of newfound hope. I wish I remembered the name of the book. It was an academic book about psychology and mental issues that I found in a sale wagon outside of a vintage book store.</p>
    <p>For me, the book was the first turning point that eventually led me to finding people I feel comfortable with, and the lifestyle that is easier for me to keep up with. There are many of us if you look around, and I hope we help each other, and normalise our differences. I like it when I can say “I’m depressed and need a nap,” without feeling guilty, just like I say “I’m gonna go to a grocery store for a carton of milk.”</p>
    <p>Thank you to the amazing team of Very! for this meaningful project and having me as a part of it. I hope <i>Strangers In My Head</i> will make someone feel less alone, like one long forgotten book did for me when I was a kid. It is not easy to live in this world when you feel alone, but I want to believe there is always hope.</p>
    <p className="right">Siori<br/>Multimedia Artist</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </div>
  );
}

export default DocuNotes;