import React from 'react';

function Landing() {
    return (
        <section className='landing py-10 relative overflow-hidden'>
            {/* Light */}
            <div className='light absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/5 to-black/10 blur-md'></div>
            {/* Container */}
            <div className='container space-y-2'>
                <h1 className='font-semibold text-2xl'>Get in Touch with EstateIn</h1>
                <p className='text-gray-color/60'>Welcome to EstateIn's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
            </div>
        </section>
    )
}

export default Landing;