import React from 'react';
import Statistics from '../../../Shared/Statistics';

function TextArea() {
    return (
        <div className='text-area w-full md:w-1/2'>
            {/* Text */}
            <div className='text space-y-2'>
                <h1 className='font-bold text-3xl'>Our Journey</h1>
                <p className='text-gray-color/60'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
            </div>
            {/* Statistics */}
            <Statistics />
        </div>
    )
}

export default TextArea;
