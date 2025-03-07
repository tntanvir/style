

import React, { useState, useEffect, useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  Badge,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { SiStylelint } from "react-icons/si";
import { contextAPI } from "../App";

function NavList() {
  return (
    <List className="lg:flex-row gap-1 md:gap-10">
      <Link to="/"><Typography className="text-sm font-semibold py-1.5 lg:py-0">Home</Typography></Link>
      <Link to="/shop"><Typography className="text-sm font-semibold py-1.5 lg:py-0">Shop</Typography></Link>
      <Link to="/about"><Typography className="text-sm font-semibold py-1.5 lg:py-0">About</Typography></Link>
      <Link to="/contact"><Typography className="text-sm font-semibold py-1.5 lg:py-0">Contact</Typography></Link>
    </List>
  );
}

export function Menus() {
  const [openNav, setOpenNav] = useState(false);
  const [pageLoad, setPageLoad] = useContext(contextAPI);
  const [userdata, setUserdata] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false); // For Accordion Control
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    if (username) {
      fetch(`https://api-store-iota.vercel.app/authore/user/${username}/`)
        .then(res => res.json())
        .then(data => setUserdata(data));
    } else {
      setUserdata(null);
    }
  }, [pageLoad]);

  const handleLogout = () => {
    fetch("https://api-store-iota.vercel.app/authore/logout/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          sessionStorage.removeItem("id");
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("username");
          setPageLoad(!pageLoad);
          navigate("/singin");
        } else {
          console.error("Failed to log out");
        }
      })
      .catch((err) => console.error("Logout error:", err));
  };

  return (
    <Navbar className={`mx-auto max-w-screen px-4 py-2 rounded-none sticky top-0 z-50 shadow-none border-none ${scrolled ? 'bg-transparent' : ''}`}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <div className="flex items-center text-black text-xl font-bold">
            <SiStylelint />
            <span>Style</span>
            <span className="bg-yellow-500 rounded">Swap</span>
          </div>
        </Link>
        <div className="hidden gap-5 lg:flex items-center">
          <NavList />
          <Link to="/cart">
            <Badge withBorder>
              <BsCart4 className="text-xl font-bold" />
            </Badge>
          </Link>
          {userdata ? (
            <Menu>
              <MenuHandler>
                <Avatar size="sm" className="cursor-pointer" src={userdata.image} alt="avatar" />
              </MenuHandler>
              <MenuList>
                <Link to="/profile">
                  <MenuItem>Profile</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <div className="px-1">
              <Link to="/singin">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          )}
        </div>
        <div className="lg:hidden flex items-center gap-1">
          <Link to="/cart">
            <Badge withBorder>
              <BsCart4 className="text-xl font-bold" />
            </Badge>
          </Link>
          <IconButton variant="text" color="blue-gray" onClick={() => setOpenNav(!openNav)}>
            {openNav ? <IoMdClose className="h-6 w-6" /> : <IoMdMenu className="h-6 w-6" />}
          </IconButton>
        </div>
      </div>

      {/* <Collapse open={openNav} >
        <NavList />
        {userdata ? (
          <div className="w-full px-2">
            <Accordion open={openAccordion} >
              <AccordionHeader onClick={() => setOpenAccordion(!openAccordion)}>
                <h1 className="text-black">Account</h1>
              </AccordionHeader>
              <AccordionBody className="flex flex-col gap-2">
                <Link to="/profile">
                  <Button variant="text" fullWidth>Profile</Button>
                </Link>



                <Link to="/profile/dashboard" >
                  <Button variant="text" fullWidth>Dashboard</Button>
                </Link>

                {userdata?.user_type === 'seller' &&
                  <Link to="/profile/addproduct" >
                    <Button variant="text" fullWidth>
                      Add Product
                    </Button>
                  </Link>
                }
                {userdata?.user_type === 'seller' &&
                  <Link to="/profile/myaddedproduct" >
                    <Button variant="text" fullWidth>
                      MY Added Product
                    </Button>
                  </Link>
                }


                <Link to="/profile/orderhistory" >
                  <Button variant="text" fullWidth>
                    My  Order History
                  </Button>
                </Link>

                {userdata?.user_type !== 'buyer' && userdata?.user_type !== 'admin' &&
                  <Link to="/profile/orderproduct" >
                    <Button variant="text" fullWidth>
                      Request Order Product
                    </Button>
                  </Link>
                }

                <Button variant="outlined" color="red" fullWidth onClick={handleLogout}>
                  Logout
                </Button>
              </AccordionBody>
            </Accordion>
          </div>
        ) : (
          <div className="px-1">
            <Link to="/singin">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        )}
      </Collapse> */}
      <Collapse open={openNav} className="overflow-y-auto ">
        <NavList />
        {userdata ? (
          <div className="w-full px-2">
            <Accordion open={openAccordion} className="h-full overflow-y-auto">
              <AccordionHeader onClick={() => setOpenAccordion(!openAccordion)}>
                <h1 className="text-black">Account</h1>
              </AccordionHeader>
              <AccordionBody className="flex flex-col gap-2">
                <Link to="/profile">
                  <Button variant="text" fullWidth>Profile</Button>
                </Link>
                <Link to="/profile/dashboard">
                  <Button variant="text" fullWidth>Dashboard</Button>
                </Link>

                {userdata?.user_type === 'seller' && (
                  <>
                    <Link to="/profile/addproduct">
                      <Button variant="text" fullWidth>Add Product</Button>
                    </Link>
                    <Link to="/profile/myaddedproduct">
                      <Button variant="text" fullWidth>My Added Products</Button>
                    </Link>
                  </>
                )}

                <Link to="/profile/orderhistory">
                  <Button variant="text" fullWidth>My Order History</Button>
                </Link>

                {userdata?.user_type !== 'buyer' && userdata?.user_type !== 'admin' && (
                  <Link to="/profile/orderproduct">
                    <Button variant="text" fullWidth>Request Order Product</Button>
                  </Link>
                )}
              </AccordionBody>
            </Accordion>

            {/* Logout Button Outside the Accordion */}
            <Button
              variant="outlined"
              color="red"
              fullWidth
              className="mt-2"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="px-1">
            <Link to="/singin">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        )}
      </Collapse>


    </Navbar>
  );
}
