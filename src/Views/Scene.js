import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { isIOS } from "react-device-detect";

function Scene() {
    const [count, setCount] = useState(0);

    return(
        <div className="scene">
            <IFrameSize key={count} onLoad={() => setCount(count + 1)}/>
        </div>
    );
};

function IFrameiOSSm() {
    const theHeight = window.innerHeight - 40;
    return <Iframe url="https://siorikitajima.github.io/Test-Site/strangersWalkers/iOS/" width="100%" height = {theHeight} display="initial" position="relative" frameBorder="none" styles={{margin: "0", border: "none"}}/>
};

function IFrameiOSLa() {
    const theHeight = window.innerHeight - 60;
    return <Iframe url="https://siorikitajima.github.io/Test-Site/strangersWalkers/iOS/" width="100%" height = {theHeight} display="initial" position="relative" frameBorder="none" styles={{margin: "0", border: "none"}}/>
};

function IFrameSm() {
    const theHeight = window.innerHeight - 40;
    return <Iframe url="https://siorikitajima.github.io/Test-Site/strangersWalkers/" width="100%" height = {theHeight} display="initial" position="relative" frameBorder="none" styles={{margin: "0", border: "none"}}/>
};

function IFrameLa() {
    const theHeight = window.innerHeight - 60;
    return <Iframe url="https://siorikitajima.github.io/Test-Site/strangersWalkers/" width="100%" height = {theHeight} display="initial" position="relative" frameBorder="none" styles={{margin: "0", border: "none"}}/>
};

function IFrameSize() {
    if (window.innerWidth < 960 && isIOS) {
        return <IFrameiOSSm/>;
    } else if (window.innerWidth < 960 && !isIOS) {
        return <IFrameSm/>;
    } else if (window.innerWidth >= 960 && isIOS) {
        return <IFrameiOSLa/>;
    } else {
        return <IFrameLa/>;
    }
};

export default Scene;