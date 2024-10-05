import { Avatar } from '@material-tailwind/react';
import React from 'react';

const ShowUserInfo = ({ usermore }) => {
    return (
        <div>
            {
                usermore && <div className='flex gap-7'>
                    <div className=' justify-center items-center flex'>
                        {/* <img src={usermore?.image} alt="" srcset="" /> */}
                        <Avatar src={usermore?.image} />
                    </div>
                    <div className=''>
                        <h1><span className='font-semibold'>Name:</span> {usermore.name}</h1>
                        <h1><span className='font-semibold'>UserName:</span> @{usermore?.user?.username}</h1>

                        <h1><span className='font-semibold'>Email:</span> {usermore?.user?.email}</h1>
                        <h1><span className='font-semibold'>Phone:</span> {usermore?.phone}</h1>
                        <h1><span className='font-semibold'>Location: </span>{usermore?.location}</h1>
                    </div>
                </div>
            }
        </div>
    );
};

export default ShowUserInfo;