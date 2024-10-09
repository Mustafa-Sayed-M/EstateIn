import React from 'react';

function Statistics() {
    return (
        <div className='statistics grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-5'>
            <div className='p-3 rounded-md bg-gray-color/10 space-y-2'>
                <h2 className='text-3xl font-bold'>200+</h2>
                <p className='font-medium text-gray-color/60'>Happy Customers</p>
            </div>
            <div className='p-3 rounded-md bg-gray-color/10 space-y-2'>
                <h2 className='text-3xl font-bold'>10k+</h2>
                <p className='font-medium text-gray-color/60'>Properties For Clients</p>
            </div>
            <div className='p-3 rounded-md bg-gray-color/10 sm:col-span-2 md:col-span-1 space-y-2'>
                <h2 className='text-3xl font-bold'>16+</h2>
                <p className='font-medium text-gray-color/60'>Years of Experience</p>
            </div>
        </div>
    )
}

export default Statistics;