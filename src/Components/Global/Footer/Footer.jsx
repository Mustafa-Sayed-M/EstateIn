import React from 'react';
import LinksComponent from './Components/LinksComponent';
import AppLogo from '../../Shared/AppLogo';

const footerLinksData = [
    {
        title: 'Home',
        linksList: [
            { href: 'hero-section', label: 'Hero Section' },
            { href: 'features', label: 'Features' },
            { href: 'properties', label: 'Properties' },
            { href: 'testimonials', label: 'Testimonials' },
            { href: 'faqs', label: 'FAQ’s' }
        ],
        navigateTo: '/'
    },
    {
        title: 'About Us',
        linksList: [
            { href: 'about/story', label: 'Our Story' },
            { href: '', label: 'Our Works' },
            { href: '', label: 'How It Works' },
            { href: '', label: 'Our Team' },
            { href: '', label: 'Our Clients' }
        ],
        navigateTo: '/about'
    },
    {
        title: 'Properties',
        linksList: [
            { href: '', label: 'Portfolio' },
            { href: '', label: 'Categories' }
        ],
        navigateTo: '/properties'
    },
    {
        title: 'Services',
        linksList: [
            { href: '', label: 'Valuation Mastery' },
            { href: '', label: 'Strategic Marketing' },
            { href: '', label: 'Negotiation Wizardry' },
            { href: '', label: 'Closing Success' },
            { href: '', label: 'Property Management' }
        ],
        navigateTo: '/services'
    },
    {
        title: 'Contact Us',
        linksList: [
            { href: 'contact', label: 'Contact Form' },
            { href: '', label: 'Our Offices' }
        ],
        navigateTo: '/contact'
    },
];

function Footer() {
    return (
        <footer className='py-10'>
            <div className='container'>
                {/* Header */}
                <div className='col-span-6 space-y-3 mb-5'>
                    {/* App Logo */}
                    <AppLogo />
                    {/* Form Subscribe */}
                    <form onSubmit={e => e.preventDefault()} className='flex items-center gap-2 border border-gray-color/15 rounded-md p-2 focus-within:border-purple-color transition-colors'>
                        {/* Label */}
                        <label htmlFor='email'><i className="fa-solid fa-envelope fa-fw"></i></label>
                        {/* Input */}
                        <input
                            required
                            id='email'
                            name='email'
                            type='email'
                            autoComplete='on'
                            placeholder='Enter Your Email'
                            className='focus:outline-none bg-transparent p-2 w-full'
                        />
                        {/* Submit */}
                        <button
                            aria-label='Submit Email'
                            title='Send'
                            type='submit'
                            className='sm:hover:text-purple-color transition-colors px-2'
                        >
                            <i className="fa-solid fa-paper-plane fa-fw"></i>
                        </button>
                    </form>
                </div>
                {/* Content Grid */}
                <div className='content-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {/* Links */}
                    {footerLinksData.map((itemData, index) => <LinksComponent key={index} {...itemData} />)}
                </div>
            </div>
        </footer>
    )
}

export default Footer;