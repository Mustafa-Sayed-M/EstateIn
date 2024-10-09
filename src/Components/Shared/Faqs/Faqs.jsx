import React, { useRef } from 'react';
import SectionHeader from '../SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import FaqCard from './FaqCard';
import SwiperPagination from '../SwiperPagination';
import 'swiper/css';

function Faqs() {

    const { faqs } = useSelector(state => state.staticData);

    const swiperRef = useRef(null);

    return (
        <section className='faqs py-5 space-y-7' id='faqs'>
            {/* Section Header */}
            <SectionHeader
                title={`Frequently Asked Questions`}
                description={`Find answers to common questions about EstateIn's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`}
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
                    onSwiper={(swiper) => swiperRef.current = swiper}
                >
                    {
                        faqs.map((faq, index) => <SwiperSlide key={index}>
                            <FaqCard faqData={faq} />
                        </SwiperSlide>)
                    }
                </Swiper>
                {/* Pagination */}
                <SwiperPagination swiperRef={swiperRef} />
            </div>
        </section>
    )
}

export default Faqs;