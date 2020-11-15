import React from 'react';
import PBLogo from '../Images/patternbasedlogo.png';
import VeryLogo from '../Images/verylogo.png';
import GithubIcon from '../Images/github-icon.svg';
import P5Icon from '../Images/p5-icon.png';
import OpenSource from '../Images/CC-BY-SA_icons.svg';

function AboutCredit() {
    return(
        <div className="creditContainer">
            <h4>&#47;&#47; SIMH App Credit &#47;&#47;</h4>
            <p className="aboutCredit">
                Created by <a href="https://patternbased.com/" rel="noopener noreferrer" target="_blank">PatternBased</a>, <br/>
                 Analytics, Design, animation and Code by <a href="http://siorikitajima.com/" rel="noopener noreferrer" target="_blank">Siori Kitajima</a>, <br/>
                 Music by <a href="https://www.josephminadeo.com/" rel="noopener noreferrer" target="_blank">Joseph Minadeo</a>, <br/>
                 Writing by <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Perry Ho</a> and <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Angie Swee</a>, <br/>
                 Research by <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Shiying Wan</a>, <a href="http://siorikitajima.com/" rel="noopener noreferrer" target="_blank">Siori Kitajima</a> and <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Angie Swee</a>, <br/>
                 Logo design by <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Creators Name</a>, <br/>
                 Production Photos by <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Creators Name</a>
            </p>
            <p className="aboutCredit"><b className="subsubHead">Made with amazing free tools includes:</b><br/> <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React.js</a>, <a href="https://p5js.org/" rel="noopener noreferrer" target="_blank">p5.js</a>, <a href="https://molleindustria.github.io/p5.play/" rel="noopener noreferrer" target="_blank">p5.play.js</a>, <a href="https://code.visualstudio.com/" rel="noopener noreferrer" target="_blank">Visual Studio Code</a>, <a href="https://www.react-spring.io/" rel="noopener noreferrer" target="_blank">React Spring</a>, <a href="https://sass-lang.com/" rel="noopener noreferrer" target="_blank">Sass SCSS</a>, <a href="https://github.com/" rel="noopener noreferrer" target="_blank">Github</a>, <a href="https://www.npmjs.com/" rel="noopener noreferrer" target="_blank">npm</a> and more.</p>

            <p className="aboutCredit"><b className="subsubHead">Open Source License:</b><br/> All generative and procedural art created for this project are shared under a Creative Commons Attribution-ShareAlike 4.0 International License (<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="noopener noreferrer" target="_blank">CC-BY-SA</a>). They can be shared and modified freely as long as attributed and 'shared alike'.</p>
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="noopener noreferrer" target="_blank"><img src={OpenSource} alt="CC-BY-SA" id="OSicon"/></a>

            <p className="aboutCredit">
            <img src={GithubIcon}alt="Github icon" className="sm-icons"/>
            <a href="https://github.com/siorikitajima/Test-Site/tree/master/strangersWalkers" rel="noopener noreferrer" target="_blank">Fork 'Perspective' on github</a><br/>
            <img src={P5Icon}alt="P5js icon" className="sm-icons"/>
            <a href="https://editor.p5js.org/siorikitajima/sketches/KZAKAzTSF" rel="noopener noreferrer" target="_blank">Fork 'Sine Orbit' on p5</a><br/>
            <img src={P5Icon}alt="P5js icon" className="sm-icons"/>
            <a href="https://editor.p5js.org/siorikitajima/sketches/KZAKAzTSF" rel="noopener noreferrer" target="_blank">Fork 'Eternal Moment' on p5</a><br/>
            <img src={P5Icon}alt="P5js icon" className="sm-icons"/>
            <a href="https://editor.p5js.org/siorikitajima/sketches/KZAKAzTSF" rel="noopener noreferrer" target="_blank">Fork 'Pastoral Waves' on p5</a>
            </p>
            
            <div className="logos">
            <a href="https://patternbased.com/" rel="noopener noreferrer" target="_blank"><img src={PBLogo} alt="PB logo"/></a>
            <a href="https://very.sg/" rel="noopener noreferrer" target="_blank"><img src={VeryLogo} alt="Very logo"/></a>
            </div>
        </div>
    );
}

export default AboutCredit;