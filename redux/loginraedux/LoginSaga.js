import { call, put, takeLatest } from 'redux-saga/effects';
import { loginTypes } from './loginTypes';
// import { LOGIN_NETWORK } from './loginNeywork';
import axios from 'axios';
;



function* getusers(action){

    try{
    const formData = new FormData();
        formData.append('emp_code', action?.data);
    
        const response = yield call(axios.post, 'http://10.15.14.201/efms/api/validateemployee.php', formData);
if(response.data.status){
yield put ({type:loginTypes.GET_USER_SUCCESS, payload:response.data})
      }
    
     

    }catch(e){
      

    }
}


function* getMenu(){

  try{


    
    const response = yield call(axios.post, 'http://10.15.14.201/efms/api/menus.php');


if(response?.data?.status){


yield put ({type:loginTypes.GET_MENU_SUCCESS, payload:response?.data?.menus})
  }
  }catch(e){


  }


}

function* placeOrder(action) {

  try{

    const formData = new FormData();
    formData.append('emp_id', action?.empId);
    formData.append('menu_id', action?.orderId);
    formData.append('menu_details_id', action?.menu_id);

    const response = yield call(axios.post, 'http://10.15.14.201/efms/api/order.php', formData);

   console.log(response)

if(response.data.status){
yield put ({type:loginTypes.PLACE_ORDER_SUCCESS, payload:response.data})
  }

 }catch{


  }

}

function* loginSaga() {
  yield takeLatest(loginTypes.GET_USER, getusers); 
  yield takeLatest(loginTypes.GET_MENU_DATA, getMenu); 
  yield takeLatest(loginTypes.PLACE_ORDER_DATA, placeOrder); 
}

export default loginSaga;