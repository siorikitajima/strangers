import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { isIOS } from "react-device-detect";
import { isFirefox } from "react-device-detect";

function Perspective() {
    const [count, setCount] = useState(0);

    return(
        <div className="scene">
            <IFrameSize key={count} onLoad={() => setCount(count + 1)}/>
        </div>
    );
};

function IFrameiOSSm(count) {
    const theHeight = window.innerHeight - 40;
    return <Iframe key={count} url="http://dev.strangersinmyhead.info/perspective-sketches/iOS/" width="100%" height = {theHeight} display="initial" position="relative" frameBorder="none" styles={{margin: "0", border: "none"}}/>
};

function IFrameiOSLa(count) {
    const theHeight = window.innerHeight - 60;
    return <Iframe key={count} url="http://dev.strangersinmyhead.info/perspective-sketches/iOS/" width="100%" height = {theHeight} display="initial" position="relative" frameBorder="none" styles={{margin: "0", border: "none"}}/>
};

function IFrameSm(count) {
    const theHeight = window.innerHeight - 40;
    return <Iframe key={count} url="http://dev.strangersinmyhead.info/perspective-sketches/" width="100%" height = {theHeight} display="initial" position="relative" frameBorder="none" styles={{margin: "0", border: "none"}}/>
};

function IFrameLa(count) {
    const theHeight = window.innerHeight - 60;
    return <Iframe key={count} url="http://dev.strangersinmyhead.info/perspective-sketches/" width="100%" height = {theHeight} display="initial" position="relative" frameBorder="none" styles={{margin: "0", border: "none"}}/>
};

function IFrameSize() {
    if (window.innerWidth < 960 && isIOS) {
        return <IFrameiOSSm/>;
    } else if (window.innerWidth < 960 && isFirefox) {
        return <IFrameiOSSm/>;
    } else if (window.innerWidth < 960 && !isIOS) {
        return <IFrameSm/>;
    } else if (window.innerWidth >= 960 && isIOS) {
        return <IFrameiOSLa/>;
    } else if (window.innerWidth >= 960 && isFirefox) {
        return <IFrameiOSLa/>;
    } else {
        return <IFrameLa/>;
    }
};

export default Perspective;