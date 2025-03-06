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

    const datas = Array.from({ length: 8 }, (_, i) => ({ id: i + 1 }));

    return (
        <div className="min-h-screen bim flex flex-col items-center pb-5 pt-10 mb-5 " >
            <div className="w-full bg-white p-3 shadow-md rounded-md flex flex-col md:flex-row justify-between px-10 items-center">
                <Typography variant="h3">{title}</Typography>
                <Link to={'/shop'}><p className="hover:underline">show more</p></Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 pt-10">
                {
                    product ? product.map((e, i) => (
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
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
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
                        </div>
                }
            </div >
        </div >
    )
}

export default Homeshowcase