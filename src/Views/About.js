import React from 'react';
import AboutMain from '../Components/AboutMain';
import AboutShow from '../Components/AboutShow';
import AboutCredit from '../Components/AboutCredit';
import SoothingIcon from '../Components/SoothingIcon';

function About() {
    return(
        <div className="about">
            <AboutMain/>
            <AboutShow/>
            <AboutCredit/>
            <SoothingIcon/>
        </div>
    );
}

export default About;