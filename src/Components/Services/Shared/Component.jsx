import React from 'react';
import { Link } from 'react-router-dom';

function Component({ title, description, className }) {
    return (
        <div
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/shared/component.png)`,
                backgroundSize: "cover",
            }}
            className={`-component p-3 rounded-md border border-gray-color/15 ${className}`}
        >
            {/* Text Wrapper */}
            <div className='text-wrapper space-y-2'>
                <h1 className='font-bold text-2xl'>{title}</h1>
                <p className='text-gray-color/60'>{description}</p>
            </div>
            {/* Learn More */}
            <Link
                className='block max-sm:w-full text-center py-2 px-4 bg-black-color text-nowrap rounded-md border border-gray-color/15 sm:hover:bg-gray-color/15 transition-colors'
            >
                Learn More
            </Link>
        </div>
    )
}

export default Component;