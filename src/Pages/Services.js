import React from 'react';
import Features from '../Components/Shared/Features/Features';
import Landing from '../Components/Services/Landing';
import UnlockProperty from '../Components/Services/UnlockProperty/UnlockProperty';
import Effortless from '../Components/Services/Effortless/Effortless';
import SmartInvestments from '../Components/Services/SmartInvestments/SmartInvestments';

function Services() {
    return (
        <div className='services-page'>
            {/* Landing */}
            <Landing />
            <div className='container'>
                {/* Features */}
                <Features />
                {/* Unlock Property */}
                <UnlockProperty />
                {/* Effortless */}
                <Effortless />
                {/* SmartInvestments */}
                <SmartInvestments />
            </div>
        </div>
    )
}

export default Services;