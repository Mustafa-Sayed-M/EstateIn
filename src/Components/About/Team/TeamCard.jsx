import React from 'react';
import { Link } from 'react-router-dom';

function TeamCard({ teamItemData }) {

    const {
        image,
        name,
        position
    } = teamItemData;

    return (
        <div className='team-card p-4 border border-gray-color/15 rounded-md'>
            {/* Image */}
            <div className='image mb-3'>
                <img src={`${process.env.PUBLIC_URL}${image}`} alt={name} className='rounded-md w-full' />
                {/* Twitter Link */}
                <Link
                    to={'/about'}
                    className='block w-fit mx-auto bg-purple-color py-2 px-4 rounded-full -mt-5 relative sm:hover:bg-white sm:hover:text-purple-color transition-colors'
                >
                    <i className="fa-brands fa-twitter fa-fw"></i>
                </Link>
            </div>
            {/* Team Info */}
            <div className='team-info text-center space-y-1 mb-3'>
                {/* Name */}
                <h4 className='font-medium text-xl'>{name}</h4>
                {/* Position */}
                <p className='text-gray-color/60'>{position}</p>
            </div>
            {/* Send Hello Message */}
            <form onSubmit={e => e.preventDefault()} className='flex gap-2 p-2 border border-gray-color/15 rounded-md focus-within:border-purple-color transition-colors'>
                {/* Input Field */}
                <input
                    required
                    type='text'
                    id='message'
                    name='message'
                    autoComplete='on'
                    defaultValue={'Say Hello 👋'}
                    placeholder='Enter Your Message'
                    className='bg-transparent focus:outline-none p-2 w-full caret-purple-color'
                />
                {/* Submit */}
                <button
                    type='submit'
                    title='Send'
                    className='bg-purple-color p-2 rounded-full sm:hover:bg-white sm:hover:text-purple-color transition-colors'
                >
                    <i className="fa-solid fa-paper-plane fa-fw"></i>
                </button>
            </form>
        </div>
    )
}

export default TeamCard;