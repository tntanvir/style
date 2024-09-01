import { Avatar } from '@material-tailwind/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const UserImg = ({ name }) => {
    const [data, setdata] = useState(null)
    useEffect(() => {
        fetch(`https://api-clothify.onrender.com/authore/user/${name}/`)
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])
    return (
        <div>

            {
                data && <Avatar src={data.image} />
            }
        </div>
    );
};

export default UserImg;