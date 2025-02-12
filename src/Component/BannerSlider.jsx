

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiSearch } from "react-icons/ci";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import Summer from "../../public/b-combo.jpg";
import Winter from "../../public/b-winter.jpg";
import Show from "../../public/b-shoe.jpg";

const banners = [
    { id: 1, title: "Summer Collection", description: "Latest summer styles with great discounts!", image: Summer },
    { id: 2, title: "Winter Essentials", description: "Stay warm with cozy winter wear.", image: Winter },
    { id: 3, title: "Exclusive Sale", description: "Limited-time offers on top products!", image: Show },
];

const BannerSlider = () => {
    const [sValue, setValue] = useState("");
    const [product, setProduct] = useState(null);
    const [allProduct, setAllProduct] = useState(null);
    const [open, setOpen] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    useEffect(() => {
        fetch('https://api-store-iota.vercel.app/store/products/?all=True')
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setAllProduct(data);
            });
    }, []);

    const serchFill = (e) => {
        const search = e.target.value;
        setValue(search);
        const filter = allProduct?.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setProduct(filter);
    };

    const handleOpen = () => setOpen(!open);

    return (
        <div className="relative">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className="w-full h-screen relative overflow-hidden">
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-full object-cover transform scale-105 transition-transform duration-700 ease-in-out hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col justify-center items-center text-center p-6">
                            <h2 className="text-5xl md:text-7xl text-white font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">{banner.title}</h2>
                            <p className="text-lg md:text-2xl text-gray-200 mb-6 opacity-80 transition-opacity duration-500">{banner.description}</p>
                            <Button
                                color="white"
                                onClick={handleOpen}
                                className="flex items-center gap-2 px-6 py-3 text-black font-medium rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                            >
                                <CiSearch className="text-2xl" /> Search Products
                            </Button>
                        </div>
                    </div>
                ))}
            </Slider>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="flex justify-center items-center w-full">
                    <form action="" className="bg-transparent w-full px-5 py-2 rounded-full flex gap-2 justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" >

                        <input type="text" name="search" id="search" placeholder="Search" className="w-full py-1 bg-transparent outline-none  text-xl" value={sValue} onChange={(e) => serchFill(e)} />
                        <CiSearch className="text-2xl  " />
                    </form>
                </DialogHeader>
                <DialogBody className="h-[26rem] overflow-y-scroll flex flex-wrap justify-center gap-2">
                    {
                        product && product.map((e, i) => (
                            <Link key={i} to={`shop/${e.id}`}>
                                <li className="h-12 border flex items-center p-1 cursor-pointer hover:bg-primary hover:text-white rounded-md duration-150" >{e.name}</li>
                            </Link>
                        )
                        )
                    }
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default BannerSlider;
