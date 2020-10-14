import React from 'react';
import PBLogo from '../Images/patternbasedlogo.png';
import VeryLogo from '../Images/verylogo.png';
import GithubIcon from '../Images/github-icon.svg';
import P5Icon from '../Images/p5-icon.png';
import OpenSource from '../Images/CC-BY-SA_icons.svg';

function AboutCredit() {
    return(
        <div>
            <h4>// Documentary Credit //</h4>
            <p className="aboutCredit">
                Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>,
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>, 
                 Created by <a href="#" target="_blank">Creators Name</a>
            </p>
            <h4>// Mini-App Credit //</h4>
            <p className="aboutCredit">
                Created by <a href="https://patternbased.com/" target="_blank">PatternBased</a>, <br/>
                 Analytics, Design, animation and Code by <a href="http://siorikitajima.com/" target="_blank">Siori Kitajima</a>, <br/>
                 Music by <a href="https://www.josephminadeo.com/" target="_blank">Joseph Minadeo</a>, <br/>
                 Writing by <a href="https://very.sg/" target="_blank">Perry Ho</a> and <a href="https://very.sg/" target="_blank">Angie Swee</a>, <br/>
                 Research by <a href="https://very.sg/" target="_blank">Shiying Wan</a>
            </p>
            <p className="aboutCredit"><b className="subsubHead">Made with amazing free tools includes:</b><br/> <a href="https://reactjs.org/" target="_blank">React.js</a>, <a href="https://p5js.org/" target="_blank">p5.js</a>, <a href="https://molleindustria.github.io/p5.play/" target="_blank">p5.play.js</a>, <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>, <a href="https://www.react-spring.io/" target="_blank">React Spring</a>, <a href="https://sass-lang.com/" target="_blank">Sass SCSS</a>, <a href="https://github.com/" target="_blank">Github</a>, <a href="https://www.npmjs.com/" target="_blank">npm</a> and more.</p>

            <p className="aboutCredit"><b className="subsubHead">Open Source License:</b><br/> All generative and procedural art created for this project is shared under a Creative Commons Attribution-ShareAlike 4.0 International License (<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC-BY-SA</a>). It can be shared and modified freely as long as attributed and 'shared alike'.</p>
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src={OpenSource} alt="CC-BY-SA" id="OSicon"/></a>

            <p className="aboutCredit">
            <img src={GithubIcon}alt="Github icon" className="sm-icons"/>
            <a href="https://github.com/siorikitajima/Test-Site/tree/master/strangersWalkers" target="_blank">Fork 'Scene' on github</a><br/>
            <img src={P5Icon}alt="P5js icon" className="sm-icons"/>
            <a href="https://editor.p5js.org/siorikitajima/sketches/KZAKAzTSF" target="_blank">Fork 'Number Zero' on p5</a></p>
            
            <div className="logos">
            <a href="https://patternbased.com/" target="_blank"><img src={PBLogo} alt="PB logo"/></a>
            <a href="https://very.sg/" target="_blank"><img src={VeryLogo} alt="Very logo"/></a>
            </div>
        </div>
    );
}

export default AboutCredit;