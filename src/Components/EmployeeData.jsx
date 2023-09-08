import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeData } from "../Redux/AppReducer/action";

export default function EmployeeData() {

	const dispatch = useDispatch();

	const employee= useSelector((store)=>store.employeeData)

  
	useState(()=>{
	 dispatch(getEmployeeData()) 
	},[])
	return (
		<div>
			<h2>Employee Data</h2>
			<div className="employee_data_cont"style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
				{/* Map the below div against yoru employee data */}
				{employee.map((ele)=>
				<div className="employee" style={{ width: "250px" }}>
				<img className="image" alt="img" width="70%" src={ele.image}/>
				<div className="name"> {ele.name}</div>
				<div className="gender"> {ele.gender}</div>
				<div className="department">{ele.department} </div>
			</div>)}
				
			</div>
		</div>
	);
}
