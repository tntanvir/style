import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const postList = [{ id: 1, imgUrl: '/src/assets/images/blog/10.jpg', imgAlt: 'rajibraj91', title: 'Poor People Campaign Our Resources', date: 'Jun 05,2022', }, { id: 2, imgUrl: '/src/assets/images/blog/11.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, { id: 3, imgUrl: '/src/assets/images/blog/12.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, { id: 4, imgUrl: '/src/assets/images/blog/09.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', },]
const ShortBlog = () => {



    return (
        <div className='flex flex-col gap-2'>
            {

                postList.map((e) => (
                    <Link key={e.id} to={"/blog"}>
                        <div className='rounded-sm flex p-1 gap-3 border'>
                            <div className='w-1/2 flex justify-center items-center'>
                                <img src={e.imgUrl} alt={e.imgAlt} width={100} />

                            </div>
                            <div>
                                <h1>{e.title}</h1>
                                <p>{e.date}</p>
                            </div>

                        </div>
                    </Link>
                ))
            }

        </div>
    )
}

export default ShortBlog