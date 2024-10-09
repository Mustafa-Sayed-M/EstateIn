import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { handleNavbarMenuToggle } from '../../../../../../Store/slices/appSlice';

const linksList = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/properties', label: 'Properties' },
    { to: '/services', label: 'Services' }
]

function NavbarMenu() {

    const { openNavbarMenu } = useSelector(state => state.app);

    const dispatch = useDispatch();

    const handleClickOutSide = useCallback(() => {
        dispatch(handleNavbarMenuToggle(false));
    }, [dispatch]);

    useEffect(() => {

        document.addEventListener('click', handleClickOutSide);

        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };

    }, [handleClickOutSide]);

    return (
        <div
            style={{ transformOrigin: "top right" }}
            className={`navbar-menu md:hidden absolute left-0 top-full w-full z-50 bg-white/10 backdrop-blur-sm transition ${!openNavbarMenu ? "scale-0 opacity-0" : ""}`}
        >
            <div className='container py-2'>
                <ul>
                    {linksList.map((link, index) => <li key={index}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) => `block py-2 px-4 border rounded-md transition-colors ${isActive ? 'bg-body-color border-gray-color/15' : 'sm:hover:bg-body-color sm:hover:border-gray-color/15 border-transparent'}`}
                        >
                            {link.label}
                        </NavLink>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default NavbarMenu;