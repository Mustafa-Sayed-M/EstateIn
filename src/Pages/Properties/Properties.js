import React from 'react';
import Landing from '../../Components/Properties/Landing';
import HeaderSearch from '../../Components/Properties/HeaderSearch/HeaderSearch';
import DiscoverProperties from '../../Components/Properties/DiscoverProperties/DiscoverProperties';
import Book from '../../Components/Properties/Book/Book';

function Properties() {
    return (
        <div className='properties-page'>
            {/* Landing */}
            <Landing />
            <div className='container'>
                {/* Header Search */}
                <HeaderSearch />
                {/* DiscoverProperties */}
                <DiscoverProperties />
                {/* Book */}
                <Book />
            </div>
        </div>
    )
}

export default Properties;