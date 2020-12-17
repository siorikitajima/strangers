import React from 'react';
import PBLogo from '../Images/patternbasedlogo.png';
import VeryLogo from '../Images/verylogo.png';
import GithubIcon from '../Images/github-icon.svg';
import P5Icon from '../Images/p5-icon.png';

function AboutCredit() {
    return(
        <div className="creditContainer">
             <p className="aboutCredit"><br/>© 2020 PatternBased and Very! Pte Ltd. All Rights Reserved.</p>

            <p className="aboutCredit">
                Created by <a href="https://patternbased.com/" rel="noopener noreferrer" target="_blank">PatternBased</a>, <br/>
                Analytics, Design, Animation and Code by <a href="http://siorikitajima.com/" rel="noopener noreferrer" target="_blank">Siori Kitajima</a>, <br/>
                Music by <a href="https://www.josephminadeo.com/" rel="noopener noreferrer" target="_blank">Joseph Minadeo</a>, <br/>
                Writing by <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Perry Ho</a> and <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Angie Swee</a>, <br/>
                Research by <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Shiying Wan</a>, <a href="http://siorikitajima.com/" rel="noopener noreferrer" target="_blank">Siori Kitajima</a> and <a href="https://very.sg/" rel="noopener noreferrer" target="_blank">Angie Swee</a>, <br/>
                Logo design by <a href="http://www.cindyashes.tv/about" rel="noopener noreferrer" target="_blank">Cindy Liu</a>
            </p>

            <p className="aboutCredit"><b className="subsubHead">Made with amazing free tools:</b><br/> 
            <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React.js</a>, <a href="https://p5js.org/" rel="noopener noreferrer" target="_blank">p5.js</a>, <a href="https://molleindustria.github.io/p5.play/" rel="noopener noreferrer" target="_blank">p5.play.js</a>, <a href="https://www.emailjs.com/" rel="noopener noreferrer" target="_blank">EmailJS</a>, <a href="https://formik.org/" rel="noopener noreferrer" target="_blank">Formik</a>, <a href="https://www.npmjs.com/package/react-masonry-css" rel="noopener noreferrer" target="_blank">React Masonry CSS</a>, <a href="https://www.npmjs.com/package/react-photo-gallery" rel="noopener noreferrer" target="_blank">React Photo Gallery</a>, <a href="https://www.npmjs.com/package/react-toastify" rel="noopener noreferrer" target="_blank">React Toastify</a>, <a href="https://www.react-spring.io/" rel="noopener noreferrer" target="_blank">React Spring</a>, <a href="https://sass-lang.com/" rel="noopener noreferrer" target="_blank">Sass SCSS</a>, <a href="https://www.heymeta.com/" rel="noopener noreferrer" target="_blank">Hey Meta</a>, <a href="https://coolors.co/" rel="noopener noreferrer" target="_blank">Coolors</a>, <a href="https://code.visualstudio.com/" rel="noopener noreferrer" target="_blank">Visual Studio Code</a>, <a href="https://github.com/" rel="noopener noreferrer" target="_blank">Github</a> and more.</p>

            <p className="aboutCredit"><b className="subsubHead">Open Source License:</b><br/> Generative and procedural art pieces created for this project are shared under GNU General Public License v3 (<a href="https://www.gnu.org/licenses/gpl-3.0.en.html" rel="noopener noreferrer" target="_blank">GPL 3.0</a>). They can be used and modified freely as long as the copyright and license are preserved.</p>

            <p className="aboutCredit">
            <img src={GithubIcon}alt="Github icon" className="sm-icons"/>
            <a href="https://github.com/siorikitajima/perspective" rel="noopener noreferrer" target="_blank">Fork 'Perspective' on github</a><br/>
            <img src={P5Icon}alt="P5js icon" className="sm-icons"/>
            <a href="https://editor.p5js.org/siorikitajima/sketches/XfinNLhLT" rel="noopener noreferrer" target="_blank">Fork 'Sine Orbit' on p5</a><br/>
            <img src={P5Icon}alt="P5js icon" className="sm-icons"/>
            <a href="https://editor.p5js.org/siorikitajima/sketches/Ip0rxfoxu" rel="noopener noreferrer" target="_blank">Fork 'Eternal Moment' on p5</a><br/>
            <img src={P5Icon}alt="P5js icon" className="sm-icons"/>
            <a href="https://editor.p5js.org/siorikitajima/sketches/kHGySmK_2" rel="noopener noreferrer" target="_blank">Fork 'Pastoral Waves' on p5</a>
            </p>
            
            <div className="logos">
            <a href="https://patternbased.com/" rel="noopener noreferrer" target="_blank"><img src={PBLogo} alt="PB logo"/></a>
            <a href="https://very.sg/" rel="noopener noreferrer" target="_blank"><img src={VeryLogo} alt="Very logo"/></a>
            </div>
        </div>
    );
}

export default AboutCredit;