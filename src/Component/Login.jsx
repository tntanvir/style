import { Typography } from '@material-tailwind/react';
import { Card } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import { useState } from 'react';
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';


import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { contextAPI } from '../App';
import { Link } from 'react-router-dom';
import { FaCopy } from 'react-icons/fa6';



const Login = () => {


    const [pageLoad, setPageLoad] = useContext(contextAPI);

    //Rgister
    const [image, setImage] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [name, setname] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [type, setType] = useState("");


    const navigate = useNavigate()

    const updateImgtoUrl = async (e) => {
        console.log('object');
        try {
            const formData = new FormData();
            formData.append('image', e);

            const res = await axios.post('https://api.imgbb.com/1/upload?key=526182029130a23070675bf11635fe8f', formData);

            if (res.data.data.url) {
                setImage(res.data.data.url)

            }
        }
        catch (err) {
            console.log(err);
        }
    }


    const SingUp = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('image', image)
        formData.append('username', username)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('location', location)
        formData.append('user_type', type)
        formData.append('password', password)
        formData.append('password2', confirmPassword)
        fetch('https://api-store-iota.vercel.app/authore/register/', {
            method: 'POST',
            body: formData,

        }).then(res => res.json()).then(data => {
            if (data.errors) {
                toast.error(data.errors, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            }
            else {
                setImage(null);
                setUsername('');
                setname('');
                setEmail('');
                setPhone('');
                setLocation('');
                setType('');
                setPassword('');
                setConfirmPassword('');
                toast.success(data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            }

        })

    }

    //login
    const [logusername, setLogusername] = useState('')
    const [logpassword, setLogpassword] = useState('')

    const Singin = (e) => {
        e.preventDefault()
        fetch('https://api-store-iota.vercel.app/authore/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: logusername,
                password: logpassword
            })
        }).then(res => res.json())
            .then(data => {
                if (data.token) {
                    sessionStorage.setItem('token', data.token)
                    sessionStorage.setItem('id', data.id)
                    sessionStorage.setItem('username', data.username)
                    setPageLoad(!pageLoad)
                    toast.success(data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        onClose: () => navigate('/profile/dashboard'),
                    });
                }
                else {
                    toast.error("Invalid credentials", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })
                    // alert('"Invalid credentials"')
                }
            })

    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);


    const copyclick = (text) => {
        if (text == 'buyer') {
            setLogusername('fetaf30659')
            setLogpassword('Tanvir12345678')
            handleOpen()
        }
        else if (text == 'seller') {
            setLogusername('seller')
            setLogpassword('Tanvir12345678')
            handleOpen()
        }
        else {
            setLogusername('tntanvir')
            setLogpassword('123')
            handleOpen()
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center flex-col gap-3'>
            <Card color="transparent" className=''>
                <h1 className='text-center text-3xl font-bold text-black'>Sing in</h1>
                <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96 p-3 " onSubmit={Singin}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            User Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            value={logusername}
                            onChange={(e) => setLogusername(e.target.value)}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            value={logpassword}
                            onChange={(e) => setLogpassword(e.target.value)}
                        />
                    </div>

                    <Button className="mt-6" fullWidth type='submit'>
                        sign in
                    </Button>

                </form>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <Link to={'/singup'} className="font-medium text-gray-900">
                        Sign Up
                    </Link>
                </Typography>
            </Card>
            <h1 className='hover:underline cursor-pointer' onClick={handleOpen}>Demo Login</h1>
            <>
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Demo Login info</DialogHeader>
                    <DialogBody>
                        <h1 className='font-bold'>Buyer</h1>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p> username : fetaf30659</p>
                                <p>password : Tanvir12345678</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <FaCopy className='text-2xl' onClick={() => copyclick('buyer')} />
                            </div>
                        </div>
                        <h1 className='font-bold'>Seller</h1>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p> username : seller</p>
                                <p>password : Tanvir12345678</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <FaCopy className='text-2xl' onClick={() => copyclick('seller')} />
                            </div>
                        </div>
                        <h1 className='font-bold'>Admin</h1>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p> username : tntanvir</p>
                                <p>password : 123</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <FaCopy className='text-2xl' onClick={() => copyclick('admin')} />
                            </div>
                        </div>
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
        </div>
    );
};

export default Login;