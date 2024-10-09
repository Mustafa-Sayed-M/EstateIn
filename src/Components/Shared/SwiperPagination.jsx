import React from 'react';

function SwiperPagination({ swiperRef }) {
    return (
        <div className='pagination flex items-center justify-end gap-2 py-5 border-t border-t-gray-color/15'>
            {/* Previous */}
            <button
                type='button'
                title='Previous Slide'
                aria-label='Previous Slide'
                onClick={() => swiperRef.current?.slidePrev()}
                className='w-10 h-10 leading-10 text-center rounded-full bg-gray-color/10 border border-gray-color/15 sm:hover:bg-gray-color/15 transition-colors'
            >
                <i className="fa-solid fa-angle-left fa-fw"></i>
            </button>
            {/* Next */}
            <button
                type='button'
                title='Next Slide'
                aria-label='Next Slide'
                onClick={() => swiperRef.current?.slideNext()}
                className='w-10 h-10 leading-10 text-center rounded-full bg-gray-color/10 border border-gray-color/15 sm:hover:bg-gray-color/15 transition-colors'
            >
                <i className="fa-solid fa-angle-right fa-fw"></i>
            </button>
        </div>
    )
}

export default SwiperPagination;