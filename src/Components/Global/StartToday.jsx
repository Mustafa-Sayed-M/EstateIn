import React from 'react';

function StartToday() {

    const backgroundImage = `${process.env.PUBLIC_URL}/assets/global/cta.png`;

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover"
            }}
            className='start-today'
        >
            <div className='container md:h-[200px] max-md:py-10 flex max-md:flex-col items-center gap-y-5 gap-x-10'>
                {/* Text Area */}
                <div className='text-area space-y-3 w-full'>
                    <h1 className='font-bold text-3xl leading-tight'>Start Your Real Estate Journey Today</h1>
                    <p className='text-gray-color/60'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                {/* Button */}
                <button className='bg-purple-color text-nowrap py-2 px-4 rounded-md max-md:w-full sm:hover:bg-purple-color/20 sm:hover:text-purple-color transition-colors'>
                    Start Today
                </button>
            </div>
        </div>
    )
}

export default StartToday;