import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaShoppingCart } from 'react-icons/fa';
import { Link, useParams, useNavigate } from 'react-router-dom';

const CategoryAllProduct = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://api-store-iota.vercel.app/store/products/?category=${slug}`)
            .then(res => res.json())
            .then(data => setProducts(data?.results || []))
            .catch(error => console.error('Error fetching products:', error));
    }, [slug]);

    useEffect(() => {
        fetch('https://api-store-iota.vercel.app/store/category/')
            .then(res => res.json())
            .then(data => setCategories(data || []))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const frmSubmit = (id) => {
        fetch('https://api-store-iota.vercel.app/store/cart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
                product_id: id,
                quantity: 1,
                color: 'black',
                size: 'm'
            })
        })
            .then(response => response.json())
            .then(data => console.log('Item added:', data))
            .catch(error => console.error('Error adding item to cart:', error));
    };

    return (
        <div className='grid grid-cols-4 gap-4 min-h-screen '>
            {/* Category List */}
            <div className='bg-gray-100 p-4 rounded-md shadow-md'>
                <h2 className='text-lg font-bold mb-3'>Categories</h2>
                <ul className='space-y-2'>
                    {categories.map(category => (
                        <li
                            key={category.id}
                            className={`cursor-pointer px-3 py-2 rounded-md hover:bg-gray-200 ${slug === category.name ? 'bg-gray-300' : ''}`}
                            onClick={() => navigate(`/shop/category/${category.name}`)}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Product Grid */}
            <div className='col-span-3 flex flex-wrap justify-start gap-6'>
                {products.length > 0 ? products.map(product => (
                    <div key={product.id} className='shadow-md w-72 rounded-md overflow-hidden flex flex-col max-h-96 cursor-pointer'>
                        <div className='h-64 overflow-hidden relative'>
                            <img src={product.image} alt={product.name} className='hover:scale-110 duration-500 absolute w-full h-full object-cover' loading='lazy' />
                            <div className='absolute flex justify-center items-center w-full h-full backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 gap-3'>
                                <span className='text-gray-900 bg-primary p-3 rounded-full text-2xl' onClick={() => frmSubmit(product.id)}>
                                    <FaShoppingCart />
                                </span>
                                <span className='text-gray-900 bg-primary p-3 rounded-full text-2xl'>
                                    <Link to={`/shop/${product.id}`}>
                                        <FaExternalLinkAlt />
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className='p-5'>
                            <h1 className='font-semibold'>{product.name}</h1>
                            <p className='text-gray-500'>{product.category}</p>
                            <h1 className='font-bold text-lg'>${product.price}</h1>
                        </div>
                    </div>
                )) : <p className='col-span-3 text-center text-gray-500'>No products available</p>}
            </div>
        </div>
    );
};

export default CategoryAllProduct;