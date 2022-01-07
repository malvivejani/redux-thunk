import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "../types/PostTypes";

const postInitialState = {
    isLoading: false,
    post: [],
    error: '',
};

export const postReducer: any = (state = postInitialState, action: any) => {
    switch (action.type) {
        case FETCH_POST_REQUEST: return {
            ...state,
            isLoading: true,
        }
        case FETCH_POST_SUCCESS: return {
            ...state,
            isLoading: false,
            post: action.payload,
            error: '',
        }
        case FETCH_POST_FAILURE: return {
            ...state,
            isLoapding: false,
            post: [],
            error: action.payload,
        }
        default: return {
            ...state
        }
    }
}