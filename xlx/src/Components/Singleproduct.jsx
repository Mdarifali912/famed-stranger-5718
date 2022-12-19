import { useParams } from "react-router-dom";
import React from 'react'

import { useState,useEffect } from "react";


function Singleproduct(){

   const {id}=useParams()
   const [detail,setdetail]=useState({})

   useEffect(()=>{
    fetch(``)
    .then((res))


   })


}