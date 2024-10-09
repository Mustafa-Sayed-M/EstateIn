import React from 'react';

function UnlockPropertyCard({ unlockPropertyData }) {

    const {
        icon,
        name,
        description
    } = unlockPropertyData;

    return (
        <div className='unlock-property-card p-3 border border-gray-color/15 rounded-md'>
            {/* Header */}
            <div className='header flex items-center gap-2 mb-3'>
                {/* Icon */}
                <div className='icon w-10 h-10 flex items-center justify-center rounded-full border border-purple-color text-purple-color'>
                    <img src={`${process.env.PUBLIC_URL}${icon}`} alt={name} />
                </div>
                {/* Name */}
                <h3 className='font-semibold text-xl'>{name}</h3>
            </div>
            {/* Description */}
            <p className='text-gray-color/60 line-clamp-3'>{description}</p>
        </div>
    )
}

export default UnlockPropertyCard;