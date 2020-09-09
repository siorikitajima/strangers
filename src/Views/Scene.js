import React from 'react';
import SoothingIcon from '../Components/SoothingIcon';
import Iframe from 'react-iframe'

function Scene() {
    return(
        <div className="scene">
            <Iframe url="https://siorikitajima.github.io/Test-Site/crowdWalkingCanvas/"
            width="100%"
            height="100%"
            display="initial"
            position="relative"/>
            <SoothingIcon/>
        </div>
    );
}

export default Scene;