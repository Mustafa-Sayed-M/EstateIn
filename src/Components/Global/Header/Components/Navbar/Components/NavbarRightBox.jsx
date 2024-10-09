import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarMenuToggler from './NavbarMenuToggler';

function NavbarRightBox() {
    return (
        <div className='navbar-right-box flex items-center gap-2'>
            {/* Contact Link */}
            <NavLink
                to={'/contact'}
                className={({ isActive }) => `max-sm:hidden block py-2 px-4 bg-body-color rounded-md transition-colors border ${isActive ? 'bg-purple-color border-purple-color' : 'hover:bg-purple-color hover:border-purple-color border-gray-color/15'}`}
            >
                Contact Us
            </NavLink>
            {/* Navbar Menu Toggler */}
            <NavbarMenuToggler />
        </div>
    )
}

export default NavbarRightBox;