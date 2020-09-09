import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '../Images/menu.svg'
import {useTransition, animated} from 'react-spring';
import NavMenuMobile from './NavMenuMobile';

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
                <Link to="/"
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
                        <Link to="/voice">
                            Voices
                        </Link>
                    </li>
                    <li>
                        <Link to="/data">
                            Data
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
                <img src={MenuIcon} alt="MenuIcon" onClick={() => setShowMenu(!showMenu)}/>
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
        </header>
    );
}

export default Header;