import React from 'react';
import { useSelector } from 'react-redux';
import SmartInvestmentCard from './SmartInvestmentCard';
import Component from '../Shared/Component';

function SmartInvestments() {
    const { smartInvestments } = useSelector(state => state.staticData);

    return (
        <section className='values py-10' id='values'>
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Text Area */}
                <div className='text-area flex flex-col'>
                    {/* Text Wrapper */}
                    <div className='text-wrapper mb-5 space-y-2'>
                        <h1 className='font-semibold text-5xl leading-tight'>Smart Investments, Informed Decisions</h1>
                        <p className='text-gray-color/60'>Building a real estate portfolio requires a strategic approach. EstateIn's Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
                    </div>
                    <Component
                        title={'Unlock Your Investment Potential'}
                        description={'Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.'}
                        className={'flex flex-col gap-3 justify-center flex-1'}
                    />
                </div>
                {/* Values Wrapper */}
                <div className='values-wrapper grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {smartInvestments.map((smartInvestment, index) => <SmartInvestmentCard key={index} smartInvestmentData={smartInvestment} />)}
                </div>
            </div>
        </section>
    )
}

export default SmartInvestments;