import React from 'react';
import { useSelector } from 'react-redux';
import FeatureCard from './FeatureCard';

function Features() {

    const { features } = useSelector(state => state.staticData);

    return (
        <section className='features py-5' id='features'>
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {features.map((feature, index) => <FeatureCard key={index} featureData={feature} />)}
            </div>
        </section>
    )
}

export default Features;