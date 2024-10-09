import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import SectionHeader from '../../Shared/SectionHeader';
import PropertiesSlider from '../../Shared/Properties/PropertiesSlider';
import SwiperPagination from '../../Shared/SwiperPagination';

function DiscoverProperties() {
    const { properties } = useSelector(state => state.properties);

    const swiperRef = useRef(null);

    return (
        <section className='featured-properties space-y-7 py-5' id='properties'>
            {/* Section Header */}
            <SectionHeader
                title='Discover a World of Possibilities'
                description='Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home'
            />
            {/* Properties Slider */}
            <PropertiesSlider propertiesList={properties} swiperRef={swiperRef} />
            {/* Pagination */}
            <SwiperPagination swiperRef={swiperRef} />
        </section>
    )
}

export default DiscoverProperties;