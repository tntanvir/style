import React from 'react'
import Hero from './Hero'
import { Homecatagory } from './Homecatagory'
import Homeshowcase from './Homeshowcase'
import HomeLogin from './HomeLogin'
import MapLocation from './MapLocation'
import Brand from './Brand'
import BannerSlider from './BannerSlider'
import Nexthero from './Nexthero'
import Service from './Service'

import ShowCategory from './ShowCategory'
import SlideReviews from './SlideReviews'


const Home = () => {
    return (
        <div >
            {/* <BannerSlider /> */}
            {/* <Hero /> */}
            <Nexthero />
            <Service />
            {/* <Homecatagory /> */}
            <Homeshowcase />
            <ShowCategory />
            {/* <HomeLogin />
            <MapLocation /> */}
            {/* <Clintreviews /> */}
            <SlideReviews />
            <Brand />
        </div>
    )
}

export default Home