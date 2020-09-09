import React from 'react';
import AboutTop from '../Components/AboutTop';
import AboutShow from '../Components/AboutShow';
import AboutCredit from '../Components/AboutCredit';
import SoothingIcon from '../Components/SoothingIcon';

function About() {
    return(
        <div className="about">
            <AboutTop/>
            <AboutShow/>
            <AboutCredit/>
            <SoothingIcon/>
        </div>
    );
}

export default About;