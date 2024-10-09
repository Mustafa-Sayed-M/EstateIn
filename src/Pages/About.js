import React from 'react';
import Landing from '../Components/About/Landing/Landing';
import Values from '../Components/About/Values/Values';
import Achievements from '../Components/About/Achievements/Achievements';
import Experience from '../Components/About/Experience/Experience';
import Team from '../Components/About/Team/Team';

function About() {
    return (
        <div className='about-page'>
            <div className='container'>
                {/* Landing */}
                <Landing />
                {/* Values */}
                <Values />
                {/* Achievements */}
                <Achievements />
                {/* Experience */}
                <Experience />
                {/* Team */}
                <Team />
            </div>
        </div>
    )
}

export default About;