import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import products from "../products.json";
import { Select, Option, Rating, Input, Button } from "@material-tailwind/react";
import { TiPlus, TiMinus } from "react-icons/ti";
import CatagoryAllData from './CatagoryAllData';
import Itemreviwe from './Itemreviwe';


const ItemDtl = () => {
    const { id } = useParams();
    const [itm, setItm] = useState([]);
    const [tm, setTm] = useState('');
    const [cta, setCata] = useState('');

    const [selSize, setSize] = useState("");
    const [selCol, setCol] = useState("");
    const [cont, setCont] = useState('');
    const [code, setCode] = useState('');











    const frmSubmit = () => {


        console.log({ 'size': selSize }, { 'color': selCol }, { 'quantity': cont })

        fetch('https://api-clothify.onrender.com/store/cart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
                product_id: id,
                quantity: cont,
                color: selCol,
                size: selSize
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Item added:', data);

            })
            .catch(error => console.error('Error adding item to cart:', error));
    }

    const [itemDtails, setItemDtails] = useState(null)

    useEffect(() => {
        fetch(`https://api-clothify.onrender.com/store/products/${id}/`)
            .then(res => res.json())
            .then(data => {
                setItemDtails(data)
                setCont(1)
                setSize(data.size[0])
                setCol(data.color[0])
                setCata(data.category)
            })


    }, [id])




    return (
        <div className='min-h-screen flex flex-col gap-10 md:p-5 p-2  '>
            {
                itemDtails && (
                    <div className='flex md:flex-row flex-col justify-center items-center  md:justify-evenly mb-10'>
                        <div className='md:w-1/3 w-64'>
                            <img src={itemDtails.image} alt="" className='rounded-xl' />
                        </div>
                        <div className='md:w-3/5 w-full flex flex-col gap-1 md:gap-3'>
                            <h1 className='md:text-3xl text-2xl md:text-start text-center'>{itemDtails.name}</h1>
                            <div className='flex gap-3 md:justify-start justify-center'>


                                <p className='text-gray-600 font-bold'>{itemDtails.brand}</p>
                            </div>
                            <h1 className='text-2xl font-bold md:text-start text-center'>${itemDtails.price}</h1>
                            <p className='md:text-start text-center font-bold'>{itm.seller}</p>
                            <p>{itemDtails.description}</p>

                            <div className=' pt-4 p-3 flex gap-3 flex-col'>
                                <div className='w-full flex md:flex-row flex-col  gap-4'>

                                    <Select
                                        label="Select Size"
                                        name='size'
                                        value={selSize}
                                        onChange={(e) => setSize(e)}
                                    >
                                        {(itemDtails.size).map((e, i) => (

                                            <Option key={i} value={e}>{e}</Option>
                                        ))
                                        }

                                    </Select>
                                    <Select
                                        label="Select Color"
                                        value={selCol}
                                        onChange={(e) => setCol(e)}
                                    >
                                        {(itemDtails.color).map((e, i) => (

                                            <Option key={i} value={e}>{e}</Option>
                                        ))
                                        }

                                    </Select>
                                </div>
                                <div className='flex gap-5 md:flex-row flex-col'>

                                    <div className=' flex  w-full justify-center items-center md:w-fit md:gap-4 gap-2'>
                                        <div className='border rounded-md p-3 h-fit  font-bold cursor-pointer text-xl flex justify-center items-center hover:bg-primary duration-100 ' onClick={() => setCont(cont != 1 ? cont - 1 : cont)}>
                                            <TiMinus />
                                        </div>
                                        <div className='border rounded-md w-12 h-fit   p-3 font-bold cursor-pointer text-xl flex justify-center items-center' >{cont}</div>
                                        <div className='border rounded-md p-3 h-fit  font-bold cursor-pointer text-xl flex justify-center items-center hover:bg-primary duration-100' onClick={() => setCont(cont + 1)} >
                                            <TiPlus />
                                        </div>
                                    </div>
                                    <div className='p-2'>
                                        <Input value={code} onChange={(e) => setCode(e.target.value)} variant='standard' label="Discound Code" placeholder='Discound Code' />
                                    </div>
                                </div>
                                <div className='flex w-full md:justify-start justify-center gap-4'>
                                    <Button onClick={() => frmSubmit()}>Add to Cart</Button>
                                    <Link to={"/cart"}>

                                        <Button>Check OUt</Button>
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>
                )
            }
            <div>
                {itemDtails && <Itemreviwe url={itemDtails.image} id={id} />}
            </div>
            {cta && <CatagoryAllData cta={cta} id={id} />}
        </div >
    )
}

export default ItemDtl