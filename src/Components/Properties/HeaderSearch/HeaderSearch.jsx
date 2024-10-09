import React from 'react';

const selectData = [
    {
        id: 'location',
        labelIcon: 'fa-solid fa-location-dot fa-fw',
        name: 'location',
        options: [
            { value: '', text: 'Location' },
        ]
    },
    {
        id: 'propertyType',
        labelIcon: 'fa-solid fa-house-chimney fa-fw',
        name: 'propertyType',
        options: [
            { value: '', text: 'Property Type' },
        ]
    },
    {
        id: 'pricingRange',
        labelIcon: 'fa-solid fa-money-bill-wave fa-fw',
        name: 'pricingRange',
        options: [
            { value: '', text: 'Pricing Range' },
        ]
    },
    {
        id: 'propertySize',
        labelIcon: 'fa-solid fa-cube fa-fw',
        name: 'propertySize',
        options: [
            { value: '', text: 'Property Size' },
        ]
    },
    {
        id: 'buildYear',
        labelIcon: 'fa-solid fa-calendar fa-fw',
        name: 'buildYear',
        options: [
            { value: '', text: 'Build Year' },
        ]
    }
];

function HeaderSearch() {
    return (
        <div className='header-search md:-mt-10 flex flex-col max-md:gap-y-3 max-md:pb-5 max-md:pt-10'>
            {/* Form Search */}
            <div className='form-search md:px-10'>
                {/* Form */}
                <form className='form-search bg-gray-color/10 max-md:rounded-md md:rounded-t-md p-2' onSubmit={e => e.preventDefault()}>
                    <div className='relative'>
                        {/* Input Search */}
                        <input
                            required
                            id='search'
                            type='search'
                            name='search'
                            placeholder='Search For A Property'
                            className='p-3 bg-body-color w-full focus:outline-none rounded-t-md placeholder:text-gray-color/60'
                        />
                        {/* Submit Button */}
                        <button
                            type='submit'
                            title='Search'
                            className='bg-purple-color py-2 px-4 rounded-md absolute right-2 top-1/2 -translate-y-1/2 sm:hover:bg-purple-color/20 sm:hover:text-purple-color transform-colors'
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span className='max-sm:hidden ms-2'>Search</span>
                        </button>
                    </div>
                </form>
            </div>
            {/* Selects Search */}
            <div className='selects-search p-2 bg-gray-color/10 rounded-md'>
                <div className='selects-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                    {selectData.map(({ labelIcon, ...select }, index) => <div className='select-box flex items-center rounded-md bg-body-color border border-gray-color/15 px-2' key={index}>
                        {/* Label */}
                        <label htmlFor={select.id} className='cursor-pointer'><i className={labelIcon}></i></label>
                        {/* Select */}
                        <select {...select} className='p-3 cursor-pointer w-full bg-transparent focus:outline-none'>
                            {select.options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)}
                        </select>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch;