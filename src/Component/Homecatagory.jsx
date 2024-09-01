import React from 'react'
import { Link } from 'react-router-dom';
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const categoryList = [
    {
        // imgUrl: 'src/assets/images/category/01.jpg',
        imgUrl: 'https://images.unsplash.com/photo-1526353142379-8e22db12876c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: 'https://plus.unsplash.com/premium_photo-1663957821802-4969fe6a0347?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1613896640137-bb5b31496315?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: 'https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]
import { GiShoppingCart } from "react-icons/gi";
import { Button } from '@material-tailwind/react';
export const Homecatagory = () => {
    return (
        <div className='flex flex-col gap-10 justify-center items-center py-5'>
            <div className='pt-14 text-center'>
                <p className='md:text-2xl text-xl text-primary'>{subTitle}</p>
                <h1 className='md:text-4xl text-2xl font-bold'>{title}</h1>
            </div>
            <div className='py-4 px-3 flex flex-wrap gap-6 justify-evenly items-center'>
                {
                    categoryList.map((e) => (
                        <Card key={e.title}
                            shadow={false}
                            className="relative grid max-h-[16rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center hover:cursor-pointer hover:-translate-y-2 duration-300 "
                        >
                            <Link to={"/shop"} >
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className={`absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center`}
                                    style={{ backgroundImage: `url(${e.imgUrl})` }}
                                >
                                    <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/25 from-0%" />
                                </CardHeader>
                                <CardBody className="relative text-center py-14 px-6 md:px-12  flex flex-col justify-center items-center">
                                    <Typography variant="h5" className="text-3xl text-primary">
                                        {e.title}
                                    </Typography>
                                    <Typography variant="h1" className="text-center text-primary ">
                                        <GiShoppingCart className='text-3xl font-bold text-black text-center bg-primary  rounded-full w-10 h-10' />
                                    </Typography>

                                </CardBody>
                            </Link>
                        </Card>

                    ))
                }
            </div>
            <Button variant='text' className='hover:bg-primary hover:-translate-y-2  border-primary border-2 duration-500 hover:text-white'>{btnText}</Button>
        </div>
    )
}
