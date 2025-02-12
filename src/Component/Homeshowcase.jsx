import { Rating } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import { FaExternalLinkAlt, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const title = "Recently Added";


const Homeshowcase = () => {
    // const [data, setData] = useState(ProductData);
    // const fillterItm = (cata) => {
    //     if (cata !== "All") {

    //         const itm = ProductData.filter(pro => pro.cate === cata);
    //         setData(itm);
    //     }
    //     else {
    //         setData(ProductData);

    //     }

    // }

    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch('https://api-store-iota.vercel.app/store/products/top/')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



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
    }


    return (
        <div className="min-h-screen bim flex flex-col items-center pb-5 pt-10 mb-5" >
            <div className="w-11/12 bg-white p-3 shadow-md rounded-md flex flex-col md:flex-row justify-between px-10 items-center">
                <Typography variant="h3">{title}</Typography>
                <Link to={'/shop'}><p className="hover:underline">show more</p></Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 pt-10">
                {
                    product && product.map((e, i) => (
                        <div
                            key={i}
                            className="shadow-md md:w-72 w-64 rounded-md overflow-hidden flex flex-col justify-center cursor-pointer relative  h-[26rem] "
                        >

                            {/* Image Wrapper with Relative Positioning */}
                            <div className="relative h-fit overflow-hidden group">
                                {/* "New" Tag (Fixed in Position) */}
                                <span className="absolute top-2 left-2 bg-[linear-gradient(90deg,_rgba(32,0,36,1)_0%,_rgba(255,5,241,1)_0%,_rgba(89,0,255,1)_100%)] text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                                    New
                                </span>

                                {/* Hover Icons */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                    <button className="bg-yellow-600 p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300 text-2xl" onClick={() => frmSubmit(e.id)}>
                                        <FaShoppingCart />
                                    </button>
                                    <Link to={`/shop/${e.id}`}>
                                        <button className="bg-yellow-600 p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300 text-2xl">
                                            <FaExternalLinkAlt />
                                        </button>
                                    </Link>
                                </div>

                                {/* Product Image */}
                                <img
                                    src={e.image}
                                    alt=""
                                    className="hover:scale-110 duration-500 h-60 md:max-h-80 w-full bg-blue-gray-100/30"
                                />
                            </div>

                            {/* Product Details */}
                            <div div className="p-5" >
                                <div className="flex flex-col">
                                    <p className="text-xs">{e.category}</p>
                                    <p>{e.name}</p>
                                    <Rating value={4} readonly />
                                </div>

                                <div className="flex justify-between mt-3">
                                    <h1>{e.brand}</h1>
                                    <h1 className="font-bold">${e.price}</h1>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div >
        </div >
    )
}

export default Homeshowcase