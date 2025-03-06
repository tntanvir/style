


import { useEffect, useState, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../index.css";

const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
};

const SlideReviews = () => {
    const [reviews, setReviews] = useState(null); // Changed to null initially
    const arrowRef = useRef(null);
    const datas = Array.from({ length: 8 }, (_, i) => ({ id: i + 1 }));

    useEffect(() => {
        fetch("https://api-store-iota.vercel.app/store/products/reviews/")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => {
                console.error("Error fetching reviews:", err);
                setReviews([]); // Set empty array in case of error
            });
    }, []);

    return (
        <section className="flex flex-col justify-center items-center px-4">
            <div className="mb-10 text-center">
                <h1 className="text-3xl">Testimonials</h1>
                <p className="text-sm text-gray-500">What our users say about us</p>
            </div>
            <div className="w-full relative">
                <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-between px-4 z-40">
                    <button
                        className="text-xl md:text-3xl bg-gray-800/50 hover:text-gray-300 text-white rounded-full p-2"
                        onClick={() => arrowRef.current?.slickPrev()}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="text-xl md:text-3xl bg-gray-800/50 hover:text-gray-300 text-white rounded-full p-2"
                        onClick={() => arrowRef.current?.slickNext()}
                    >
                        <FaChevronRight />
                    </button>
                </div>

                <Slider ref={arrowRef} {...settings}>
                    {reviews === null ? (
                        datas.map((e, i) => (
                            <div key={i} className="p-1 animate-pulse">
                                <div className="bg-gray-300 shadow-sm rounded-lg p-6 flex flex-col items-center text-center max-w-md mx-auto">
                                    <div className="w-28 h-28 rounded-full bg-gray-400 mb-4"></div>
                                    <div className="w-32 h-4 bg-gray-400 mb-2"></div>
                                    <div className="w-24 h-3 bg-gray-400 mb-2"></div>
                                    <div className="w-full h-3 bg-gray-400 mb-2"></div>
                                    <div className="w-full h-3 bg-gray-400 mb-2"></div>
                                    <div className="w-full h-3 bg-gray-400 mb-2"></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        reviews.map((review) => (
                            <div key={review.id} className="p-1 ">
                                <Link to={'shop/' + review.product}>
                                    <div className="bg-gray-100/80 shadow-sm  rounded-lg p-6 flex flex-col items-center text-center max-w-md mx-auto gridbg">
                                        <img
                                            src={review.usermore.image}
                                            alt={review.usermore.name}
                                            className="w-24 h-24 rounded-full mb-4 border-4 border-gray-300"
                                        />
                                        <h3 className="text-xl font-semibold">{review.usermore.name}</h3>
                                        <p className="text-md text-gray-600">{review.usermore.location}</p>
                                        <div className="text-yellow-500 text-xl mt-3">{review.rating}</div>
                                        <p className="text-gray-700 mt-3 text-lg">{review.review_text}</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </Slider>
            </div>
        </section>
    );
};

export default SlideReviews;

