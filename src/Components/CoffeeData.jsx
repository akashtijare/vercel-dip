import React, { useState } from 'react'
import { getCoffeeData, getCoffeeSuccess } from '../Redux/AppReducer/action'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
export default function CoffeeData() {

  const dispatch = useDispatch();

  const coffee= useSelector((store)=>store.coffeeData)
  console.log(coffee)

 

  useState(()=>{
   dispatch(getCoffeeData()) 
  },[])
  
  return (
   <div>
     <h2 >Coffee Data</h2>
      <div className = "coffee_data_cont"  style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
        {/* map the below div against your coffee data */}
        {
          coffee.map((ele)=>
          <div className = "coffee-item" >
            <img className = "image" alt = "img" width = "300px" src={ele.image}/>
            <div className = "title">{ele.title} </div>
            <div className = "price">{ele.price} </div>
          </div>
       )} 
    </div>
   </div>
   
  )
}