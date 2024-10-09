import React, { useRef } from 'react';
import PropertiesSlider from '../../Shared/Properties/PropertiesSlider';
import { useSelector } from 'react-redux';
import SectionHeader from '../../Shared/SectionHeader';
import SwiperPagination from '../../Shared/SwiperPagination';

function FeaturedProperties() {

    const { properties } = useSelector(state => state.properties);

    const swiperRef = useRef(null);

    return (
        <section className='featured-properties space-y-7 py-5' id='properties'>
            {/* Section Header */}
            <SectionHeader
                title='Featured Properties'
                description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through EstateIn. Click "View Details" for more information.'
            />
            {/* Properties Slider */}
            <PropertiesSlider propertiesList={properties} swiperRef={swiperRef} />
            {/* Pagination */}
            <SwiperPagination swiperRef={swiperRef} />
        </section>
    )
}

export default FeaturedProperties;