import { FETCH_USERLIST_REQUEST, FETCH_USERLIST_SUCCESS, FETCH_USERLIST_FAILURE } from '../types/UserTypes';
import axios from 'axios';


export const userListRequest = () => {
    return {
        type: FETCH_USERLIST_REQUEST,
    }
};

export const userListSuccess = (user: any) => {
    return {
        type: FETCH_USERLIST_SUCCESS,
        payload: user
    }
};

export const userListFailure = (error: any) => {
    return {
        type: FETCH_USERLIST_FAILURE,
        payload: error
    }
};

//call to API - redux-thunk
export const fetchUser = () => {
    return (dispatch: any) => {
        dispatch(userListRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data;
            dispatch(userListSuccess(users))
        }).catch(error => {
            const errmsg = error.message;
            dispatch(userListFailure(errmsg))
        })
    }
}