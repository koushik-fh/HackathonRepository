import { loginTypes } from "./loginTypes";


const initialState = {
    user: null,
    menuData:[],
    orderData:{}
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case loginTypes.GET_USER_SUCCESS:
        return {
          ...state,
          user: action?.payload,
        };
        case loginTypes.GET_MENU_SUCCESS:
          return {
            ...state,
            menuData: action?.payload,
          };

          case loginTypes.PLACE_ORDER_SUCCESS:
            return {
              ...state,
              orderData: action?.payload,
            };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  