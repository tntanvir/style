// import { useCallback, useEffect, useState } from "react";






// export const Clintreviews = () => {
//     const [currentSlider, setCurrentSlider] = useState(0);

//     const prevSlider = () => {
//         setCurrentSlider((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
//     };

//     const nextSlider = useCallback(() => {
//         setCurrentSlider((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
//     }, []);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             nextSlider();
//         }, 5000); // Change slide every 5 seconds
//         return () => clearInterval(intervalId);
//     }, [nextSlider]);

//     const [reviews, setReviews] = useState(null)
//     useEffect(() => {
//         fetch('https://api-store-iota.vercel.app/store/products/reviews/')
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [])

//     return (
//         <div className="h-80 w-full relative overflow-hidden">
//             {/* Arrow left */}
//             <button
//                 onClick={prevSlider}
//                 className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-8 h-8"
//             >
//                 <svg
//                     className="icon h-6 w-6 fill-black/50"
//                     viewBox="0 0 1024 1024"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
//                 </svg>
//             </button>

//             {/* Arrow right */}
//             <button
//                 onClick={nextSlider}
//                 className="absolute top-1/2 right-3 z-50 flex justify-center items-center bg-white rounded-full w-8 h-8"
//             >
//                 <svg
//                     className="icon h-6 w-6 fill-black/50"
//                     viewBox="0 0 1024 1024"
//                     xmlns="http://www.w3.org/2000/svg"
//                     transform="rotate(180)"
//                 >
//                     <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
//                 </svg>
//             </button>

//             {/* Dots */}
//             <div className="flex justify-center items-center absolute bottom-4 w-full gap-1 z-50">
//                 {reviews.map((_, idx) => (
//                     <button
//                         key={idx}
//                         onClick={() => setCurrentSlider(idx)}
//                         className={`rounded-full w-2 h-2 bg-white ${currentSlider === idx ? "w-4 bg-gray-800" : "w-2"
//                             }`}
//                     ></button>
//                 ))}
//             </div>

//             {/* Review content */}
//             <div
//                 className="ease-linear duration-500 flex transform-gpu"
//                 style={{ transform: `translateX(-${currentSlider * 100}%)` }}
//             >
//                 {reviews.map((review, idx) => (
//                     <div
//                         key={idx}
//                         className="min-w-full h-80 flex flex-col items-center justify-center text-center bg-gray-100 p-6"
//                     >
//                         <img
//                             src={review.image}
//                             alt={review.name}
//                             className="rounded-full w-24 h-24 object-cover mb-4"
//                         />
//                         <h3 className="text-lg font-semibold">{review.name}</h3>
//                         <p className="text-sm text-gray-600">{review.review}</p>
//                         <div className="flex items-center justify-center mt-2">
//                             {"★".repeat(review.rating)}
//                             {"☆".repeat(5 - review.rating)}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


import { useCallback, useEffect, useState } from "react";


export const Clintreviews = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [reviews, setReviews] = useState([]);

    const prevSlider = () => {
        setCurrentSlider((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const nextSlider = useCallback(() => {
        setCurrentSlider((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, [reviews.length]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    useEffect(() => {
        fetch("https://api-store-iota.vercel.app/store/products/reviews/")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.error("Error fetching reviews:", err));
    }, []);

    return (
        <div className="min-h-80 w-full relative overflow-hidden ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                User Reviews
            </h2>
            {/* Arrow left */}
            <button
                onClick={prevSlider}
                className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-8 h-8"
            >
                <svg
                    className="icon h-6 w-6 fill-black/50"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                </svg>
            </button>

            {/* Arrow right */}
            <button
                onClick={nextSlider}
                className="absolute top-1/2 right-3 z-50 flex justify-center items-center bg-white rounded-full w-8 h-8"
            >
                <svg
                    className="icon h-6 w-6 fill-black/50"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(180)"
                >
                    <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center items-center absolute bottom-4 w-full gap-1 z-50 ">
                {reviews.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlider(idx)}
                        className={`rounded-full w-2 h-2 bg-white ${currentSlider === idx ? "w-4 bg-gray-800" : "w-2"}`}
                    ></button>
                ))}
            </div>

            {/* Review content */}
            <div
                className="ease-linear duration-500 flex transform-gpu"
                style={{ transform: `translateX(-${currentSlider * 100}%)` }}
            >
                {reviews.map((review, idx) => (
                    <div
                        key={idx}
                        className="min-w-full h-80 flex flex-col items-center justify-center text-center bg-gray-200/50 p-6"
                    >
                        <img
                            src={review.usermore?.image || "https://via.placeholder.com/100"}
                            alt={review.usermore?.name || "User"}
                            className="rounded-full w-24 h-24 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold">{review.usermore?.name || "Anonymous"}</h3>
                        <p className="text-sm text-gray-600">{review.review_text}</p>
                        <div className="flex items-center justify-center mt-2">
                            {review.rating}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
