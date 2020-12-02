import React from 'react';
// import {Link} from 'react-router-dom';
// import {useSpring, animated} from 'react-spring';

function AboutMain(){
    // const homeLeftTrans = useSpring({
    //     config: { duration: 250 },
    //     transform: 'translateX(0%)', 
    //     from: {transform: 'translateX(-100%)'}});
    // const homeRightTrans = useSpring({
    //     config: { duration: 250 },
    //     transform: 'translateX(0%)', 
    //     from: {transform: 'translateX(100%)'}});
    return(
        <div className="aboutMain">
            <div className="heroBanner">
                <div className="textWtap">
                <h1>&#47;&#47; Hello Friend &#47;&#47;</h1>
                <p>For a long time, I have been thinking of realising a documentary series on mental health – a series that tells the nuanced stories of the many struggles and complexities related to mental health conditions.</p>
                <p>But, for an even longer time, I felt that a project like this is too close to home. In reality, we are still a society where mental conditions, mental decline, and mental illnesses are kept behind closed doors. Unlike physical ailments, mental health conditions carry a social stigma.</p>
                <p>A couple of days ago, I watched the film Joker on my flight back to Singapore. In the film, Joaquin Phoenix, playing the role of Joker wrote in his journal – <i>The worst part about having a mental illness is people expect you to behave like you don’t</i>. This line stayed with me long after the film ended and long after my plane hit the tarmac at the airport.</p>
                <p>I am guilty of this line too – <i>The worst part about having a mental illness is people expect you to behave like you don’t</i>. How often have I expected this? How convenient would it be if people with mental illnesses can just function like what society expects?</p>
                <p>I have come to understand that our mental health sits on a very broad and delicate spectrum. Multiple unfortunate events, personal tragedies, accumulated extreme work stress, a particularly bad patch, lost of loved ones and even just life going about its own business can tip us over and push us towards poor mental health. In the event of a downward spiral, who is there to catch us? Who is there to listen and soften the landing?</p>
                <p>I asked myself who dare I tell if I am heading towards a nervous breakdown. Who can I trust if I am having an anxiety attack? The answer was no one for a long time. And I ask myself why. Why is this conversation so daunting? Why is the topic of mental health such a taboo and party pooper?</p>
                <p>From being the world's favourite airport to the best metropolis to do business, Singapore has shown the world its prowess. Maybe the time has come to look inwards and nurture a collective consciousness that is open and empathetic on matters of mental health? <i>Strangers In My Head</i> is , I hope, our contribution towards this consciousness.</p>
                <p>Created alongside the documentary series, this resource site is our attempt to reach out. The journey towards better mental health need not be lonesome. To quote Winnie the Pooh - You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes. Strangers In My Head is us walking with and walking towards friends, families, caregivers and strangers who are coping and living with mental health conditions. While we may not fully understand or grasp the arduous path each person struggling with a mental health condition is walking, let us not judge. Let us be willing to hold the other person’s hand.</p>
                <p>Thank you to all our contributors who are so brave to share their stories on Strangers In My Head. Your courage has inspired us and we hope we have made you proud with our work.</p>
                <p className="right">Love always, Angie<br/>Executive Producer, Very!</p>
                </div>
            </div>

            {/* <div className="homePanelsTop">
                <animated.div className="homePanel" style={homeLeftTrans}>
                <Link to="/perspective">
                    <h3>Perspective</h3>
                    <p>Perspective captures visually the short data stories of how many among us are affected. Statistics are based on real-world numbers.</p>
                </Link>
                </animated.div>
                <animated.div className="homePanel" style={homeRightTrans}>
                <Link to="/voices">
                    <h3>Voices</h3>
                    <p>A message board to make the journey less lonely. Include your thoughts and experiences with a post.</p>
                    </Link>
                </animated.div>
            </div>
            <div className="homePanelsBottom">
                <animated.div className="homePanel" style={homeLeftTrans}>
                <Link to="/explore/general">
                <h3>Explore</h3>
                    <p>Shareable information, statistics, insights and contact resources for managing mental health in Singapore.</p>
                </Link>
                </animated.div>
                <animated.div className="homePanel" style={homeRightTrans}>
                <Link to="/breathe">
                    <h3>Breathe</h3>
                    <p>A series of soothing animations with relaxing music. Trigger this mode anytime you feel anxious.</p>
                </Link>
                </animated.div>
            </div> */}
        </div>
    );
}

export default AboutMain;