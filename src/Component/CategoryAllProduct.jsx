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

    const datas = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));


    return (
        <div className='grid grid-cols-4 gap-4 min-h-screen '>
            {/* Category List */}
            <div className='bg-gray-100 p-4 rounded-md shadow-md'>
                {
                    categories.length > 0 ?

                        <>
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
                        </>
                        :
                        (<div className='flex flex-col flex-wrap gap-3'>

                            {datas?.map((_, index) => (
                                <div
                                    key={index}
                                    className="h-6 bg-gray-300 rounded-md animate-pulse"
                                ></div>
                            ))
                            }
                        </div>)


                }
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
                )) :
                    <div className='flex flex-wrap justify-around gap-2 py-3  min-h-screen'>

                        {
                            datas?.map((e, i) => {
                                return <div key={i} class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72 animate-pulse">
                                    <div
                                        class="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                            class="w-12 h-12 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="p-6">
                                        <div
                                            class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                                            &nbsp;
                                        </div>
                                        <div
                                            class="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                                            &nbsp;
                                        </div>
                                        <div
                                            class="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                                            &nbsp;
                                        </div>
                                        <div
                                            class="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                                            &nbsp;
                                        </div>
                                        <div
                                            class="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <button disabled="" tabindex="-1"
                                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                                            type="button">
                                            &nbsp;
                                        </button>
                                    </div>
                                </div>
                            })
                        }
                    </div>}
            </div>
        </div>
    );
};

export default CategoryAllProduct;