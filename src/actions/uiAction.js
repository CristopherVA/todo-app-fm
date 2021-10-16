import { types } from "../types/types";

export const setError = (error) => ({
    type: types.setError,
    payload: error
})

export const removeError = () => ({
    type: types.removeError
})

export const startLoading = (error) => ({
    type: types.setLoading,
    payload: error
})

export const finishLoading = () => ({
    type: types.removeLoading
})