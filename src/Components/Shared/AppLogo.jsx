import React from 'react';
import { Link } from 'react-router-dom';

function AppLogo() {
    return (
        <Link
            to={`/`}
            className='flex items-center gap-2 font-semibold'
        >
            <img src={`${process.env.PUBLIC_URL}/assets/global/logo.png`} alt='App Logo' width={35} />
            <span>EstateIn</span>
        </Link>
    )
}

export default AppLogo;