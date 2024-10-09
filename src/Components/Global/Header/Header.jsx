import React from 'react';
import TopBar from './Components/TopBar';
import Navbar from './Components/Navbar/Navbar';

function Header() {
    return (
        <header>
            {/* Top Bar */}
            <TopBar />
            {/* Navbar */}
            <Navbar />
        </header>
    )
}

export default Header;