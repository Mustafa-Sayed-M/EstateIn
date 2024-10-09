import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropertyCard from './PropertyCard';
import 'swiper/css';

function PropertiesSlider({ propertiesList, swiperRef }) {
    return (
        <Swiper
            spaceBetween={15}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                575: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                }
            }}
            onSwiper={(swiper) => swiperRef.current = swiper}
        >
            {propertiesList.map((property, index) => <SwiperSlide key={index}>
                <PropertyCard propertyData={property} />
            </SwiperSlide>)}
        </Swiper>
    )
}

export default PropertiesSlider;