import React from 'react';
import SectionHeader from '../../Shared/SectionHeader';
import { useSelector } from 'react-redux';
import UnlockPropertyCard from './UnlockPropertyCard';
import Component from '../Shared/Component';

function UnlockProperty() {

    const { properties } = useSelector(state => state.staticData);

    return (
        <section className='unlock-property py-5 space-y-7' id='testimonials'>
            {/* Section Header */}
            <SectionHeader
                title={`Unlock Property Value`}
                description={`Selling your property should be a rewarding experience, and at EstateIn, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey.`}
            />
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {properties.map((property, index) => <UnlockPropertyCard key={index} unlockPropertyData={property} />)}
                <Component
                    className={'sm:col-span-2 flex max-sm:flex-col items-center gap-5'}
                    title={'Unlock the Value of Your Property Today'}
                    description={'Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.'}
                />
            </div>
        </section>
    )
}

export default UnlockProperty;