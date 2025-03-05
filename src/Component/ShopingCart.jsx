import React from 'react'

import { Option, Select } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const ShopingCart = () => {
    const [cart, setCartItem] = useState(null)
    const [bool, setBool] = useState(false)

    const [selSize, setSize] = useState("");
    const [selCol, setCol] = useState("");



    const deleteCartItem = (itemId) => {
        fetch(`https://api-store-iota.vercel.app/store/cart/item/${itemId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Item deleted:', data);
                setBool(!bool)

            })
            .catch(error => console.error('Error deleting cart item:', error));
    }


    const updateCartItem = (itemId, quantity, color, size) => {
        fetch(`https://api-store-iota.vercel.app/store/cart/item/${itemId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
                quantity: quantity,
                color: color,
                size: size
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Item updated:', data);
                setBool(!bool)
            })
            .catch(error => console.error('Error updating cart item:', error));
    }


    useEffect(() => {


        fetch('https://api-store-iota.vercel.app/store/cart/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => setCartItem(data))
            .catch(error => console.error('Error fetching cart:', error));
    }, [bool])

    //new 


    const navigate = useNavigate();

    const handleCheckout = async () => {
        // try {
        //     const response = await fetch('https://api-store-iota.vercel.app/store/checkout/', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Token ${sessionStorage.getItem('token')}`
        //         }
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok.');
        //     }

        //     const data = await response.json();
        //     console.log(data);


        //     navigate('/profile/orderhistory');
        // } catch (error) {
        //     console.error('Error during checkout:', error);
        // }

        fetch(`https://api-store-iota.vercel.app/authore/user/${sessionStorage.getItem('username')}/`)
            .then(res => res.json())
            .then(data => {
                fetch('https://api-store-iota.vercel.app/store/payment/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${sessionStorage.getItem('token')}`
                    },
                    body: JSON.stringify(
                        {
                            "amount": cart?.total_main,
                            "user_id": data?.user?.id,
                            "order_id": 12345,
                            "name": data?.user?.username,
                            "email": data?.user?.email,
                            "phone": data?.phone,
                            "address": "Bangladesh",
                            "city": data?.location
                        }

                    )
                })
                    .then(res => res.json())
                    .then(data => {
                        // navigate(data?.payment_url)
                        window.location.replace(data?.payment_url)
                    })


            })
    };


    //diloge
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);


    return (
        <>
            <div className='min-h-screen'>

                <div className='p-7'>
                    <div className='flex justify-between border-b   py-4'>
                        <h2 className="text-2xl font-semibold">ORDER</h2>
                        <h2 className="text-2xl font-semibold text-gray-600">EDIT ORDER</h2>

                    </div>
                    {
                        cart ? (cart?.items)?.map((item, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-gray-200 py-4">
                                <div className="flex items-center">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="w-20 h-20 rounded-md object-cover"
                                    />
                                    <div className="ml-4">
                                        <Link to={`/shop/${item.id}`}><h2 className="text-lg font-semibold">{item.product.name}</h2></Link>
                                        <p className="text-gray-500">price {item.product.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-2xl">
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-2 items-center justify-center'>
                                            <FaMinus className="cursor-pointer text-gray-700 hover:text-primary duration-150"

                                                onClick={() => updateCartItem(item.id, (item.quantity - 1), item.color, item.size)}

                                            />
                                            <input
                                                type="text"
                                                value={item.quantity}
                                                readOnly
                                                className="w-12 text-center border border-gray-300 rounded-md"
                                            />
                                            <FaPlus className="cursor-pointer text-gray-700 hover:text-primary duration-150"

                                                onClick={() => updateCartItem(item.id, (item.quantity + 1), item.color, item.size)} />
                                            <span className="font-semibold ml-4">{item.subTotal}</span>
                                        </div>

                                        {/* <div className='flex gap-2 '>
                                            <Select
                                                label="Select Color"
                                                value={selCol ? selCol : `${item.color}`}
                                                onChange={(e) => updateCartItem(item.id, item.quantity, e, item.size)}


                                            >
                                                {((item?.product)?.color)?.map((e, i) => (

                                                    <Option key={i} value={e}>{e}</Option>
                                                ))
                                                }

                                            </Select>
                                            <Select
                                                label="Select Size"
                                                value={selSize ? selSize : `${item.size}`}
                                                onChange={(e) => updateCartItem(item.id, item.quantity, item.color, e)}
                                            >
                                                {((item?.product)?.size)?.map((e, i) => (

                                                    <Option key={i} value={e}>{e}</Option>
                                                ))
                                                }

                                            </Select>
                                        </div> */}
                                    </div>
                                    <RiDeleteBin6Fill
                                        className="cursor-pointer text-gray-700 ml-4 hover:text-red-600 duration-150"
                                        onClick={() => deleteCartItem(item.id)}

                                    />
                                </div>
                            </div>
                        )) :
                            <div className="space-y-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-gray-200 py-4 animate-pulse">
                                        <div className="flex items-center gap-4">
                                            <div className="w-20 h-20 bg-gray-300 rounded-md"></div>
                                            <div className="space-y-2">
                                                <div className="h-5 bg-gray-300 rounded w-32"></div>
                                                <div className="h-4 bg-gray-300 rounded w-20"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 bg-gray-300 rounded"></div>
                                            <div className="h-10 w-10 bg-gray-300 rounded"></div>
                                            <div className="h-10 w-10 bg-gray-300 rounded"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    }

                    <div className='py-9 flex justify-between'>
                        <h1>TOTAL PRICE : </h1>
                        <h1 className='text-2xl'>{cart?.total_main}</h1>
                    </div>
                    {/* <Button onClick={handleOpen} className="btn btn-primary">
                        Checkout
                    </Button> */}
                    <Button onClick={handleCheckout} className="btn btn-primary">
                        Checkout
                    </Button>
                </div>


            </div>
            <>
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Its a simple dialog.</DialogHeader>
                    <DialogBody>
                        {/* {
                        "amount": 1000,
                        "user_id": 3,
                        "order_id": 12345,
                        "name": "John Doe",
                        "email": "john@example.com",
                        "phone": "017XXXXXXXX",
                        "address": "Dhaka, Bangladesh",
                        "city": "Dhaka"
                        } */}

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
            </>

        </>

    );
};

export default ShopingCart;

