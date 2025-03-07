

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Select, Option, Input, Button } from "@material-tailwind/react";
import { TiPlus, TiMinus } from "react-icons/ti";
import CatagoryAllData from "./CatagoryAllData";
import Itemreviwe from "./Itemreviwe"; // User review input section
import ShowCategory from "./ShowCategory";
import Homeshowcase from "./Homeshowcase";
import Brand from "./Brand";
import { Bounce, toast } from "react-toastify";

const ItemDtl = () => {
    const { id } = useParams();
    const [itemDtails, setItemDtails] = useState(null);
    const [cta, setCata] = useState("");
    const [selSize, setSize] = useState("");
    const [selCol, setCol] = useState("");
    const [cont, setCont] = useState(1);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api-store-iota.vercel.app/store/products/${id}/`)
            .then((res) => res.json())
            .then((data) => {
                setItemDtails(data);
                setSize(data.size[0]);
                setCol(data.color[0]);
                setCata(data.category);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching item details:", error);
                setLoading(false);
            });
    }, [id]);

    const frmSubmit = () => {
        fetch("https://api-store-iota.vercel.app/store/cart/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${sessionStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                product_id: id,
                quantity: cont,
                color: selCol,
                size: selSize,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("item add to cart", {
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
            .catch((error) => console.error("Error adding item to cart:", error));
    };

    return (
        <div className="min-h-screen flex flex-col gap-10 md:p-5 p-2">
            {loading ? (
                <div className="flex md:flex-row flex-col justify-center items-start md:justify-evenly mb-10">
                    <div className="md:w-1/3 w-64">
                        <div className="w-full h-80 bg-gray-300 animate-pulse rounded-xl"></div>
                    </div>
                    <div className="md:w-3/5 w-full flex flex-col gap-4">
                        <div className="h-8 w-3/4 bg-gray-300 animate-pulse rounded-md"></div>
                        <div className="h-6 w-1/3 bg-gray-300 animate-pulse rounded-md"></div>
                        <div className="h-10 w-1/2 bg-gray-300 animate-pulse rounded-md"></div>
                        <div className="h-32 w-full bg-gray-300 animate-pulse rounded-md"></div>
                        <div className="flex gap-4">
                            <div className="h-10 w-1/3 bg-gray-300 animate-pulse rounded-md"></div>
                            <div className="h-10 w-1/3 bg-gray-300 animate-pulse rounded-md"></div>
                        </div>
                        <div className="flex gap-5">
                            <div className="h-12 w-32 bg-gray-300 animate-pulse rounded-md"></div>
                            <div className="h-12 w-32 bg-gray-300 animate-pulse rounded-md"></div>
                        </div>
                    </div>
                </div>
            ) : (
                itemDtails && (
                    <>
                        <div className="flex md:flex-row flex-col justify-center items-start md:justify-evenly mb-10">
                            <div className="md:w-1/3 w-64">
                                <img src={itemDtails.image} alt="" className="rounded-xl" />
                            </div>
                            <div className="md:w-3/5 w-full flex flex-col gap-3">
                                <h1 className="md:text-3xl text-2xl md:text-start text-center">
                                    {itemDtails.name}
                                </h1>
                                <p className="text-gray-600 font-bold">{itemDtails.brand}</p>
                                <h1 className="text-2xl font-bold md:text-start text-center">
                                    ${itemDtails.price}
                                </h1>
                                <div className="max-h-[15rem] overflow-y-scroll">
                                    <p>{itemDtails.description}</p>
                                </div>

                                <div className="pt-4 p-3 flex gap-3 flex-col">
                                    <div className="w-full flex md:flex-row flex-col gap-4">
                                        <Select
                                            label="Select Size"
                                            value={selSize}
                                            onChange={(e) => setSize(e)}
                                        >
                                            {itemDtails.size.map((e, i) => (
                                                <Option key={i} value={e}>
                                                    {e}
                                                </Option>
                                            ))}
                                        </Select>
                                        <Select
                                            label="Select Color"
                                            value={selCol}
                                            onChange={(e) => setCol(e)}
                                        >
                                            {itemDtails.color.map((e, i) => (
                                                <Option key={i} value={e}>
                                                    {e}
                                                </Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="flex gap-5 md:flex-row flex-col">
                                        <div className="flex w-full justify-center items-center md:w-fit md:gap-4 gap-2">
                                            <div
                                                className="border rounded-md p-3 h-fit font-bold cursor-pointer text-xl flex justify-center items-center hover:bg-primary duration-100"
                                                onClick={() => setCont(cont !== 1 ? cont - 1 : cont)}
                                            >
                                                <TiMinus />
                                            </div>
                                            <div className="border rounded-md w-12 h-fit p-3 font-bold cursor-pointer text-xl flex justify-center items-center">
                                                {cont}
                                            </div>
                                            <div
                                                className="border rounded-md p-3 h-fit font-bold cursor-pointer text-xl flex justify-center items-center hover:bg-primary duration-100"
                                                onClick={() => setCont(cont + 1)}
                                            >
                                                <TiPlus />
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <Input
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                variant="standard"
                                                label="Discount Code"
                                                placeholder="Discount Code"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex w-full md:justify-start justify-center gap-4">
                                        <Button onClick={frmSubmit}>Add to Cart</Button>
                                        <Link to={"/cart"}>
                                            <Button>Check Out</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ✅ User Review Input Section Restored Here ✅ */}
                        <div className="mt-10">
                            <h2 className="text-center text-2xl font-bold mb-4">Leave a Review</h2>
                            <Itemreviwe url={itemDtails.image} id={id} />
                        </div>
                    </>
                )
            )}

            {/* Related Products */}
            <div>
                {cta && (
                    <div>
                        <h1 className="text-center text-4xl">Same Category Products</h1>
                        <CatagoryAllData cta={cta} id={id} />
                    </div>
                )}
                <ShowCategory />
                <Homeshowcase />
                <Brand />
            </div>
        </div>
    );
};

export default ItemDtl;
