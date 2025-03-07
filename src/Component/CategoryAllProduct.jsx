

import React, { useState, useEffect } from "react";
import { FaBars, FaExternalLinkAlt, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const CategoryAllProduct = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            .then(data => {
                toast.success('Product add to cart', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce

                });
            })
            .catch(error => console.error('Error adding item to cart:', error));
    };

    return (
        <div className="min-h-screen p-4">
            {/* Mobile Drawer Button */}
            <button className="md:hidden p-2 bg-gray-300 rounded-md mb-4" onClick={() => setIsDrawerOpen(true)}>
                <FaBars className="text-xl" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Sidebar (Hidden on Mobile, Drawer Toggle) */}
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:bg-transparent md:w-full`}>
                    <div className="w-64 h-full overflow-scroll bg-white p-4 shadow-md md:w-auto">
                        {/* Close Button for Mobile */}
                        <button className="md:hidden text-red-500 text-xl mb-4" onClick={() => setIsDrawerOpen(false)}>
                            <FaTimes />
                        </button>
                        <h2 className="text-lg font-bold mb-3">Categories</h2>
                        <ul className="space-y-2">
                            {categories.map(category => (
                                <li key={category.id} className={`cursor-pointer px-3 py-2 rounded-md hover:bg-gray-200 ${slug === category.name ? "bg-gray-300" : ""}`} onClick={() => { navigate(`/shop/category/${category.name}`); setIsDrawerOpen(false); }}>
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.length > 0 ? products.map(product => (
                        <div key={product.id} className="shadow-md w-full sm:w-72 rounded-md overflow-hidden flex flex-col cursor-pointer">
                            <div className="h-64 overflow-hidden relative">
                                <img src={product.image} alt={product.name} className="hover:scale-110 duration-500 absolute w-full h-full object-cover" loading="lazy" />
                                <div className="absolute flex justify-center items-center w-full h-full backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 gap-3">
                                    <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl" onClick={() => frmSubmit(product.id)}>
                                        <FaShoppingCart />
                                    </span>
                                    <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl">
                                        <Link to={`/shop/${product.id}`}>
                                            <FaExternalLinkAlt />
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h1 className="font-semibold">{product.name}</h1>
                                <p className="text-gray-500">{product.category}</p>
                                <h1 className="font-bold text-lg">${product.price}</h1>
                            </div>
                        </div>
                    )) : (
                        <p className="text-gray-500">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryAllProduct;
