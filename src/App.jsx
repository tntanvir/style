import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import { Menu } from "./Component/Menu"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./Component/Shop";
import ItemDtl from "./Component/ItemDtl";
import { Footer } from "./Component/Footer";
import ShopingCart from "./Component/ShopingCart";
import { createContext } from 'react';
import { useState } from "react";
import Private from "./Component/Privates/Private";

import Payment from "./Component/Payment";
import Notfound from "./Component/Notfound";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import MainLayout from "./Component/MainLayout";
import Orders from "./Component/Orders";
import AddProduct from "./Component/AddProduct";

export const contextAPI = createContext();

const App = () => {
  const [pageLoad, setPageLoad] = useState(false);

  return (
    <>
      <contextAPI.Provider value={[pageLoad, setPageLoad]}>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            {/* <Route path='/profile' element={<Profile />} /> */}
            <Route path='/shop/:id' element={<ItemDtl />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Private childern={<Payment />} />} />
            <Route path="*" element={<Notfound />} />


            <Route
              path="/cart"
              element={
                <Private childern={<ShopingCart />} />
              }
            />


            <Route path="/profile" element={<MainLayout />}>
              <Route path="" element={<Profile />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="orderhistory" element={<Orders />} />

            </Route>
          </Routes>
          <Footer />
        </Router>
      </contextAPI.Provider>
    </>
  )
}

export default App