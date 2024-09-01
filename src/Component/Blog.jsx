import React from 'react'
import TopBanner from './TopBanner'
import data from "../utilis/blogdata";

const Blog = () => {
    return (
        <div className='min-h-screen'>

            <TopBanner title={"Blog"} />
            {/* <div>
                {
                    data?.map((e, i) => (
                        <div key={i}>
                            <img src={e.imgUrl} alt={e.Alt} srcset="" loading='lazy' />
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default Blog