import React from 'react';
import SectionHeader from '../../Shared/SectionHeader';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import FormikInput from '../../Shared/Formik/FormikInput';
import FormikSelect from '../../Shared/Formik/FormikSelect';

const fieldsData = [
    {
        type: 'text',
        id: 'firstName',
        name: 'firstName',
        placeholder: 'Enter First Name',
        label: 'First Name'
    },
    {
        type: 'text',
        id: 'lastName',
        name: 'lastName',
        placeholder: 'Enter Last Name',
        label: 'Last Name'
    },
    {
        type: 'email',
        id: 'email',
        autoComplete: 'on',
        name: 'email',
        placeholder: 'Enter your Email',
        label: 'Email'
    },
    {
        type: 'tel',
        id: 'phone',
        name: 'phone',
        autoComplete: 'on',
        placeholder: 'Enter Phone Number',
        label: 'Phone'
    }
];

const selectsData = [
    {
        id: 'inquiryType',
        name: 'inquiryType',
        label: "Inquiry Type",
        options: [
            { value: '', text: 'Select Inquiry Type' },
            { value: '1', text: 'Option 1' },
            { value: '2', text: 'Option 2' },
            { value: '3', text: 'Option 3' },
            { value: '4', text: 'Option 4' },
        ]
    },
    {
        id: 'howDidYouHearAboutUs',
        name: 'howDidYouHearAboutUs',
        label: "How Did You Hear About Us?",
        options: [
            { value: '', text: 'Select' },
            { value: '1', text: 'Option 1' },
            { value: '2', text: 'Option 2' },
            { value: '3', text: 'Option 3' },
            { value: '4', text: 'Option 4' },
        ]
    },
];

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    howDidYouHearAboutUs: '',
    message: '',
};

const validationSchema = {
    firstName: Yup.string().required(),
    lastName: Yup.string(),
    email: Yup.string().email().required(),
    phone: Yup.number(),
    inquiryType: Yup.string().required(),
    howDidYouHearAboutUs: Yup.string().required(),
    message: Yup.string().required().min(16).max(100),
};

function FormContact() {
    return (
        <section className='form-contact py-10 space-y-7' id='contact'>
            {/* Section Header */}
            <SectionHeader
                title={`Let's Connect`}
                description={`We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.`}
            />
            {/* Form Contact Content */}
            <div className='form-contact p-10 border border-gray-color/15 rounded-xl'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object(validationSchema)}
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
                            <div className='fields-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
                                {/* Fields */}
                                {fieldsData.map((filed, index) => <FormikInput key={index}
                                    {...{
                                        ...filed,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                    }}
                                />)}
                                {/* Selects */}
                                {selectsData.map((select, index) => <FormikSelect key={index}
                                    {...{
                                        ...select,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                    }}
                                />)}
                                {/* Message */}
                                <div className='message sm:col-span-2 lg:col-span-3'>
                                    {/* Label */}
                                    <label htmlFor='message'>Message</label>
                                    {/* Text Area */}
                                    <textarea
                                        id='message'
                                        name='message'
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder='Enter Your Message'
                                        style={{
                                            resize: 'none'
                                        }}
                                        className='mt-2 h-[180px] placeholder:text-gray-color/60 focus:outline-none border border-gray-color/15 bg-gray-color/10 rounded-md p-2 w-full shadow-sm sm:hover:border-primary-color focus:border-primary-color transition-colors'
                                    ></textarea>
                                    {/* Error Message */}
                                    <ErrorMessage name='message' component={'div'} className='text-red-500' />
                                </div>
                            </div>
                            {/* Submit */}
                            <div className='submit flex max-md:flex-col items-center justify-between gap-y-3'>
                                {/*  Terms */}
                                <div className='terms-agree'>
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
                                    className='bg-purple-color py-2 px-4 max-md:w-full rounded-md sm:hover:bg-purple-color/20 sm:hover:text-purple-color transition-colors'
                                    disabled={isSubmitting}
                                >
                                    Send Your Message
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default FormContact;