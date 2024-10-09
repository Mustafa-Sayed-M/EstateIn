import React from 'react';
import { Link } from 'react-router-dom';

function FeatureCard({ featureData }) {

    const { icon, name } = featureData;

    return (
        <div className='feature-card bg-gray-color/10 border border-gray-color/15 rounded-md p-5 space-y-2 text-center relative'>
            {/* Link */}
            <Link
                to={'/'}
                className='block absolute top-2 right-2 text-purple-color/70 text-xl -rotate-45'
            >
                <i className="fa-solid fa-arrow-right"></i>
            </Link>
            {/* Content */}
            <img src={`${process.env.PUBLIC_URL}${icon}`} alt={name} className='mx-auto' />
            <p className='font-semibold'>{name}</p>
        </div>
    )
}

export default FeatureCard;