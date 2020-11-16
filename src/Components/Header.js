import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '../Images/menu.svg'
import {useTransition, animated} from 'react-spring';
import NavMenuMobile from './NavMenuMobile';
import PBLogoL from '../Images/patternbasedlogo-light.png';
import VeryLogoL from '../Images/verylogo-light.png';

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const masktransition = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity:0},
        enter: { opacity: 1},
        leave: { opacity: 0},
    })
    const menutransition = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateY(-100%)'},
        enter: { opacity: 1, transform: 'translateY(0%)'},
        leave: { opacity: 0, transform: 'translateY(-100%)'},
    })

    return(
        <header className="headerContainer">
            <Link to="/"
                onClick={() => setShowMenu(false)}>
                <div className="appName">
                </div>
            </Link>
            <div className="nav">
                <ul className="screenMenu">
                    <li>
                        <Link to="/perspective">
                            Perspective
                        </Link>
                    </li>
                    <li>
                        <Link to="/documentary/series">
                            Documentary
                        </Link>
                    </li>
                        <li>
                        <Link to="/voices">
                            Voices
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore/general">
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link to="/help/counselling">
                            Help
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>                  
                </ul>
                <img src={MenuIcon} alt="MenuIcon" className="mobileMenuIcon" onClick={() => setShowMenu(!showMenu)}/>
                {
                    masktransition.map(({ item, key, props}) =>
                    item && 
                    <animated.div 
                    key={key} style={props}
                    className="white-screen"
                    onClick={() => setShowMenu(false)}
                    >
                    </animated.div>)
                }
                {
                    menutransition.map(({ item, key, props}) =>
                    item && 
                    <animated.div 
                    key={key} style={props}
                    className="mobileMenu">
                        <NavMenuMobile 
                        closeMenu={() => setShowMenu(false)}
                        />
                    </animated.div>)
                }  
            </div>
            <ul className="headerLogos">
                    <li className="headerLogo">
                        <a href="https://patternbased.com/" rel="noopener noreferrer" target="_blank"><img src={PBLogoL} alt="PB logo"/></a>
                    </li>
                    <li className="headerLogo">
                        <a href="https://very.sg/" rel="noopener noreferrer" target="_blank"><img src={VeryLogoL} alt="Very logo"/></a>
                    </li>
                </ul>
        </header>
    );
}

export default Header;