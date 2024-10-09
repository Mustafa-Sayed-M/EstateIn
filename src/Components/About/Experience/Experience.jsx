import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeader from '../../Shared/SectionHeader';
import ExperienceCard from './ExperienceCard';

function Experience() {

    const { experience } = useSelector(state => state.staticData);

    return (
        <section className='experience py-5 space-y-7' id='testimonials'>
            {/* Section Header */}
            <SectionHeader
                title={`Navigating the EstateIn Experience`}
                description={`At EstateIn, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`}
            />
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {experience.map((experience, index) => <ExperienceCard key={index} index={index} experienceData={experience} />)}
            </div>
        </section>
    )
}

export default Experience;