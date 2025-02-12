import React from 'react';


import { FaShippingFast, FaLock, FaHeadset, FaMoneyBillAlt, FaThumbsUp } from "react-icons/fa";

const features = [
    {
        icon: <FaShippingFast className="text-orange-500 text-4xl" />,
        title: "Free Shipping",
        description: "Free shipping over $100",
    },
    {
        icon: <FaLock className="text-orange-500 text-4xl" />,
        title: "Payment Secure",
        description: "Got 100% Payment Safe",
    },
    {
        icon: <FaHeadset className="text-orange-500 text-4xl" />,
        title: "Support 24/7",
        description: "Top quality 24/7 Support",
    },
    {
        icon: <FaMoneyBillAlt className="text-orange-500 text-4xl" />,
        title: "100% Money Back",
        description: "Customers Money Backs",
    },
    {
        icon: <FaThumbsUp className="text-orange-500 text-4xl" />,
        title: "Quality Products",
        description: "We Insure Product Quality",
    },
];

const Service = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
            {features.map((feature, index) => (
                <div key={index} className="border p-6 flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-lg font-semibold mt-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Service;
