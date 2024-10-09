import React from 'react';

function CustomerCard({ customerData }) {

    const {
        quote,
        content,
        customerInfo: {
            avatar,
            name,
            location,
        }
    } = customerData;

    return (
        <div className='customer-card p-5 border border-gray-color/15 rounded-md space-y-7'>
            {/* List Of Stars */}
            <ul className='flex items-center gap-1'>
                <li className='w-10 h-10 leading-10 text-center bg-gray-color/10 border border-gray-color/15 rounded-full'><i className="fa-solid fa-star text-yellow-color"></i></li>
                <li className='w-10 h-10 leading-10 text-center bg-gray-color/10 border border-gray-color/15 rounded-full'><i className="fa-solid fa-star text-yellow-color"></i></li>
                <li className='w-10 h-10 leading-10 text-center bg-gray-color/10 border border-gray-color/15 rounded-full'><i className="fa-solid fa-star text-yellow-color"></i></li>
                <li className='w-10 h-10 leading-10 text-center bg-gray-color/10 border border-gray-color/15 rounded-full'><i className="fa-solid fa-star text-yellow-color"></i></li>
                <li className='w-10 h-10 leading-10 text-center bg-gray-color/10 border border-gray-color/15 rounded-full'><i className="fa-solid fa-star text-yellow-color"></i></li>
            </ul>
            {/* Text */}
            <div className='text space-y-2'>
                {/* Quote */}
                <h4 className='font-semibold text-xl line-clamp-1'>{quote}</h4>
                {/* Content */}
                <p className='text-gray-color/60 line-clamp-2'>{content}</p>
            </div>
            {/* Info */}
            <div className='info flex items-center gap-3'>
                {/* Avatar */}
                <img src={`${process.env.PUBLIC_URL}${avatar}`} alt={name} width={50} className='rounded-full' />
                <div className='info-text'>
                    {/* Name */}
                    <h5 className='font-semibold'>{name}</h5>
                    {/* Location */}
                    <p className='text-gray-color/60'>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard;