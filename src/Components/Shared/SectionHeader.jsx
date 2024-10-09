import React from 'react';

function SectionHeader({ title, description }) {
    return (
        <div className='section-header space-y-3'>
            <h1 className='font-bold text-xl md:text-3xl'>{title}</h1>
            <p className='text-gray-color/60'>{description}</p>
        </div>
    )
}

export default SectionHeader;