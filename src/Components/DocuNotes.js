import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap'

function DocuNotes() {
  return (
    <div className="docSectionDiv">
    <h2>Creators' Notes</h2>

      <Accordion defaultActiveKey="1">
        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Card.Header>
    <b>A note</b> by Angeline Swee, Executive Producer, Very!
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
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
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Card.Header>
    <b>'Title of the writing if any'</b> by First LastName, Whatyoudo, Very!
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <Card.Header>
    <b>'Title of the writing if any'</b> by First LastName, Whatyoudo, Very!
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <Card.Header>
    <b>'Title of the writing if any'</b> by First LastName, Whatyoudo, Very!
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <Card.Header>
    <b>'Title of the writing if any'</b> by First LastName, Whatyoudo, Very!
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
                <Card.Header>
    <b>'Title of the writing if any'</b> by First LastName, Whatyoudo, Very!
                </Card.Header>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>

    </div>
  );
}

export default DocuNotes;