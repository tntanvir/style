import React from 'react'
import Hero from './Hero'
import { Homecatagory } from './Homecatagory'
import Homeshowcase from './Homeshowcase'
import HomeLogin from './HomeLogin'
import MapLocation from './MapLocation'
import Brand from './Brand'
import BannerSlider from './BannerSlider'

const Home = () => {
    return (
        <div >
            <BannerSlider />
            {/* <Hero /> */}
            <Homecatagory />
            <Homeshowcase />
            <HomeLogin />
            <MapLocation />
            <Brand />
        </div>
    )
}

export default Home