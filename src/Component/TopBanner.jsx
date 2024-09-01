import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const TopBanner = ({ title }) => {
    const lower = title.toLocaleLowerCase()
    return (
        <div className='flex flex-col justify-center items-center TopBanner h-96'>
            <h1 className='text-4xl  font-bold'>

                Our <span className='text-primary'>{title}</span> Page
            </h1>
            <Breadcrumbs className='bg-transparent'>
                <Link to="/" className="opacity-60">
                    Home
                </Link>
                <Link to={`/${lower}`} className="opacity-60">
                    {title}
                </Link>

            </Breadcrumbs>
        </div>
    )
}

export default TopBanner