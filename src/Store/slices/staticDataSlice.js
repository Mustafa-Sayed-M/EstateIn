import { createSlice } from "@reduxjs/toolkit";

const staticDataSlice = createSlice({
    name: "staticData",
    initialState: {
        customers: [
            {
                rating: '4.5',
                quote: '“Great experience! Highly recommend.”',
                content: 'EstateIn made buying my first home easy and stress-free. The agent was always available and provided excellent advice.',
                customerInfo: {
                    avatar: '/assets/home/customers/1.jpg',
                    name: 'John Doe',
                    location: 'New York, USA',
                }
            },
            {
                rating: '4.0',
                quote: '“Professional service and smooth process.”',
                content: 'Selling my property with EstateIn was a breeze. The team guided me through every step and got me a great deal.',
                customerInfo: {
                    avatar: '/assets/home/customers/2.jpg',
                    name: 'Jane Smith',
                    location: 'London, UK',
                }
            },
            {
                rating: '5.0',
                quote: '“Excellent support and communication!”',
                content: 'From start to finish, EstateIn was there to help. I would definitely use their services again.',
                customerInfo: {
                    avatar: '/assets/home/customers/3.jpg',
                    name: 'Alice Johnson',
                    location: 'Toronto, Canada',
                }
            },
            {
                rating: '4.8',
                quote: '“A trustworthy and efficient team.”',
                content: 'EstateIn helped me find the perfect rental property. The whole process was simple and straightforward.',
                customerInfo: {
                    avatar: '/assets/home/customers/4.jpg',
                    name: 'Michael Brown',
                    location: 'Sydney, Australia',
                }
            },
            {
                rating: '4.7',
                quote: '“Very satisfied with their service!”',
                content: 'I was able to sell my property quickly and at a good price thanks to the team at EstateIn.',
                customerInfo: {
                    avatar: '/assets/home/customers/5.jpg',
                    name: 'Linda Williams',
                    location: 'Paris, France',
                }
            },
            {
                rating: '4.3',
                quote: '“Knowledgeable and responsive agents.”',
                content: 'The agents at EstateIn know the market well and were always available to answer my questions.',
                customerInfo: {
                    avatar: '/assets/home/customers/6.jpg',
                    name: 'David Miller',
                    location: 'Berlin, Germany',
                }
            }
        ],
        faqs: [
            {
                quiz: 'How do I search for properties on EstateIn?',
                answer: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'
            },
            {
                quiz: 'What documents do I need to sell my property through EstateIn?',
                answer: 'Find out about the necessary documentation for listing your property with us.'
            },
            {
                quiz: 'How can I contact an EstateIn agent?',
                answer: 'Discover the different ways you can get in touch with our experienced agents.'
            },
            {
                quiz: 'How do I search for properties on EstateIn?',
                answer: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'
            },
            {
                quiz: 'What documents do I need to sell my property through EstateIn?',
                answer: 'Find out about the necessary documentation for listing your property with us.'
            },
            {
                quiz: 'How can I contact an EstateIn agent?',
                answer: 'Discover the different ways you can get in touch with our experienced agents.'
            },
        ],
        features: [
            {
                icon: '/assets/shared/features/1.png',
                name: 'Find Your Dream Home'
            },
            {
                icon: '/assets/shared/features/2.png',
                name: 'Unlock Property Value'
            },
            {
                icon: '/assets/shared/features/3.png',
                name: 'Effortless Property Management'
            },
            {
                icon: '/assets/shared/features/4.png',
                name: 'Smart Investments, Informed Decisions'
            },
        ],
        values: [
            {
                name: 'Trust',
                description: 'Trust is the cornerstone of every successful real estate transaction.',
                icon: '/assets/about/values/1.png'
            },
            {
                name: 'Excellence',
                description: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
                icon: '/assets/about/values/2.png'
            },
            {
                name: 'Client-Centric',
                description: 'Your dreams and needs are at the center of our universe. We listen, understand.',
                icon: '/assets/about/values/3.png'
            },
            {
                name: 'Our Commitment',
                description: 'We are dedicated to providing you with the highest level of service, professionalism, and support.',
                icon: '/assets/about/values/1.png'
            },
        ],
        achievements: [
            {
                name: '3+ Years of Excellence',
                description: `With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`
            },
            {
                name: 'Happy Clients',
                description: 'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.'
            },
            {
                name: 'Industry Recognition',
                description: `We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.`
            }
        ],
        experience: [
            {
                name: 'Discover a World of Possibilities',
                description: 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.'
            },
            {
                name: 'Narrowing Down Your Choices',
                description: `Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.`
            },
            {
                name: 'Personalized Guidance',
                description: `Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.`
            },
            {
                name: 'See It for Yourself',
                description: `Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.`
            },
            {
                name: 'Making Informed Decisions',
                description: 'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.'
            },
            {
                name: 'Getting the Best Deal',
                description: `We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.`
            },
        ],
        team: [
            {
                image: '/assets/about/team/1.png',
                name: 'Max Mitchell',
                position: 'Founder'
            },
            {
                image: '/assets/about/team/2.png',
                name: 'Sarah Johnson',
                position: 'Chief Real Estate Officer'
            },
            {
                image: '/assets/about/team/3.png',
                name: 'David Brown',
                position: 'Head of Property Management'
            },
            {
                image: '/assets/about/team/4.png',
                name: 'Michael Turner',
                position: 'Legal Counsel'
            },
        ],
        properties: [
            {
                icon: '/assets/services/properties/1.png',
                name: `Valuation Mastery`,
                description: `Discover the true worth of your property with our expert valuation services.`,
            },
            {
                icon: '/assets/services/properties/2.png',
                name: `Strategic Marketing`,
                description: `Selling a property requires more than just a listing; it demands a strategic marketing approach.`,
            },
            {
                icon: '/assets/services/properties/3.png',
                name: `Negotiation Wizardry`,
                description: `Negotiating the best deal is an art, and our negotiation experts are masters of it.`,
            },
            {
                icon: '/assets/services/properties/4.png',
                name: `Closing Success`,
                description: `A successful sale is not complete until the closing. We guide you through the intricate closing process.`,
            },
        ],
        effortless: [
            {
                icon: '/assets/services/effortless/1.png',
                name: `Tenant Harmony`,
                description: `Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.`,
            },
            {
                icon: '/assets/services/effortless/2.png',
                name: `Maintenance Ease`,
                description: `Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.`,
            },
            {
                icon: '/assets/services/effortless/3.png',
                name: `Financial Peace of Mind`,
                description: `Managing property finances can be complex. Our financial experts take care of rent collection`,
            },
            {
                icon: '/assets/services/effortless/4.png',
                name: `Legal Guardian`,
                description: `Stay compliant with property laws and regulations effortlessly.`,
            },
        ],
        smartInvestments: [
            {
                name: 'Market Insight',
                description: 'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
                icon: '/assets/services/smartInvestments/1.png'
            },
            {
                name: 'ROI Assessment',
                description: 'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
                icon: '/assets/services/smartInvestments/2.png'
            },
            {
                name: 'Customized Strategies',
                description: 'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
                icon: '/assets/services/smartInvestments/3.png'
            },
            {
                name: 'Diversification Mastery',
                description: 'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
                icon: '/assets/services/smartInvestments/1.png'
            },
        ],
    }
});

export default staticDataSlice.reducer;