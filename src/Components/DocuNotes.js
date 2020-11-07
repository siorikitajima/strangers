import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap'

function DocuNotes() {
  return (
    <div className="docSectionDiv">
    <h2>Creators' Notes</h2>

      <Accordion defaultActiveKey="0">
      <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Card.Header>
    A note by <b>Mui Koon</b>, Director
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
    <p>When I was first conceptualizing this series together with the team, I asked myself what is it that I want to see and know about mental health issues that’s not already common knowledge? Is it the science behind it? Is it to question what causes mental health conditions? Or is it to explore the treatment involved?</p>
    <p>As a teenager and young adult, I’ve gone through periods of depression. I’ve explored self-harm, not to take my life but to feel and see the pain inside me. I’ve also danced with the idea of suicide. But till this day, I’m not sure what exactly is mental illness. How does it look like? When does it warrant a trip to the doctor?</p>
    <p>I believe that the role of documentary is not to instruct but rather, to understand. Only having gained some understanding and knowledge can we then attempt to help and find solutions. For me, it all begins with empathy.</p>
    <p>Strangers In My Head is an invitation to all of you. Come, enter the lives of Le Yong, Dheesha, Jess and Karen. Experience their pain, share in their frustrations, celebrate their triumphs – no matter how big or small.</p>
    <p>It’s my hope that after watching this documentary, you’d ask yourself as a family member, a friend, a colleague, an employer or even a stranger – what can you do to walk alongside someone who may be suffering with their mental health?</p>
    <p>It’s been a privilege to know our contributors and to see their pain and courage up-close. Their illness may be invisible but their pain is real. May their stories move you and may we all do our part to make space for them in our world.</p>
    <p className="right">Mui Koon<br/>Director</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Card.Header>
    A note by <b>Angeline Swee</b>, Executive Producer, Very!
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
    <p>For a long time, I have been thinking of realizing a documentary series on mental health – a series that tells the nuanced stories of the many struggles and complexities related to mental health conditions.</p>
    <p>But, for an even longer time, I felt that a project like this is too close to home. In reality, we are still a society where mental conditions, mental decline and mental illnesses are kept behind closed doors. Unlike physical ailments, mental health conditions carry a social stigma.</p>
    <p>A couple days ago, I watch the film Joker on my flight back to Singapore. In the film, Joaquin Phoenix playing the role of Joker wrote in his journal – “The worst part about having a mental illness is people expect you to behave like you don’t.” This line stayed with me long after the film ended and long after my plane hit the tarmac at the airport.</p>
    <p>I am guilty of this line too - “The worst part about having a mental illness is people expect you to behave like you don’t.” How often have I expected this? How convenient would it be if people with mental illnesses can just function like what society expects?</p>
    <p>I have come to understand that our mental health sits on a very broad and delicate spectrum. Multiple unfortunate events, personal tragedies, accumulated extreme work stress, a particularly bad patch, lost of loved ones and even just life going about its own business  can tip us over and push us towards poor mental health. In the event of a downward spiral, who is there to catch us? Who is there to listen and soften the landing?</p>
    <p>I asked myself who dare I tell if I am heading towards a nervous breakdown. Who can I trust if I am having an anxiety attack? The answer was no one for a long time. And I ask myself why. Why is this conversation so daunting? Why is the topic of mental health such a taboo and party pooper?</p>
    <p>From being the world's favourite airport to the best metropolis to do business, Singapore has shown the world its prowess. Maybe the time has come to look inwards and nurture a collective consciousness that is open and empathetic on matters of mental health?  Strangers in My Head is , I hope, our contribution towards this consciousness.</p>
    <p>Created alongside the documentary series, this resource site is our attempt to reach out. The journey towards better mental health need not be lonesome. To quote Winnie the Pooh - You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes. Strangers in My Head is us walking with and walking towards friends, families, care givers and strangers who are coping and living with mental health conditions. While we may not fully understand or grasp the arduous path each person struggling with a mental health condition is walking, let us not judge. Let us be willing to hold the other person’s hand.</p>
    <p>Thank you to all our contributors who are so brave to share their stories on Strangers in My Head. Your courage has inspired us and we hope we have made you proud with our work.</p>
    <p className="right">Love always, Angie<br/>Executive Producer, Very!</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <Card.Header>
    A note by <b>Danny Goh</b>, Director of Photography
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
    <p>Before working on this series as the Director of Photography, I knew very little about mental health. Sometimes, the shooting process can be highly stressful. It’s not easy to have a camera pointing directly at the protagonists’ faces and for them to pretend that the camera isn’t there. I was worried that the contributors might not feel comfortable with that.</p>
    <p>True enough, many of our contributors were not very comfortable in front of the camera. What really moved me was that even though they struggle to face the camera during the shoots, they still did their best every single day. What I saw through my viewfinder was immense courage from each and every one of them.</p>
    <p>Through them, I learned that true courage is in overcoming the small things that seem so easy to do for others, but yet so hard to accomplish for them. And they have to face their fears every single day.</p>
    <p>At the end of the shoot, I don’t see them as individuals with mental health conditions. I see them as people who are incredibly strong and courageous.</p>
    <p className="right">Danny Goh<br/>Director of Photography</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <Card.Header>
    A note by <b>Carl Pereira</b>, Location Sound Recordist
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
    <p>Being mindful.<br/>
    I remember meeting them on our first day of filming and thinking to myself - these guys look and behave no different from anyone else on the street.</p>
    <p>As their sound recordist throughout this journey, I had the privilege of listening to their carefully- crafted words. They are more than willing to speak their mind, but they do so with caution so as not to make their loved ones worry about them. That’s how thoughtful they are.</p>
    <p>In my mind, being able to bring forward the essence of what each of them is going through was the main challenge for me. I hope I do them justice with the audio recordings. And, I do hope their heartfelt stories are listened carefully to by the viewer. </p>
    <p>We all eventually became close, and each of them taught me a valuable lesson. To count your blessings and be grateful for what you have. </p>
    <p>My love to them all – Le Yong, Dheesha, Karen and Jess.</p>
    <p className="right">Carl Pereira<br/>Location Sound Recordist</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <Card.Header>
    A note by <b>Martyn</b>, Editor
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
    <p>SIMH is edited in a manner that is quiet, introspective and meditative, in deliberate contrast to the constant war of voices that torment the minds of our profiles, all of whom spoke calmly and courageously about their mental condition.</p>
    <p>I hope this series provide not just vital information to viewers but act as a 4-part companion to all of us who, in varying degrees, are battling inner voices in our heads.</p>
    <p className="right">Peace, Martyn<br/>Editor</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>

    </div>
  );
}

export default DocuNotes;