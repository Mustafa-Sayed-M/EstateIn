import React from 'react';
import AppLogo from '../../../../Shared/AppLogo';
import NavbarLinks from './Components/NavbarLinks';
import NavbarRightBox from './Components/NavbarRightBox';
import NavbarMenu from './Components/NavbarMenu';

function Navbar() {
    return (
        <nav className='bg-black-color relative'>
            <div className='container flex items-center justify-between min-h-[60px]'>
                {/* App Logo */}
                <AppLogo />
                {/* Navbar Links */}
                <NavbarLinks />
                {/* Navbar Right Box */}
                <NavbarRightBox />
            </div>
            {/* Navbar Menu */}
            <NavbarMenu />
        </nav>
    )
}

export default Navbar;