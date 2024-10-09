import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeader from '../../Shared/SectionHeader';
import EffortlessCard from './EffortlessCard';
import Component from '../Shared/Component';

function Effortless() {
    const { effortless } = useSelector(state => state.staticData);

    return (
        <section className='effortless py-5 space-y-7' id='effortless'>
            {/* Section Header */}
            <SectionHeader
                title={`Unlock Property Value`}
                description={`Selling your property should be a rewarding experience, and at EstateIn, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey.`}
            />
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {effortless.map((effortlessItem, index) => <EffortlessCard key={index} effortlessData={effortlessItem} />)}
                <Component
                    className={'sm:col-span-2 flex max-sm:flex-col items-center gap-5'}
                    title={'Experience Effortless Property Management'}
                    description={'Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.'}
                />
            </div>
        </section>
    )
}

export default Effortless;