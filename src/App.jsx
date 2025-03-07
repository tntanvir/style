import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import { Menus } from "./Component/Menu"
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
import Orderproduct from "./Component/Orderproduct";
import Singup from "./Component/Singup";
import CategoryAllProduct from "./Component/CategoryAllProduct";
import MyAddedProduct from "./Component/MyAddedProduct";
import DashboardChart from "./Component/DashboardChart";
import AdminApprove from "./Component/AdminApprove";

export const contextAPI = createContext();

const App = () => {
  const [pageLoad, setPageLoad] = useState(false);

  return (
    <div >
      <contextAPI.Provider value={[pageLoad, setPageLoad]}>
        <Router>
          <Menus />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/category/:slug' element={<CategoryAllProduct />} />
            <Route path='/singup' element={<Singup />} />
            <Route path='/shop/:id' element={<ItemDtl />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/singin" element={<Login />} />
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
              <Route path="dashboard" element={<DashboardChart />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="myaddedproduct" element={<MyAddedProduct />} />
              <Route path="orderhistory" element={<Orders />} />
              <Route path="orderproduct" element={<Orderproduct />} />
              <Route path="approved" element={<AdminApprove />} />

            </Route>
          </Routes>
          <Footer />
        </Router>
      </contextAPI.Provider>
    </div>
  )
}

export default App