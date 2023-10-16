import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers';




const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const store = configureStore({
        // Automatically calls `combineReducers`
        reducer: {
            productList: productListReducer,
            productDetails: productDetailsReducer,
            userLogin: userLoginReducer,
            userRegister: userRegisterReducer,
            userDetails: userDetailsReducer,
            userUpdateProfile: userUpdateProfileReducer,
        }
      }, initialState)
      
  export default store
  
  