import React from 'react';
import { NavLink } from 'react-router-dom';

const linksList = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/properties", label: "Properties" },
    { to: "/services", label: "Services" },
]

function NavbarLinks() {
    return (
        <ul className='flex items-center max-md:hidden gap-1'>
            {linksList.map((link, index) => <li key={index}>
                <NavLink
                    to={link.to}
                    className={({ isActive }) => `block py-2 px-4 border rounded-md transition-colors ${isActive ? 'bg-body-color border-gray-color/15' : 'hover:bg-body-color hover:border-gray-color/15 border-transparent'}`}
                >
                    {link.label}
                </NavLink>
            </li>)}
        </ul>
    )
}

export default NavbarLinks;