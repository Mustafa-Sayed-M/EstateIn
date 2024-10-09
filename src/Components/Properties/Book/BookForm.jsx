import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikInput from '../../Shared/Formik/FormikInput';
import FormikSelect from '../../Shared/Formik/FormikSelect';

const inputsData = [
    {
        id: 'firstName',
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter First Name',
    },
    {
        id: 'lastName',
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter Last Name',
    },
    {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email',
        autoComplete: 'on',
        placeholder: 'Enter your Email',
    },
    {
        id: 'phone',
        name: 'phone',
        autoComplete: 'on',
        label: 'Phone',
        type: 'tel',
        placeholder: 'Enter Phone Number',
    }
];

const selectData = [
    {
        id: 'selectLocation',
        name: 'selectLocation',
        label: 'Preferred Location',
        options: [
            { value: '', text: 'Select Location' },
            { value: '1', text: 'Location 1' },
            { value: '2', text: 'Location 2' },
            { value: '3', text: 'Location 3' },
            { value: '4', text: 'Location 4' },
        ]
    },
    {
        id: 'propertyType',
        name: 'propertyType',
        label: 'Property Type',
        options: [
            { value: '', text: 'Select Property Type' },
            { value: '1', text: 'Type 1' },
            { value: '2', text: 'Type 2' },
            { value: '3', text: 'Type 3' },
            { value: '4', text: 'Type 4' },
        ]
    },
    {
        id: 'bathrooms',
        name: 'bathrooms',
        label: 'No. of Bathrooms',
        options: [
            { value: '', text: 'Select no. of Bedrooms' },
            { value: '1', text: 'Bathroom 1' },
            { value: '2', text: 'Bathroom 2' },
            { value: '3', text: 'Bathroom 3' },
            { value: '4', text: 'Bathroom 4' },
        ]
    },
    {
        id: 'bedrooms',
        name: 'bedrooms',
        label: 'No. of Bedrooms',
        options: [
            { value: '', text: 'Select no. of Bedrooms' },
            { value: '1', text: 'Bedroom 1' },
            { value: '2', text: 'Bedroom 2' },
            { value: '3', text: 'Bedroom 3' },
            { value: '4', text: 'Bedroom 4' },
        ]
    },
];

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    selectLocation: '',
    propertyType: '',
    bathrooms: '',
    bedrooms: '',
    budget: '',
    message: '',
};

const validateYupSchema = {
    firstName: Yup.string().required(),
    email: Yup.string().required().email(),
    phone: Yup.number().required(),
    selectLocation: Yup.string().required(),
    propertyType: Yup.string().required(),
    bathrooms: Yup.number().required(),
    bedrooms: Yup.number().required(),
    budget: Yup.string().required(),
    message: Yup.string().required().min(15).max(100),
};

const RadioChecked = ({ checked }) => {
    return (
        <div
            className='input-box w-4 h-4 leading-4 text-center border border-purple-color rounded-full p-1'
        >
            {/* Input */}
            <input
                defaultChecked={checked}
                name='preferred-contact'
                type='radio'
                className='hidden peer'
            />
            {/* Point Checked */}
            <div className='point-checked w-full h-full rounded-full bg-purple-color scale-0 peer-checked:scale-100 transition'></div>
        </div>
    )
};

function BookForm() {
    return (
        <div className='book-form p-5 md:p-10 rounded-xl border border-gray-color/15'>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validateYupSchema)}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Fields Wrapper */}
                        <div className='fields-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-7'>
                            {/* Inputs */}
                            {inputsData.map((input, index) => <FormikInput key={index}
                                {...{
                                    ...input,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                }}
                            />)}
                            {/* Selects */}
                            {selectData.map((select, index) => <FormikSelect key={index}
                                {...{
                                    ...select,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                }}
                            />)}
                            {/* Budget Select */}
                            <div className='budget-select sm:col-span-2 flex flex-col'>
                                {/* Label */}
                                <label htmlFor='budget'>Budget</label>
                                {/* Input */}
                                <select
                                    id='budget'
                                    name='budget'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className='mt-2 placeholder:text-gray-color/60 focus:outline-none flex-1 border border-gray-color/15 bg-gray-color/10 rounded-md p-2 w-full shadow-sm sm:hover:border-primary-color focus:border-primary-color transition-colors text-gray-color/60 cursor-pointer'
                                >
                                    <option value={''}>Select Budget</option>
                                    <option value={'10, 0000'}>$10, 0000</option>
                                    <option value={'100, 0000'}>$100, 0000</option>
                                    <option value={'1000, 0000'}>$1000, 0000</option>
                                    <option value={'10000, 0000'}>$10000, 0000</option>
                                </select>
                                {/* Error Message */}
                                <ErrorMessage name='budget' component={'div'} className='text-red-500 mt-2' />
                            </div>
                            {/* Preferred Contact Method */}
                            <div className='sm:col-span-2 flex flex-col'>
                                <h4 className='font-medium mb-2'>Preferred Contact Method</h4>
                                <div className='inputs-checkbox flex max-sm:flex-col gap-3 flex-1'>
                                    {/* Phone */}
                                    <label className='phone flex items-center justify-between gap-2 cursor-pointer w-full bg-gray-color/10 border border-gray-color/15 rounded-md p-3'>
                                        {/* text */}
                                        <p className='select-none'>
                                            <i className="fa-solid fa-phone fa-fw me-2"></i>
                                            <span>Phone Number</span>
                                        </p>
                                        {/* Radio Checked */}
                                        <RadioChecked checked={true} />
                                    </label>
                                    {/* Email */}
                                    <label className='email flex items-center justify-between gap-2 cursor-pointer w-full bg-gray-color/10 border border-gray-color/15 rounded-md p-3'>
                                        {/* text */}
                                        <p className='select-none'>
                                            <i className="fa-solid fa-envelope fa-fw me-2"></i>
                                            <span>Email Address</span>
                                        </p>
                                        {/* Radio Checked */}
                                        <RadioChecked checked={false} />
                                    </label>
                                </div>
                            </div>
                            {/* Message */}
                            <div className='message sm:col-span-4'>
                                {/* Label */}
                                <label htmlFor='message'>Budget</label>
                                {/* Text Area */}
                                <textarea
                                    style={{
                                        resize: 'none'
                                    }}
                                    id='message'
                                    name='message'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='Enter your Message here..'
                                    className='mt-2 placeholder:text-gray-color/60 focus:outline-none border border-gray-color/15 bg-gray-color/10 rounded-md p-3 w-full shadow-sm sm:hover:border-primary-color focus:border-primary-color transition-colors h-[120px]'
                                ></textarea>
                                {/* Error Message */}
                                <ErrorMessage name='budget' component={'div'} className='text-red-500 mt-2' />
                            </div>
                        </div>
                        {/* Submit */}
                        <div className='flex max-sm:flex-col items-center justify-between gap-y-3'>
                            {/* Submit Check */}
                            <div className='submit-check'>
                                {/* Input Field */}
                                <div className='input-field flex items-center gap-2'>
                                    <label className='cursor-pointer w-7 h-7 leading-7 text-center border border-gray-color/15 rounded-md'>
                                        <input
                                            type='checkbox'
                                            name='termsAgree'
                                            id='termsAgree'
                                            className='hidden peer'
                                        />
                                        <i className="fa-solid fa-check transition scale-0 rotate-90 text-purple-color peer-checked:scale-100 peer-checked:rotate-0"></i>
                                    </label>
                                    <label htmlFor='termsAgree' className='text-gray-color/60 cursor-pointer select-none'>I agree with Terms of Use and Privacy Policy</label>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className='bg-purple-color py-2 px-4 rounded-md max-sm:w-full sm:hover:bg-purple-color/20 sm:hover:text-purple-color transition-colors'
                            >
                                Send Your Message
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default BookForm;