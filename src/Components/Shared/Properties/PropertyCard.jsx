import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ propertyData }) {

  const {
    id,
    name,
    description,
    price,
    bedroomsCount,
    bathroomsCount,
    image
  } = propertyData;

  return (
    <div className='property-card p-5 rounded-md border border-gray-color/15 space-y-5'>
      {/* Image Link */}
      <Link
        to={`/properties/${id}`}
        className='block hover:scale-105 hover:grayscale duration-300 ease-in-out transition'
      >
        <img src={`${process.env.PUBLIC_URL}${image}`} alt={name} className='rounded-md' />
      </Link>
      {/* Text Box */}
      <div className='text-box space-y-1'>
        {/* Name */}
        <h2 className='font-semibold text-xl'>{name}</h2>
        {/* Description */}
        <div className='description-box flex items-end'>
          {/* Description Text */}
          <p className='text-gray-color/60 line-clamp-2'>{description}</p>
          {/* Link Read More */}
          <Link
            to={`/properties/${id}`}
            className='sm:hover:text-purple-color transition-colors font-medium text-nowrap underline'
          >
            Read More
          </Link>
        </div>
      </div>
      {/* Info */}
      <div className='info space-y-3'>
        {/* Header Info */}
        <div className='header-info'>
          <ul className='flex flex-wrap items-center gap-2'>
            <li className='border border-gray-color/15 rounded-full py-2 px-4'>
              <i className="fa-solid fa-bed fa-fw me-2"></i>
              <span>{bedroomsCount}-Bedrooms</span>
            </li>
            <li className='border border-gray-color/15 rounded-full py-2 px-4'>
              <i className="fa-solid fa-sink me-2"></i>
              <span>{bathroomsCount}-Bathrooms</span>
            </li>
          </ul>
        </div>
        {/* Footer Info */}
        <div className='footer-info flex items-end justify-between gap-2 flex-wrap'>
          {/* Price */}
          <div className='price'>
            <p className='text-gray-color/60'>Price</p>
            <h1 className='font-bold text-xl'>${price}</h1>
          </div>
          {/* Link Detail */}
          <Link
            to={`/properties/${id}`}
            className='bg-purple-color py-2 px-4 rounded-md sm:hover:bg-purple-color/20 sm:hover:text-purple-color transition-colors font-medium'
          >
            View Property Detail
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard;