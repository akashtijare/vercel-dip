import { GET_COFFE_DATA, GET_EMPLOYEE_DATA, GET_RESTO_DATA } from "./actionType";


const initialState = {
  coffeeData: [],
  restaurantData: [],
  employeeData : []
  
};

const reducer = (state = initialState, {type,payload}) => {

  switch(type)
  {
     case GET_COFFE_DATA:
      return {
        ...state,
        coffeeData:payload,
      }
      case GET_RESTO_DATA:
        return {
          ...state,
          restaurantData:payload,
        }
        case GET_EMPLOYEE_DATA:
          return {
            ...state,
            employeeData:payload,
          }
      default: {
        return state;
      }
     
  }
};

export { reducer };