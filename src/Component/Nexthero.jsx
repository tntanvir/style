


import React from 'react';
import fast from '../../public/one.jpg';
import two from '../../public/two.jpg';
import three from '../../public/three.jpg';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Nexthero = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white gap-4 p-6">
            <div className="w-full md:w-2/3 h-[400px] md:h-[620px] relative group overflow-hidden rounded-lg shadow-md  ">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110 "
                    style={{ backgroundImage: `url(${fast})` }}
                />
                <div className="absolute inset-0 flex items-center cursor-pointer">
                    <div className="p-6 text-black">
                        <p className='text-gray-600 ' style={{ letterSpacing: '0.3rem' }}>SMART TIVI</p>
                        <h2 className="text-5xl  mb-2 drop-shadow-md w-80 font-thin py-4">Say hello to the future</h2>
                        <p className="text-3xl text-gray-600">sale up to <span className='text-red-600'>60%</span> off </p>
                        <Link to={'/shop'}>
                            <Button className='rounded-full mt-5 bg-[linear-gradient(90deg,_rgba(32,0,36,1)_0%,_rgba(255,5,241,1)_0%,_rgba(89,0,255,1)_100%)]' >Shop Now</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-between gap-4 h-full">
                <div className="h-[300px] relative group overflow-hidden rounded-lg shadow-lg">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${two})` }}
                    />
                    <div className="absolute inset-0 flex items-center cursor-pointer">
                        <div className="p-6 text-black">
                            <h2 className="text-2xl font-bold mb-2 drop-shadow-lg w-52 ">Playstation 4 game pro</h2>
                            <p className="text-xl drop-shadow-md text-gray-700">From <span className='text-4xl text-red-500'>29.99 $</span></p>
                            <Link to={'/shop'}>
                                <Button className='rounded-full mt-5 bg-[linear-gradient(90deg,_rgba(32,0,36,1)_0%,_rgba(255,5,241,1)_0%,_rgba(89,0,255,1)_100%)]' >Shop Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-[300px] relative group overflow-hidden rounded-lg shadow-lg">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${three})` }}
                    />
                    <div className="absolute inset-0 flex items-center cursor-pointer">
                        <div className="p-6 text-black">
                            <h2 className="text-2xl font-bold mb-2 drop-shadow-lg w-52 ">Smart phone mix 2</h2>
                            <p className="text-xl drop-shadow-lg text-gray-700">From <span className='text-4xl text-red-500'>99.99 $</span></p>
                            <Link to={'/shop'}>
                                <Button className='rounded-full mt-5 bg-[linear-gradient(90deg,_rgba(32,0,36,1)_0%,_rgba(255,5,241,1)_0%,_rgba(89,0,255,1)_100%)]' >Shop Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nexthero;
