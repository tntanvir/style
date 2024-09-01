import TopBanner from './TopBanner';
import { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { FaShoppingCart, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Input } from '@material-tailwind/react';
import ShortBlog from './ShortBlog';
import { useEffect } from 'react';
import { IconButton, Typography } from "@material-tailwind/react";



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
        fetch('https://api-clothify.onrender.com/store/products/?all=True')
            .then(res => res.json())
            .then((data) => {
                setAlldata(data);
            })
    }, [])


    useEffect(() => {
        fetch('https://api-clothify.onrender.com/store/products/')
            .then(res => res.json())
            .then(data => {
                setFetchDaata(data);
                setPageData((data.results)?.length);

            })
    }, [])

    // categories
    const [cata, setCata] = useState(null)
    useEffect(() => {
        fetch('https://api-clothify.onrender.com/store/category/')
            .then(res => res.json())
            .then(data => {
                setCata(data)
            })
    }, [])

    const fillterItm = (cata) => {
        if (cata === "All") {
            fetch('https://api-clothify.onrender.com/store/products/')
                .then(res => res.json())
                .then(data => {
                    setFetchDaata(data);
                    setPageData((data.results)?.length);

                })
        }
        else {
            fetch(`https://api-clothify.onrender.com/store/products/?category=${cata}`)
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

    return (
        <div className='min-h-screen '>
            <TopBanner title={"Shop "} />
            <div className='flex justify-around  md:flex-row flex-col-reverse p-3'>
                <div className='w-full flex flex-col justify-start items-center'>
                    <div className="md:w-11/12 w-full bg-white p-3 shadow-lg rounded-md flex justify-between px-10 items-center">
                        <Typography >showing {pageData} of {fetchDaata?.count} result </Typography>

                    </div>
                    <div className='flex flex-wrap justify-around gap-2 py-3  min-h-screen'>
                        {
                            fetchDaata && (fetchDaata.results).map((e) => (
                                <div key={e.id} className="shadow-md   w-72 rounded-md overflow-hidden flex flex-col justify-start cursor-pointer max-h-96 ">

                                    <div className="h-64 overflow-hidden relative">
                                        <img src={e.image} alt="" className="hover:scale-110 duration-500 absolute" loading='lazy' />
                                        <div className='absolute flex justify-center items-center w-full h-full backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 gap-3'>

                                            {/* <span className="text-gray-900 bg-primary p-3 rounded-full text-2xl" onClick={() => frmSubmit(e.id)}>
                                                <FaShoppingCart />
                                            </span> */}



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
                            ))


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
                            <ul className="flex flex-wrap gap-1 justify-center items-center">
                                <li onClick={() => fillterItm("All")} className="hover:bg-primary px-5 rounded-md py-1 bg-gray-200 cursor-pointer">All</li>
                                {
                                    cata && cata.map((e) => (
                                        <li key={e.id} onClick={() => fillterItm(e.name)} className="hover:bg-primary px-5 rounded-md py-1 bg-gray-200 cursor-pointer">{e.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Shop