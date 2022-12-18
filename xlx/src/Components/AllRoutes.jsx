import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Category from './Category'
import Signup from '../pages/Signup'

function AllRoutes() {
  return (
    <div>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/category" element={<Category />}></Route>
  <Route path="/signup" element={<Signup />}></Route>


  
  </Routes>
   
    </div>
  )
}

export default AllRoutes