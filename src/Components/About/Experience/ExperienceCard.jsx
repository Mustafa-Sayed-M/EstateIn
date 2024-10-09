import React from 'react'

function ExperienceCard({ index, experienceData }) {

    const {
        name,
        description
    } = experienceData;

    return (
        <div className='experience-card'>
            {/* Step Count */}
            <div className='step-count p-3 border-s border-s-purple-color'>
                Step 0{index + 1}
            </div>
            {/* Content Body */}
            <div className='content-body p-3 rounded-md rounded-tl-none border border-gray-color/15 space-y-2 relative'>
                {/* Light */}
                <div className='absolute z-10 bg-gradient-to-r from-purple-color to-black w-full h-full left-0 top-0 blur-xl opacity-15'></div>
                {/* Border */}
                <div className='absolute z-20 -top-[9px] -left-[1px] w-16 h-16 border border-transparent border-t-purple-color border-l-purple-color'></div>
                {/* Name */}
                <h2 className='font-semibold text-xl'>{name}</h2>
                {/* Description */}
                <p className='text-gray-color/60 line-clamp-3'>{description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard