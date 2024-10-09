import React from 'react';
import { useSelector } from 'react-redux';
import ValueCard from './ValueCard';

function Values() {

    const { values } = useSelector(state => state.staticData);

    return (
        <section className='values py-10' id='values'>
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Text Area */}
                <div className='text-area space-y-2'>
                    <h1 className='font-semibold text-3xl'>Our Values</h1>
                    <p className='text-gray-color/60'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                </div>
                {/* Values Wrapper */}
                <div className='values-wrapper grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {values.map((value, index) => <ValueCard key={index} valueData={value} />)}
                </div>
            </div>
        </section>
    )
}

export default Values;
