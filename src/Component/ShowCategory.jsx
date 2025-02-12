import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowCategory = () => {
    const [cata, setCata] = useState([]);

    useEffect(() => {
        fetch('https://api-store-iota.vercel.app/store/category/')
            .then(res => res.json())
            .then(data => setCata(data));
    }, []);

    if (!cata.length) {
        return <div className="text-center py-4">Loading categories...</div>;
    }

    return (
        <div className="p-6">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Popular Category
            </h2>

            {/* Category List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cata.slice(0, 9).map(category => (  // Limit to 9 categories
                    <Link key={category.id} to={'/shop/category/' + category.name}>
                        <div

                            className="flex items-center space-x-4 border-b pb-4"
                        >
                            <div className="bg-yellow-600 p-3 rounded-full flex items-center justify-center w-12 h-12">
                                <span className="text-lg font-semibold text-white">{category.name[0]}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                                <p className="text-sm text-gray-500">{category.slug}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShowCategory;

