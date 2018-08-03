import {API_BASE_URL} from '../config'

export const DISPLAY_CAT_REQUEST = 'DISPLAY_CAT_REQUEST'
export const fetchCatRequest = () => ({
    type: DISPLAY_CAT_REQUEST
})

export const DISPLAY_CAT_SUCCESS = 'DISPLAY_CAT_SUCCESS'
export const fetchCatSuccess = (cat) => ({
    type: DISPLAY_CAT_SUCCESS,
    cat
})

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST'
export const deleteCatRequest = () => ({
    type: ADOPT_CAT_REQUEST
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS'
export const deleteCatSuccess = (cat) => ({
    type: ADOPT_CAT_SUCCESS,
    cat
})

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR'
export const deleteCatError = () => ({
    type: ADOPT_CAT_ERROR
})

export const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest())
    fetch(`${API_BASE_URL}/cat`, {
        method: 'GET'
    })
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchCatSuccess(res)))
    .catch(err => dispatch(deleteCatError(err)))
}

export const deleteCat = () => dispatch => {
    dispatch(deleteCatRequest())
    fetch(`${API_BASE_URL}/cat`, {
        method: 'DELETE'
    })
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(deleteCatSuccess(res)))
    .catch(err => dispatch(deleteCatError(err)))
}