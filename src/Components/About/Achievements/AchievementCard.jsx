import React from 'react';

function AchievementCard({ achievementData }) {

    const { name, description } = achievementData;

    return (
        <div className='achievement-card p-5 rounded-md border border-gray-color/15 space-y-2'>
            {/* Name */}
            <h2 className='font-semibold text-xl'>{name}</h2>
            {/* Description */}
            <p className='text-gray-color/60'>{description}</p>
        </div>
    )
}

export default AchievementCard;