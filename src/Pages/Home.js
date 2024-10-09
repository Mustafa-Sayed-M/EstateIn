import React from 'react';
import Faqs from '../Components/Shared/Faqs/Faqs';
import Landing from '../Components/Home/Landing/Landing';
import Features from '../Components/Shared/Features/Features';
import FeaturedProperties from '../Components/Home/FeaturedProperties/FeaturedProperties';
import Customers from '../Components/Home/Customers/Customers';

function Home() {
    return (
        <div className='home-page'>
            <div className='container'>
                {/* Landing */}
                <Landing />
                {/* Features */}
                <Features />
                {/* Featured Properties */}
                <FeaturedProperties />
                {/* Customers */}
                <Customers />
                {/* Faqs */}
                <Faqs />
            </div>
        </div>
    )
}

export default Home;