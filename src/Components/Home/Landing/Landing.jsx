import React from 'react';
import TextArea from './Components/TextArea';
import HeroArea from './Components/HeroArea';

function Landing() {
    return (
        <section
            id='hero-section'
            className='landing max-md:py-10 max-lg:flex-col flex items-center gap-10'
        >
            {/* Text Area */}
            <TextArea />
            {/* Hero Area */}
            <HeroArea />
        </section>
    )
}

export default Landing;