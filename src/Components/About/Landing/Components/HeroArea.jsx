import React from 'react';

function HeroArea() {

    const heroImageSrc = `${process.env.PUBLIC_URL}/assets/about/landingHero.png`;

    return (
        <div className='hero-area w-full md:w-1/2 rounded-xl border border-gray-color/15 max-md:-order-1'>
            <img src={heroImageSrc} alt='Landing Hero' className='rounded-xl' />
        </div>
    )
}

export default HeroArea;