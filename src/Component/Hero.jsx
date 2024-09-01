import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import products from "../products.json";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Hero = () => {
    const [sValue, setValue] = useState("");
    const [product, setProduct] = useState(null);
    const [allproduct, setAllProduct] = useState(null);


    useEffect(() => {
        fetch('https://api-clothify.onrender.com/store/products/?all=True')
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setAllProduct(data);
            });
    }, []);

    const serchFill = (e) => {
        const search = e.target.value;
        setValue(search);
        const fillter = allproduct.filter((pro) => pro.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        console.log(fillter);
        setProduct(fillter);

    }

    //dilog
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <div className="bgimg flex flex-col min-h-screen  justify-center">
            <div className="flex justify-center items-center flex-col w-full gap-4 px-2">
                <h1 className="text-black text-2xl text-center md:text-4xl">Search Your One From <span className="text-primary">Thousand</span> Of Products</h1>
                <form action="" className="bg-transparent md:w-1/2 w-full px-5 py-3 rounded-full flex gap-2 justify-between items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-text" onClick={handleOpen}>

                    <h1>Search</h1>

                    <CiSearch className="text-2xl  " />
                </form>
            </div>


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
            {/* <Homecatagory /> */}

        </div>
    )
}

export default Hero