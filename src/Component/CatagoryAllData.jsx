

import { useEffect, useState, useRef } from 'react';
import { FaChevronRight, FaChevronLeft, FaShoppingCart, FaExternalLinkAlt } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                className: "center",
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                className: "center",
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                className: "center",
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};

const CatagoryAllData = ({ cta, id }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading
    const arrowRef = useRef(null);

    useEffect(() => {
        setLoading(true); // Set loading to true when the fetch starts
        fetch(`https://api-store-iota.vercel.app/store/product/category/?category=${cta}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch(err => {
                console.error(err);
                setLoading(false); // Set loading to false in case of an error
            });
    }, [cta, id]);

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
                console.log('Item added:', data);
            })
            .catch(error => console.error('Error adding item to cart:', error));
    };

    return (
        <section className='min-h-screen flex flex-col justify-center items-center px-2 project'>
            <div className='w-full relative'>
                <div className='w-full absolute top-[40%] flex justify-between'>
                    <button
                        className='text-xl md:text-2xl z-20 bg-gray-800/50 hover:text-dkText text-white rounded-full p-2'
                        onClick={() => arrowRef.current.slickPrev()}>
                        <FaChevronLeft />
                    </button>
                    <button
                        className='text-xl md:text-2xl z-20 bg-gray-800/50 hover:text-dkText text-white rounded-full p-2'
                        onClick={() => arrowRef.current.slickNext()}>
                        <FaChevronRight />
                    </button>
                </div>
                <Slider ref={arrowRef} {...settings}>
                    {loading ? (
                        // Skeleton loader while data is loading
                        [...Array(5)].map((_, index) => (
                            <div key={index} className='md:w-96 md:p-2'>
                                <div className="relative w-full md:mx-0 px-2.5 py-2.5 flex flex-col gap-2.5 border rounded-xl hover:shadow-sm group min-h-96">
                                    {/* Skeleton loader for image */}
                                    <div className="h-48 bg-gray-300 animate-pulse rounded-md"></div>
                                    <div className="absolute top-0 left-0 w-full h-full p-10 flex justify-center items-end gap-2.5 backdrop-blur-sm text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl cursor-pointer">
                                            <FaShoppingCart />
                                        </span>
                                        <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl">
                                            <FaExternalLinkAlt />
                                        </span>
                                    </div>
                                    {/* Skeleton loader for text */}
                                    <div className="space-y-2 mt-4">
                                        <div className="h-4 bg-gray-300 animate-pulse w-1/2"></div>
                                        <div className="h-4 bg-gray-300 animate-pulse w-3/4"></div>
                                    </div>
                                    {/* Skeleton loader for footer */}
                                    <div className="flex justify-between mt-4">
                                        <div className="h-4 bg-gray-300 animate-pulse w-1/3"></div>
                                        <div className="h-4 bg-gray-300 animate-pulse w-1/3"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Display actual product data once it is loaded
                        data?.map((e) => (
                            <div key={e.id} className='md:w-96 md:p-2 '>
                                <div className="relative w-full md:mx-0 px-2.5 py-2.5 flex flex-col gap-2.5 border rounded-xl hover:shadow-sm group min-h-96">
                                    <img src={e.image} alt="Image not found" className="rounded-md" />
                                    <div className="absolute top-0 left-0 w-full h-full p-10 flex justify-center items-end gap-2.5 backdrop-blur-sm text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span
                                            className="text-gray-900 bg-primary p-3 rounded-full text-2xl cursor-pointer"
                                            onClick={() => frmSubmit(e.id)}>
                                            <FaShoppingCart />
                                        </span>
                                        <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl">
                                            <Link to={`/shop/${e.id}`}>
                                                <FaExternalLinkAlt />
                                            </Link>
                                        </span>
                                    </div>
                                    <div>
                                        <div className="flex justify-between">
                                            <p className="">{e.category}</p>
                                            <Rating value={4} readonly />
                                        </div>
                                        <h1>{e.name}</h1>
                                        <div className="flex justify-between">
                                            <h1>{e.seller}</h1>
                                            <h1>{e.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </Slider>
            </div>
        </section>
    );
};

export default CatagoryAllData;
