import React from 'react';
import TextArea from './Components/TextArea';
import HeroArea from './Components/HeroArea';

function Landing() {
    return (
        <div className='landing max-md:py-10 max-lg:flex-col flex items-center gap-10 py-10'>
            {/* Text Area */}
            <TextArea />
            {/* Hero Area */}
            <HeroArea />
        </div>
    )
}

export default Landing;
