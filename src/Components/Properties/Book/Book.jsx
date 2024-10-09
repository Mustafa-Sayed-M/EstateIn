import React from 'react';
import SectionHeader from '../../Shared/SectionHeader';
import BookForm from './BookForm';

function Book() {
    return (
        <section className='book py-5 space-y-7' id='book'>
            {/* Section Header */}
            <SectionHeader
                title={`Let's Make it Happen`}
                description={`Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.`}
            />
            {/* Book Form */}
            <BookForm />
        </section>
    )
}

export default Book;