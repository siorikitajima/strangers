import React from 'react';
import {Link} from "react-router-dom";
import PBLogoL from '../Images/patternbasedlogo-light.png';
import VeryLogoL from '../Images/verylogo-light.png';

function NavMenuMobile(props){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/scene"
                    onClick={props.closeMenu}>
                        Scene
                    </Link>
                </li>
                <li>
                    <Link to="/voices"
                    onClick={props.closeMenu}>
                        Voices
                    </Link>
                </li>
                <li>
                    <Link to="/data"
                    onClick={props.closeMenu}>
                        Data
                    </Link>
                </li>
                <li>
                    <Link to="/help"
                    onClick={props.closeMenu}>
                        Find Help
                    </Link>
                </li>
                <li>
                    <Link to="/about"
                    onClick={props.closeMenu}>
                        About SIMH
                    </Link>
                </li>       
                <li>
                <a href="https://patternbased.com/"
                 target="_blank"><img src={PBLogoL} alt="PB logo" className="headerLogo"/></a>
                <a href="https://very.sg/" target="_blank"><img src={VeryLogoL} alt="Very logo" className="headerLogo"/></a>
                </li>
            </ul>
        </div>
    )
}
export default NavMenuMobile

