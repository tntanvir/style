import TopBanner from './TopBanner';
import { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { FaShoppingCart, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Input } from '@material-tailwind/react';
import ShortBlog from './ShortBlog';
import { useEffect } from 'react';
import { IconButton, Typography } from "@material-tailwind/react";
import Brand from './Brand';



const Shop = () => {

    const [inp, setInp] = useState('');
    const [fetchDaata, setFetchDaata] = useState()
    const [pageData, setPageData] = useState(0)
    const [alldata, setAlldata] = useState(null)
    const [sData, setSdata] = useState(null);

    const type = (e) => {
        const txt = e.target.value;
        setInp(txt);
        const itms = alldata.filter((pro) => pro.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase()))
        setSdata(itms);

    }

    useEffect(() => {
        fetch('https://api-store-iota.vercel.app/store/products/?all=True')
            .then(res => res.json())
            .then((data) => {
                setAlldata(data);
            })
    }, [])

    const datas = Array.from({ length: 10 }, (_, i) => ({ id: i + 1 }));

    useEffect(() => {
        fetch('https://api-store-iota.vercel.app/store/products/')
            .then(res => res.json())
            .then(data => {
                setFetchDaata(data);
                setPageData((data.results)?.length);

            })
    }, [])

    // categories
    const [cata, setCata] = useState(null)
    useEffect(() => {
        fetch('https://api-store-iota.vercel.app/store/category/')
            .then(res => res.json())
            .then(data => {
                setCata(data)
            })
    }, [])

    const fillterItm = (cata) => {
        // console.log(cata)
        if (cata === "All") {
            setFetchDaata(null);

            fetch('https://api-store-iota.vercel.app/store/products/')
                .then(res => res.json())
                .then(data => {
                    setFetchDaata(data);
                    setPageData((data.results)?.length);

                })
        }
        else {
            setFetchDaata(null);

            fetch(`https://api-store-iota.vercel.app/store/products/?category=${cata}`)
                .then(res => res.json())
                .then(data => {
                    setFetchDaata(data);
                    setPageData((data.results)?.length);

                })
        }
    }

    // paginations

    const [active, setActive] = useState(1);


    const next = () => {
        if (active === 10) return;
        setActive(active + 1);

        fetch(fetchDaata.next)
            .then(res => res.json())
            .then(data => {
                setFetchDaata(data);
                setPageData(((data.results)?.length) + pageData)
            })

    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
        fetch(fetchDaata.previous)
            .then(res => res.json())
            .then(data => {
                setFetchDaata(data);
                setPageData(pageData - ((data.results)?.length))
            })
    };


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
        <div className='min-h-screen '>
            <TopBanner title={"Shop "} />
            <div className='flex justify-around  md:flex-row flex-col-reverse p-3'>
                <div className='border md:m-0 mb-4 md:w-1/3 w-full p-1 overflow-y-auto md:h-[260vh] '>
                    <div className='pb-4'>
                        <div>
                            <Input size="md" label="Search" value={inp} onChange={(e) => type(e)} />
                        </div>
                        <div className=' flex flex-col gap-2 '>
                            {
                                inp && sData.map((e) => (
                                    <Link to={`${e.id}`} key={e.id}>
                                        <div className='flex border'>


                                            <img src={e.image} alt="" loading='lazy' width={80} />
                                            <div>
                                                <h3>{e.name}</h3>

                                                <p>${e.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center text-xl'>Category</h1>
                        <div>
                            <ul className="flex flex-col gap-1 justify-center items-center">
                                <li onClick={() => fillterItm("All")} className="hover:bg-primary  rounded-md py-2 bg-gray-200 cursor-pointer w-full px-5">All</li>
                                {
                                    cata && cata.map((e) => (
                                        <li key={e.id} onClick={() => fillterItm(e.name)} className="hover:bg-primary rounded-md py-2 bg-gray-200 cursor-pointer w-full px-5">{e.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='w-full flex flex-col justify-start items-center px-2'>
                    <div className=" w-full bg-white p-3 shadow-lg rounded-md flex justify-between px-10 items-center">
                        <Typography >showing {pageData} of {fetchDaata?.count} result </Typography>

                    </div>
                    <div className='flex flex-wrap justify-around gap-2 py-3  min-h-screen'>
                        {
                            fetchDaata ? (fetchDaata.results).map((e) => (
                                <div key={e.id} className="shadow-md   w-72 rounded-md overflow-hidden flex flex-col justify-start cursor-pointer max-h-96 my-2">

                                    <div className="h-64 overflow-hidden relative">
                                        <img src={e.image} alt="" className="hover:scale-110 duration-500 absolute" loading='lazy' />
                                        <div className='absolute flex justify-center items-center w-full h-full backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 gap-3'>

                                            <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl" onClick={() => frmSubmit(e.id)}>
                                                <FaShoppingCart />
                                            </span>



                                            <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl">
                                                <Link to={`/shop/${e.id}`}>

                                                    <FaExternalLinkAlt />
                                                </Link>
                                            </span>

                                        </div>
                                    </div>
                                    <div className="p-5 ">

                                        <div className="flex justify-between">
                                            <h1>{e.category}</h1>
                                            {/* <Rating value={e.ratings} readonly /> */}
                                        </div>
                                        <div>
                                            <h1>{e.name}</h1>
                                        </div>
                                        <div className="flex justify-between">
                                            {/* <h1>{e.seller}</h1> */}
                                            <h1 className="font-bold"> ${e.price}</h1>
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
                    </div>
                    <div>
                        {fetchDaata && <div className="flex items-center gap-8">
                            <IconButton
                                size="sm"
                                variant="outlined"
                                onClick={prev}
                                disabled={fetchDaata.previous ? false : true}
                            >
                                <FaAngleDoubleLeft />
                            </IconButton>
                            <Typography color="gray" className="font-normal">
                                Page <strong className="text-gray-900">{active}</strong>
                            </Typography>
                            <IconButton
                                size="sm"
                                variant="outlined"
                                onClick={next}
                                disabled={fetchDaata.next ? false : true}
                            >

                                <FaAngleDoubleRight />
                            </IconButton>
                        </div>
                        }
                    </div>


                    <div className='md:hidden block mt-6 '>
                        <ShortBlog />

                    </div>
                </div>

            </div>
            <div>
                <Brand />

            </div>
        </div>
    )
}

export default Shop