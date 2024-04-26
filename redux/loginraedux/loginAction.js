
import { loginTypes } from "./loginTypes"


export const loginUser = (data) =>{
return{
    type:loginTypes.GET_USER,
    data
}

}

export const getMenu = () =>{
    return{
        type:loginTypes.GET_MENU_DATA,
    }
}

export const placeOrder = (empId, orderId, menu_id) =>{
    return{
        type:loginTypes.PLACE_ORDER_DATA,
        empId,
        orderId,
        menu_id
    }

}