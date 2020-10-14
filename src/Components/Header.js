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
            <div className="appName">
                <Link to="/#"
                onClick={() => setShowMenu(false)}>
                Strangers in my Head
                </Link>
                </div>
            <div className="nav">
                <ul className="screenMenu">
                    <li>
                        <Link to="/scene">
                            Scene
                        </Link>
                    </li>
                        <li>
                        <Link to="/voices">
                            Voices
                        </Link>
                    </li>
                    <li>
                        <Link to="/data">
                            Data
                        </Link>
                    </li>
                    <li>
                        <Link to="/help">
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
                        <a href="https://patternbased.com/" target="_blank"><img src={PBLogoL} alt="PB logo"/></a>
                    </li>
                    <li className="headerLogo">
                        <a href="https://very.sg/" target="_blank"><img src={VeryLogoL} alt="Very logo"/></a>
                    </li>
                </ul>
        </header>
    );
}

export default Header;