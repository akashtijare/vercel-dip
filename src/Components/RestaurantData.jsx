import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestoeData } from "../Redux/AppReducer/action";

export default function RestaurantData() {

	const dispatch = useDispatch();

	const resto= useSelector((store)=>store.restaurantData)

  
	useState(()=>{
	 dispatch(getRestoeData()) 
	},[])
	return (
		<div>
			<h2> Restaurant Data </h2>
			<div className="restaurant_data_cont" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
				{/* Map the below div against your restaurant Data */}
				{resto.map((ele)=>
				<div className="restaurant_item">
				<img className="image" alt="img" width="30%" src={ele.image}/>
				<div className="name">{ele.name} </div>
				<div className="type">{ele.type} </div>
				<div className="rating"> {ele.rating}</div>
				<div className="number_of_votes"> {ele.number_of_votes}</div>
			</div>)}
				
			</div>
		</div>
	);
}
