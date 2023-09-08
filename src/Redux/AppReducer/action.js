import axios from "axios"
import { GET_COFFE_DATA, GET_EMPLOYEE_DATA, GET_RESTO_DATA } from "./actionType"

export const getCoffeeSuccess = (payload) =>{
    return { type:GET_COFFE_DATA , payload:payload}
}
export const getRestoSuccess = (payload) =>{
    return { type:GET_RESTO_DATA , payload:payload}
}
export const getEmployeeSuccess = (payload) =>{
    return { type:GET_EMPLOYEE_DATA , payload:payload}
}

export const getCoffeeData = () => async(dispatch) =>{
    const res= await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`)
  
    dispatch(getCoffeeSuccess(res.data.data))
}
export const getRestoeData = () => async(dispatch) =>{
    const res= await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
  
    dispatch(getRestoSuccess(res.data.data))
}
export const getEmployeeData = () => async(dispatch) =>{
    const res= await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`)
  
    dispatch(getEmployeeSuccess(res.data.data))
}


