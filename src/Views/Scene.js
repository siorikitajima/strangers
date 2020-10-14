import React, {useState} from 'react';
import SoothingIcon from '../Components/SoothingIcon';
import Iframe from 'react-iframe';
import SceneModal from '../Components/SceneModal';

function Scene() {
    return(
        <div className="scene">
            <IFrameSize/>
            <SoothingIcon/>
            <SceneModal/>
        </div>
    );
}

function ResponsiveIFrame() {
    const theHeight = window.innerHeight - 40;
    return <Iframe url="https://siorikitajima.github.io/Test-Site/strangersWalkers/"
    width="100%"
    height = {theHeight}
    display="initial"
    position="relative"
    frameBorder="none"
    styles={{margin: "0"},{border: "none"}}/>
};

function ScreenIFrame() {
    const theHeight = window.innerHeight - 60;
    return <Iframe url="https://siorikitajima.github.io/Test-Site/strangersWalkers/"
    width="100%"
    height = {theHeight}
    display="initial"
    position="relative"
    frameBorder="none"
    styles={{margin: "0"},{border: "none"}}/>
};

function IFrameSize() {
    if (window.innerWidth < 960) {
        return <ResponsiveIFrame/>;
    }
    return <ScreenIFrame/>
}

export default Scene;