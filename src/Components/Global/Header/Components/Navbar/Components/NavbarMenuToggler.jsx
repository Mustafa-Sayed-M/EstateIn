import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbarMenuToggle } from '../../../../../../Store/slices/appSlice';
function NavbarMenuToggler() {

    const { openNavbarMenu } = useSelector(state => state.app);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(handleNavbarMenuToggle(!openNavbarMenu));
    }

    return (
        <button
            title='Toggle Menu'
            type='button'
            onClick={handleClick}
            aria-label='Navbar Menu Toggler'
            className='text-3xl md:hidden'
        >
            <i className="fa-solid fa-bars"></i>
        </button>
    )
}

export default NavbarMenuToggler;