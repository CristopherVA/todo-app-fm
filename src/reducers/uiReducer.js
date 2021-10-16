import { types } from "../types/types";

const initialState = {
    loading: false,
    error: null
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setError:
            return {
                ...state,
                error: action.payload
            }
        case types.removeError:
            return {
                ...state,
                error: null
            }
        case types.setLoading:
            return {
                ...state,
                loading: true
            }
        case types.removeLoading:
            return {
                ...state,
                loading: false
            }
    
        default:
            return state;
    }
}