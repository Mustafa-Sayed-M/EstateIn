import React from 'react';

function FaqCard({ faqData }) {

    const {
        quiz,
        answer
    } = faqData;

    return (
        <div className='faq-card border border-gray-color/15 p-5 rounded-md'>
            <h3 className='font-semibold mb-2 text-xl'>{quiz}</h3>
            <p className='text-gray-color/60 line-clamp-2'>{answer}</p>
            <button
                type='button'
                title='Learn More'
                aria-label='Learn More'
                className='py-2 px-4 border border-gray-color/15 rounded-md mt-7 bg-gray-color/10 sm:hover:bg-gray-color/15 transition-colors'
            >
                Learn More
            </button>
        </div>
    )
}

export default FaqCard;