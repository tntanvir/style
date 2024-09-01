import { Rating } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const title = "Our Products";


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
        fetch('https://api-clothify.onrender.com/store/products/top/')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="min-h-screen bim flex flex-col items-center pb-5 pt-10 mb-5" >
            <div className="w-11/12 bg-white p-3 shadow-lg rounded-md flex flex-col md:flex-row justify-between px-10 items-center">
                <Typography variant="h3">{title}</Typography>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 pt-10">
                {
                    product && product.map((e, i) => (
                        <div key={i} className="shadow-md   md:w-72 w-64 rounded-md overflow-hidden flex flex-col justify-center cursor-pointer">
                            <Link to={`/shop/${e.id}`}>
                                <div className="h-fit overflow-hidden ">

                                    <img src={e.image} alt="" className="hover:scale-110 duration-500 h-60 md:h-full w-full" />
                                </div>
                                <div className="p-5 ">

                                    <div className="flex justify-between">


                                        <Rating value={e.ratings} readonly />
                                    </div>
                                    <div>

                                    </div>
                                    <div className="flex justify-between">
                                        <h1>{e.brand}</h1>
                                        <h1 className="font-bold"> ${e.price}</h1>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Homeshowcase