import React from 'react';

function Landing() {
    return (
        <section className='landing py-20 relative overflow-hidden'>
            {/* Light */}
            <div className='light absolute left-0 top-0 w-full h-full bg-gradient-to-r from-gray-color/10 to-black/10 blur-md'></div>
            {/* Container */}
            <div className='container space-y-2'>
                <h1 className='font-semibold text-2xl'>Find Your Dream Property</h1>
                <p className='text-gray-color/60'>Welcome to EstateIn, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey</p>
            </div>
        </section>
    )
}

export default Landing;