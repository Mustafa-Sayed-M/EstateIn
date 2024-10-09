import React from 'react';

function Landing() {
    return (
        <section className='landing py-20 relative overflow-hidden'>
            {/* Light */}
            <div className='light absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/5 to-black/10 blur-md'></div>
            {/* Container */}
            <div className='container space-y-2'>
                <h1 className='font-semibold text-2xl'>Elevate Your Real Estate Experience</h1>
                <p className='text-gray-color/60'>Welcome to EstateIn, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
            </div>
        </section>
    )
}

export default Landing;