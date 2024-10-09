import React from 'react';
import SectionHeader from '../../Shared/SectionHeader';
import { useSelector } from 'react-redux';
import AchievementCard from './AchievementCard';

function Achievements() {

    const { achievements } = useSelector(state => state.staticData);

    return (
        <section className='faqs py-5 space-y-7' id='testimonials'>
            {/* Section Header */}
            <SectionHeader
                title={`Our Achievements`}
                description={`Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.`}
            />
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {achievements.map((achievement, index) => <AchievementCard key={index} achievementData={achievement} />)}
            </div>
        </section>
    )
}

export default Achievements;