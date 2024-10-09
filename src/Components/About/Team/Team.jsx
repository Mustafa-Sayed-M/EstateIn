import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeader from '../../Shared/SectionHeader';
import TeamCard from './TeamCard';

function Team() {
    const { team } = useSelector(state => state.staticData);

    return (
        <section className='team py-5 space-y-7' id='team'>
            {/* Section Header */}
            <SectionHeader
                title={`Meet the EstateIn Team`}
                description={`At EstateIn, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.`}
            />
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {team.map((teamItem, index) => <TeamCard key={index} teamItemData={teamItem} />)}
            </div>
        </section>
    )
}

export default Team;