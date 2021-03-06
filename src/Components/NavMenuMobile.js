import React from 'react';
import {Link} from "react-router-dom";
import PBLogoL from '../Images/patternbasedlogo-light.png';
import VeryLogoL from '../Images/verylogo-light.png';

function NavMenuMobile(props){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/perspective"
                    onClick={props.closeMenu}>
                        Perspective
                    </Link>
                </li>
                <li>
                    <Link to="/documentary/series"
                    onClick={props.closeMenu}>
                        Documentary
                    </Link>
                </li>
                <li>
                    <Link to="/voices"
                    onClick={props.closeMenu}>
                        Voices
                    </Link>
                </li>
                <li>
                    <Link to="/about"
                    onClick={props.closeMenu}>
                        About
                    </Link>
                </li>      
                <li>
                    <Link to="/explore/general"
                    onClick={props.closeMenu}>
                        Explore
                    </Link>
                </li>
                <li>
                    <Link to="/help/counselling"
                    onClick={props.closeMenu}>
                        Help
                    </Link>
                </li> 
                <li>
                <a href="https://patternbased.com/"
                 rel="noopener noreferrer" target="_blank"><img src={PBLogoL} alt="PB logo" className="headerLogo"/></a>
                <a href="https://very.sg/" rel="noopener noreferrer" target="_blank"><img src={VeryLogoL} alt="Very logo" className="headerLogo"/></a>
                </li>
            </ul>
        </div>
    )
}
export default NavMenuMobile

