import React from 'react';
import { useNavigate } from 'react-router-dom';

function LinksComponent({ title, navigateTo, linksList }) {

    const navigate = useNavigate();

    const handleClick = (e, href) => {
        e.preventDefault();

        // Get Section Element:
        const targetSection = document.getElementById(href);

        setTimeout(() => { // Wait for navigation complete:
            navigate(navigateTo);
        }, 0);

        // Scroll to Section if Founded:
        targetSection?.scrollIntoView({ behavior: 'smooth' });

    };

    return (
        <div className='links-component max-sm:border-b max-sm:border-b-gray-color/15'>
            <h2 className='font-semibold mb-2 text-lg'>{title}</h2>
            <ul>
                {linksList.map((link, index) => <li key={index}>
                    <a onClick={(e) => handleClick(e, link.href)} href={link.href} className='block py-2 text-gray-color sm:hover:text-white transition-colors'>{link.label}</a>
                </li>)}
            </ul>
        </div>
    )
}

export default LinksComponent;