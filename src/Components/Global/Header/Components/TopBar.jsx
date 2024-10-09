import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleTopBarClose } from '../../../../Store/slices/appSlice';

function TopBar() {

    const bgImage = `${process.env.PUBLIC_URL}/assets/global/topBar.png`;

    const dispatch = useDispatch();

    const { closeTopBar } = useSelector(state => state.app);

    useEffect(() => {
        if (window.localStorage.getItem('closeTopBar')) dispatch(handleTopBarClose(true));
    }, [dispatch]);

    const handleClick = () => {

        window.localStorage.setItem('closeTopBar', true);

        dispatch(handleTopBarClose(true));
    };

    if (window.localStorage.getItem('closeTopBar') || closeTopBar) return;

    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
            }}
            className='top-bar py-3 relative'
        >
            <div className='container text-center'>
                <div className='flex flex-wrap items-center justify-center gap-2'>
                    <p className='max-sm:text-sm font-medium'>✨Discover Your Dream Property with EstateIn</p>
                    <Link to={'/'} className='underline sm:hover:text-purple-color transition-colors'>Learn More</Link>
                </div>
            </div>
            {/* Close Button */}
            <button
                type='button'
                title='Close'
                onClick={handleClick}
                aria-label='Close Top Bar'
                className='absolute top-1/2 -translate-y-1/2 max-sm:right-1 sm:right-3 z-10 w-10 h-10 leading-10 text-center rounded-full bg-white/10 sm:hover:bg-white/20 transition-colors'
            >
                <i className="fa-solid fa-x"></i>
            </button>
        </div>
    )
}

export default TopBar;