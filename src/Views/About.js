import React from 'react';
import AboutMain from '../Components/AboutMain';
import AboutShow from '../Components/AboutShow';
import AboutCredit from '../Components/AboutCredit';

function About() {
    return(
        <div className="about">
            <AboutMain/>
            <AboutShow/>
            <AboutCredit/>
        </div>
    );
}

export default About;