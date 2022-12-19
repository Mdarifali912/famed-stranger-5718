import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Category from './Category'
import Signup from '../pages/Signup'
import Products from "../Components/Products"
import Singleproduct from '../Components/Singleproduct'

function AllRoutes() {
  return (
    <div>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/category" element={<Category />}></Route>
  <Route path="/signup" element={<Signup />}></Route>
  <Route path="/products" element={<Products />}></Route>
  <Route path="/singleproduct" element={<Singleproduct />}></Route>


  
  </Routes>
   
    </div>
  )
}

export default AllRoutes