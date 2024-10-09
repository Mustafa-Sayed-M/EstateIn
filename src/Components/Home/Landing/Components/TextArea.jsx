import React from 'react';
import { Link } from 'react-router-dom';
import Statistics from '../../../Shared/Statistics';

function TextArea() {
    return (
        <div className='w-full lg:w-1/2'>
            <h1 className='text-lg lg:text-4xl font-semibold mb-4'>Discover Your Dream <br className='max-lg:hidden' /> Property with EstateIn</h1>
            <p className='text-gray-color/60 font-medium'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
            {/* Links */}
            <div className='links flex max-sm:flex-col items-center gap-2 mt-7'>
                {/* Learn More */}
                <Link
                    to={'/'}
                    className='block max-lg:w-full text-center border border-gray-color/15 py-2 px-4 rounded-lg sm:hover:text-purple-color transition-colors'
                >
                    Learn More
                </Link>
                {/* Browser Properties */}
                <Link
                    to={'/properties'}
                    className='block max-lg:w-full text-center bg-purple-color py-2 px-4 rounded-lg sm:hover:bg-purple-color/20 sm:hover:text-purple-color transition-colors'
                >
                    Browser Properties
                </Link>
            </div>
            {/* Statistics */}
            <Statistics />
        </div>
    )
}

export default TextArea;