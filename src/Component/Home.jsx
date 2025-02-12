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
import { Clintreviews } from './Clintreviews'
import ShowCategory from './ShowCategory'


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
            <Clintreviews />
            <Brand />
        </div>
    )
}

export default Home