import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";


import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { Badge } from "@material-tailwind/react";
import { useContext } from "react";
import { contextAPI } from "../App";
import { Avatar } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
function NavList() {
  return (
    <List className=" lg:flex-row  gap-1 md:gap-10 ">
      <Link to="/"><Typography className="text-sm font-semibold py-1.5 lg:py-0 ">Home</Typography></Link>
      <Link to="/shop"><Typography className="text-sm font-semibold py-1.5 lg:py-0 ">Shop</Typography></Link>



    </List>
  );
}
//------------loging impot--------

import { SiStylelint } from "react-icons/si";

import { useSpring, animated, config } from 'react-spring';
import { useEffect } from "react";
import { useState } from "react";

export function Menu() {
  const [openNav, setOpenNav] = React.useState(false);
  const [pageLoad, setPageLoad] = useContext(contextAPI);

  const [userdata, setUserdata] = useState(null);


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    if (username) {
      fetch(`https://api-clothify.onrender.com/authore/user/${username}/`)
        .then(res => res.json())
        .then(data => {
          setUserdata(data)
        })
    }
    else {
      setUserdata(null)
    }
  }, [pageLoad]);





  const firstTextStyles = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.wobbly,
  });

  const secondTextStyles = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.wobbly,
    delay: 300, // Delay for the second text animation
  });
  return (
    <>
      <Navbar className="mx-auto max-w-screen px-4 py-2 rounded-none
    sticky top-0 z-50 bg-transparent shadow-none border-none">
        <div className="flex items-center justify-between text-blue-gray-900 bg-transparent">

          <Link to='/'>

            <div className="flex items-center justify-center  text-black text-xl font-bold">
              <SiStylelint />
              <animated.span style={firstTextStyles} className="">
                Style
              </animated.span>
              <animated.span style={secondTextStyles} className="bg-yellow-500  rounded">
                Swap
              </animated.span>
            </div>

          </Link>
          <div className="hidden gap-5 lg:flex items-center">
            <NavList />
            <Link to={'/cart'}>
              <Badge withBorder>

                <BsCart4 className="text-xl font-bold" />
              </Badge>
            </Link>
            {
              userdata ?
                <Link to={'/profile'}>
                  <Tooltip content={userdata.name}>

                    <Avatar size="sm" className="cursor-pointer" src={userdata.image} alt="avatar" />
                  </Tooltip>
                </Link>
                :
                <div className="px-1">
                  <Link to={'/login'}>
                    <Button size="sm" >
                      Get Start
                    </Button>
                  </Link>

                </div>
            }
          </div>
          <div className="lg:hidden flex items-center justify-center gap-1">
            <Link to={'/cart'}>
              <Badge withBorder>

                <BsCart4 className="text-xl font-bold" />
              </Badge>
            </Link>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ?
                <IoMdClose className="h-6 w-6" strokeWidth={2} />
                :
                <IoMdMenu className="h-6 w-6" strokeWidth={2} />
              }

            </IconButton>


          </div>
        </div>
        <Collapse open={openNav} className="" onClick={() => setOpenNav(!openNav)}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Log In
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Sign In
            </Button>
          </div>
        </Collapse>
      </Navbar>


    </>

  );
}

