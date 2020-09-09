import React from 'react';
import {Link} from "react-router-dom";

function NavMenuMobile(props){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/"
                    onClick={props.closeMenu}>
                        Scene
                    </Link>
                </li>
                <li>
                    <Link to="/voice"
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
                    <Link to="/about"
                    onClick={props.closeMenu}>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default NavMenuMobile

