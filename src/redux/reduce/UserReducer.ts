import { FETCH_USERLIST_SUCCESS, FETCH_USERLIST_REQUEST, FETCH_USERLIST_FAILURE } from '../types/UserTypes';

const initialState = {
    userList: [],
    loading: false,
    error: ''
}

export const userListReducer: any = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_USERLIST_REQUEST: return {
            ...state, loading: true,
        }
        case FETCH_USERLIST_SUCCESS: return {
            ...state, loading: false, error: '', userList: action.payload
        }
        case FETCH_USERLIST_FAILURE: return {
            ...state, loading: false, error: action.payload, userList: []
        }
        default: return {
            ...state
        }
    }
};

