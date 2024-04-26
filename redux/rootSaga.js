import { all } from 'redux-saga/effects';
import loginSaga from './loginraedux/LoginSaga';

function* rootSaga() {
  yield all([
    loginSaga(),
   
  ]);
}

export default rootSaga;