import {
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST, 
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_UPDATE_PROFILE_REQUEST, 
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    // USER_UPDATE_PROFILE_RESET,
    
   } from '../constants/userConstants';

import axios from 'axios'
const URL = 'http://127.0.0.1:8000';
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,

        });
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post(
            `${URL}/api/users/login/`,
            {'username': email, 'password': password},
            config
            )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch(error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
          });
 }
}



export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,

        });
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post(
            `${URL}/api/users/register/`,
            {'name': name, 'email': email, 'password': password},
            config
            )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch(error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
          });
 }
}


export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,

        });

        const {
            userLogin: {userInfo},

        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(
            `${URL}/api/users/${id}/`,
            config
            )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    }
    catch(error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
          });
 }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,

        });

        const {
            userLogin: {userInfo},

        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(
            `${URL}/api/users/profile/update/`,
            user,
            config
            )

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch(error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
          });
 }
}