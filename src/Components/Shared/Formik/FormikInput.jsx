import { ErrorMessage } from 'formik';
import React from 'react';

function FormikInput({ label, ...inputData }) {
    return (
        <div className='formik-input'>
            {/* Label */}
            <label htmlFor={inputData.id} className='font-medium'>{label}</label>
            {/* Input */}
            <input
                {...inputData}
                className='mt-2 placeholder:text-gray-color/60 focus:outline-none border border-gray-color/15 bg-gray-color/10 rounded-md p-3 w-full shadow-sm sm:hover:border-primary-color focus:border-primary-color transition-colors'
            />
            {/* Error Message */}
            <ErrorMessage name={inputData.name} component={'div'} className='text-red-500 mt-2' />
        </div>
    )
}

export default FormikInput;