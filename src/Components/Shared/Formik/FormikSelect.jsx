import { ErrorMessage } from 'formik';
import React from 'react';

function FormikSelect({ label, options, ...selectData }) {
    return (
        <div className='formik-select'>
            {/* Label */}
            <label htmlFor={selectData.id} className='font-medium'>{label}</label>
            {/* Select */}
            <select
                {...selectData}
                className='mt-2 placeholder:text-gray-color/60 focus:outline-none border border-gray-color/15 bg-gray-color/10 rounded-md p-3 w-full shadow-sm sm:hover:border-primary-color focus:border-primary-color transition-colors text-gray-color/60 cursor-pointer'
            >
                {options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)}
            </select>
            {/* Error Message */}
            <ErrorMessage name={selectData.name} component={'div'} className='text-red-500 mt-2' />
        </div>
    )
}

export default FormikSelect;