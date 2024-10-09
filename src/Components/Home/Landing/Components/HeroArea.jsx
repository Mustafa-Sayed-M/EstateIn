import React from 'react';

function HeroArea() {

    const heroImageBgSrc = `${process.env.PUBLIC_URL}/assets/home/landing/landingHeroBg.png`
    const heroImageSrc = `${process.env.PUBLIC_URL}/assets/home/landing/landingHero.png`;
    const heroPatternImageSrc = `${process.env.PUBLIC_URL}/assets/home/landing/landingHeroPattern.png`;

    return (
        <div
            className='hero-area w-full lg:w-1/2 max-lg:rounded-xl max-lg:-order-1 max-lg:mb-7 relative'
            style={{
                backgroundImage: `url(${heroImageBgSrc})`
            }}
        >
            {/* Hero Pattern */}
            <img
                src={heroPatternImageSrc}
                alt='Landing Hero Pattern'
                className='w-[80px] md:w-[120px] absolute max-lg:translate-x-1/2 lg:-translate-x-1/2 translate-y-1/2 left-0 max-lg:bottom-0 lg:top-0'
            />
            {/* Hero Image */}
            <img
                src={heroImageSrc}
                alt='Landing hero'
                className='max-lg:rounded-xl'
            />
        </div>
    )
}

export default HeroArea;