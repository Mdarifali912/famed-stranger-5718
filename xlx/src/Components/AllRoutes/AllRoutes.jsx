import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from "../Home/Home"
import Login from "../Login/Login"
import Category from '../category/Category'

function AllRoutes() {
  return (
    <div>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/category" element={<Category />}></Route>

  
  </Routes>
   
    </div>
  )
}

export default AllRoutes