import { useState } from 'react';

type Tab = 'monthly' | 'yearly';

const monthlyPlans = [
    {
        title: 'Basic Plan',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        price: '$54',
        status: "unactive",
        duration: '/month',
        features: [
            'Free access to video class',
            'Free access to video class',
            'Free access to video class',
        ],
    },
    {
        title: 'Basic Plan',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        price: '$54',
        status: "active",
        duration: '/month',
        features: [
            'Free access to video class',
            'Free access to video class',
            'Free access to video class',
        ],
    },
    {
        title: 'Basic Plan',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        price: '$54',
        status: "unactive",
        duration: '/month',
        features: [
            'Free access to video class',
            'Free access to video class',
            'Free access to video class',
        ],
    },
];

const yearyPlans = [
    {
        title: 'Basic Plan',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        price: '$540',
        status: "unactive",
        duration: '/yearly',
        features: [
            'Free access to video class',
            'Free access to video class',
            'Free access to video class',
        ],
    },
    {
        title: 'Basic Plan',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        price: '$540',
        status: "active",
        duration: '/yearly',
        features: [
            'Free access to video class',
            'Free access to video class',
            'Free access to video class',
        ],
    },
    {
        title: 'Basic Plan',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        price: '$540',
        status: "unactive",
        duration: '/yearly',
        features: [
            'Free access to video class',
            'Free access to video class',
            'Free access to video class',
        ],
    },
];

export default function Plan() {

    const [activeTab, setActiveTab] = useState<Tab>('monthly');

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab);
    };

    return (
        <div id="pricing" className='bg-pricing-bg bg-cover bg-center bg-no-repeat'>
            <div className='px-12 md:px-36 lg:px-52 py-4'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold font-inter'>Choose your plan</h1>
                    <p className='text-[14px] text-center py-6 font-poppins max-w-[450px] mx-auto break-words'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>

                <div className='flex justify-center space-x-3'>
                    <button onClick={() => handleTabClick('monthly')} className={`font-poppins text-[14px] px-2 py-1 ${activeTab === 'monthly' && 'bg-[#E1A6FF66] rounded-lg'}`}>
                        monthly
                    </button>
                    <button onClick={() => handleTabClick('yearly')} className={`font-poppins text-[14px] px-2 py-1 ${activeTab === 'yearly' && 'bg-[#E1A6FF66] rounded-lg'}`}>
                        yearly
                    </button>
                </div>
                {activeTab === 'monthly' &&
                    <div className="grid place-items-center grid-cols-1 py-6 md:py-12 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {monthlyPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`border-[0.5px] px-6 py-12 border-[#7A3199] rounded-lg max-w-[18rem] ${plan.status === "active" ? 'bg-[#7A3199]' : 'bg-white'}`}
                            >
                                <h1 className={`font-inter text-[1rem] font-bold ${plan.status === "active" ? 'text-white' : ''} `}>{plan.title}</h1>
                                <p className={`font-poppins text-[12px] py-2 ${plan.status === "active" ? 'text-white' : ''} `}>{plan.description}</p>
                                <div className={`flex flex-row space-x-5 items-center py-4 ${plan.status === "active" ? 'text-white' : 'text-[#7A3199]'}`}>
                                    <h1 className="font-inter text-[2rem] font-bold">{plan.price}</h1>
                                    <h1 className="font-poppins text-[12px]">{plan.duration}</h1>
                                </div>
                                <ul className={`list-disc pl-4 font-inter text-[0.75rem] ${plan.status === "active" ? 'text-white' : 'font-bold'} `}>
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <button className="border-[0.5px] px-4 py-2 mt-4 rounded-md font-poppins text-[0.75rem] bg-white text-[#7A3199] border-[#7A3199]">
                                    Start Free Trial
                                </button>
                            </div>
                        ))}
                    </div>
                }
                {activeTab === 'yearly' && <div className="grid place-items-center grid-cols-1 py-6 md:py-12 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {yearyPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`border-[0.5px] px-6 py-12 border-[#7A3199] rounded-lg max-w-[18rem] ${plan.status === "active" ? 'bg-[#7A3199]' : 'bg-white'}`}
                        >
                            <h1 className={`font-inter text-[1rem] font-bold ${plan.status === "active" ? 'text-white' : ''} `}>{plan.title}</h1>
                            <p className={`font-poppins text-[12px] py-2 ${plan.status === "active" ? 'text-white' : ''} `}>{plan.description}</p>
                            <div className={`flex flex-row space-x-5 items-center py-4 ${plan.status === "active" ? 'text-white' : 'text-[#7A3199]'}`}>
                                <h1 className="font-inter text-[2rem] font-bold">{plan.price}</h1>
                                <h1 className="font-poppins text-[12px]">{plan.duration}</h1>
                            </div>
                            <ul className={`list-disc pl-4 font-inter text-[0.75rem] ${plan.status === "active" ? 'text-white' : 'font-bold'} `}>
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button className="border-[0.5px] px-4 py-2 mt-4 rounded-md font-poppins text-[0.75rem] bg-white text-[#7A3199] border-[#7A3199]">
                                Start Free Trial
                            </button>
                        </div>
                    ))}
                </div>
                }

            </div>
        </div>
    )
}
