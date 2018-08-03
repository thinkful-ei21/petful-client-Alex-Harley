import {API_BASE_URL} from '../config'

export const DISPLAY_DOG_REQUEST = 'DISPLAY_DOG_REQUEST'
export const fetchDogRequest = () => ({
    type: DISPLAY_DOG_REQUEST
})

export const DISPLAY_DOG_SUCCESS = 'DISPLAY_DOG_SUCCESS'
export const fetchDogSuccess = (dog) => ({
    type: DISPLAY_DOG_SUCCESS,
    dog
})

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST'
export const deleteDogRequest = () => ({
    type: ADOPT_DOG_REQUEST
})

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS'
export const deleteDogSuccess = (dog) => ({
    type: ADOPT_DOG_SUCCESS,
    dog
})

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR'
export const deleteDogError = () => ({
    type: ADOPT_DOG_ERROR
})

export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest())
    fetch(`${API_BASE_URL}/dog`, {
        method: 'GET'
    })
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchDogSuccess(res)))
    .catch(err => dispatch(deleteDogError(err)))
}

export const deleteDog = () => dispatch => {
    dispatch(deleteDogRequest())
    fetch(`${API_BASE_URL}/dog`, {
        method: 'DELETE'
    })
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(deleteDogSuccess(res)))
    .catch(err => dispatch(deleteDogError(err)))
}