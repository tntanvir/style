
import {
    Tab, Tabs, TabsHeader, Select, Option, MenuHandler,
    MenuList,
    MenuItem,
    Menu, Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';
import { useState } from 'react';
import ShortBlog from './ShortBlog';
import { useEffect } from 'react';
import UserImg from './UserImg';
import { Input } from '@material-tailwind/react';
import { BsFillSendFill, BsThreeDotsVertical } from 'react-icons/bs';
import { Button } from '@material-tailwind/react';




const Itemreviwe = ({ url, id }) => {
    const [bol, setBol] = useState(true);
    const [reviews, setReviews] = useState(null);
    const [load, setLoad] = useState(false)


    const [text, setText] = useState('')
    const [value, setValue] = useState("⭐⭐⭐⭐⭐");

    const ReviewSent = () => {
        fetch(`https://api-clothify.onrender.com/store/products/${id}/reviews/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
                product: id,
                rating: value,
                review_text: text
            }),
        })
            .then(res => res.json())
            .then(() => setLoad(!load))
    }

    useEffect(() => {
        fetch(`https://api-clothify.onrender.com/store/products/${id}/reviews/`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)

            })
    }, [id, load])

    const [user, setUser] = useState(null)

    useEffect(() => {
        const user = sessionStorage.getItem('username')
        setUser(user)

    }, [])

    //edit comment
    const [editreviewText, setEditreviewText] = useState('')
    const [editreviewRating, setEditreviewRating] = useState('')
    const [editreviewProduct, setEditreviewProduct] = useState('')

    const [editreviewId, setEditreviewId] = useState('')







    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);


    const EditReviwe = (id) => {
        fetch(`https://api-clothify.onrender.com/store/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setEditreviewText(data.review_text);
                setEditreviewRating(data.rating);
                setEditreviewProduct(data.product);

                setEditreviewId(data.id)
                handleOpen()

            })
    }
    const EditConfirm = (id) => {
        fetch(`https://api-clothify.onrender.com/store/reviews/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                'id': id,
                'review_text': editreviewText,
                'rating': editreviewRating,
                'product': editreviewProduct,

            })

        }).then(response => response.json())
            .then(() => {
                handleOpen()
                setLoad(!load)

            })



    }


    const deleteCmt = (id) => {
        fetch(`https://api-clothify.onrender.com/store/reviews/${id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
        }).then(() => {
            setLoad(!load)
        })
    }


    const [productInOrderHistory, setProductInOrderHistory] = useState(false);
    useEffect(() => {

        fetch(`https://api-clothify.onrender.com/store/order-history/check-product/${id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setProductInOrderHistory(data.product_in_order_history);
            })

    }, [id])

    return (
        <div className='md:p-3 flex flex-col gap-10 '>
            <div className='md:w-96 w-60'>
                <Tabs value="Reviwe">
                    <TabsHeader>
                        <Tab value={"Reviwe"} onClick={() => setBol(true)} >
                            <h1>Reviwe</h1>
                        </Tab>
                        <Tab value={"Details"} onClick={() => setBol(false)}>
                            <h1>Details</h1>
                        </Tab>
                    </TabsHeader>
                </Tabs>
            </div>
            <div className='flex flex-col md:flex-row gap-5  md:gap-2'>
                <div className='md:w-3/4 w-full flex flex-col gap-2'>

                    {productInOrderHistory &&
                        <div className='flex gap-3 justify-center items-center'>

                            <div className='w-full flex flex-col gap-2'>
                                <Input placeholder="Enter Review"
                                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    containerProps={{ className: "min-w-[100px]" }}
                                    onChange={(e) => setText(e.target.value)} />

                                <Select
                                    label="Select Version"
                                    value={value}
                                    onChange={(val) => setValue(val)}
                                >
                                    <Option value="⭐">⭐</Option>
                                    <Option value="⭐⭐">⭐⭐</Option>
                                    <Option value="⭐⭐⭐">⭐⭐⭐</Option>
                                    <Option value="⭐⭐⭐⭐">⭐⭐⭐⭐</Option>
                                    <Option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</Option>
                                </Select>

                            </div>

                            <BsFillSendFill onClick={() => ReviewSent()} className='text-3xl  cursor-pointer hover:scale-150 duration-150' />
                        </div>
                    }
                    {
                        bol ?
                            <div className='flex flex-col gap-1.5'>
                                {
                                    reviews?.map((e, i) => (
                                        <div key={i} className='flex md:flex-row flex-col justify-center gap-10 rounded-md border p-1'>
                                            <div className='flex justify-center items-center'>
                                                <UserImg name={e.user} />
                                            </div>
                                            <div className='md:w-10/12 flex  w-full items-center justify-center flex-col gap-2 '>

                                                <div className='flex md:flex-row flex-col justify-center items-center md:justify-between w-full'>
                                                    <div className='flex md:gap-9 gap-2 md:flex-row flex-col justify-center md:justify-between items-center'>

                                                    </div>

                                                    <div className='flex gap-2'>
                                                        <div>

                                                            {e.rating}
                                                        </div>
                                                        {user === e.user && <Menu>
                                                            <MenuHandler >
                                                                <button><BsThreeDotsVertical className='cursor-pointer' /></button>
                                                            </MenuHandler>
                                                            <MenuList>
                                                                <MenuItem onClick={() => EditReviwe(e.id)}>Edit</MenuItem>
                                                                <MenuItem onClick={() => deleteCmt(e.id)} >Delete</MenuItem>

                                                            </MenuList>
                                                        </Menu>
                                                        }
                                                    </div>
                                                </div>
                                                <div className='w-full flex break-words'>
                                                    <p className='w-full'>{e.review_text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            <div>
                                <div className=' w-full flex flex-col gap-2  md:p-8 shadow-xl rounded p-1'>

                                    <p className=' text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo nostrum pariatur quasi dolorem illo, distinctio deserunt voluptas accusantium dicta doloremque quo debitis tenetur aliquam modi consectetur consequuntur sit laborum blanditiis, corrupti ratione eaque magnam! Eligendi accusantium aperiam ad vitae veritatis numquam? Distinctio voluptatum, asperiores doloremque eius debitis, quo quod fugiat dolore unde assumenda iusto quaerat consequatur pariatur ipsum! Laboriosam?</p>
                                    <div className='flex justify-between md:p-4 items-center  md:flex-row flex-col-reverse gap-3'>

                                        <ul className='flex flex-col gap-3 p-2'>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo?</li>
                                        </ul>
                                        <div><img src={url} alt="" width={300} className='rounded-md' /></div>
                                    </div>
                                    <p className=' text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit illum voluptate voluptatum facere provident accusamus maxime? Natus quaerat minus aut reiciendis.Sapiente reprehenderit illum voluptate voluptatum facere provident accusamus maxime? Natus quaerat minus aut reiciendisSapiente reprehenderit illum voluptate voluptatum facere provident accusamus maxime? Natus quaerat minus aut reiciendis</p>

                                </div>
                            </div>
                    }
                </div>
                <div className=' '>
                    <ShortBlog />
                </div>
            </div>
            <>
                <Dialog open={open} handler={handleOpen} size='xs'>
                    <DialogHeader>Edit Review</DialogHeader>
                    <DialogBody className='flex flex-col gap-3'>
                        <Input type="text" value={editreviewText} label='Enter Review' onChange={(e) => setEditreviewText(e.target.value)} />
                        <Select
                            label="Select Version"
                            value={editreviewRating}
                            onChange={(val) => setEditreviewRating(val)}
                        >
                            <Option value="⭐">⭐</Option>
                            <Option value="⭐⭐">⭐⭐</Option>
                            <Option value="⭐⭐⭐">⭐⭐⭐</Option>
                            <Option value="⭐⭐⭐⭐">⭐⭐⭐⭐</Option>
                            <Option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</Option>
                        </Select>
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
                        <Button variant="gradient" color="green" onClick={() => EditConfirm(editreviewId)}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </>

        </div>
    )
}

export default Itemreviwe