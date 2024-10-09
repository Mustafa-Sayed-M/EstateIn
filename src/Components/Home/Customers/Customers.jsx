import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import SectionHeader from '../../Shared/SectionHeader';
import CustomerCard from './CustomerCard';
import 'swiper/css';
import SwiperPagination from '../../Shared/SwiperPagination';

function Customers() {

    const { customers } = useSelector(state => state.staticData);

    const swiperRef = useRef(null);

    return (
        <section className='faqs py-5 space-y-7' id='testimonials'>
            {/* Section Header */}
            <SectionHeader
                title={`What Our Clients Say`}
                description={`Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose EstateIn for their real estate needs.`}
            />
            {/* Section Content */}
            <div className='section-content space-y-5'>
                {/* Slider Faqs */}
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
                    loop
                    onSwiper={(swiper) => swiperRef.current = swiper}
                >
                    {
                        customers.map((customer, index) => <SwiperSlide key={index}>
                            <CustomerCard customerData={customer} />
                        </SwiperSlide>)
                    }
                </Swiper>
                {/* Pagination */}
                <SwiperPagination swiperRef={swiperRef} />
            </div>
        </section>
    )
}

export default Customers;