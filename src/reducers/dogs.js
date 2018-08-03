import {
    DISPLAY_DOG_REQUEST,
    DISPLAY_DOG_SUCCESS,
    ADOPT_DOG_REQUEST,
    ADOPT_DOG_SUCCESS,
    ADOPT_DOG_ERROR,
} from '../actions/dog'

const initialState = {
    currentDog: {},
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === DISPLAY_DOG_REQUEST) {
        return {...state, loading:true}
    }
    else if (action.type === DISPLAY_DOG_SUCCESS) {
        return {...state, currentDog: action.dog, error: null, loading: false}
    }
    else if (action.type === ADOPT_DOG_REQUEST) {
        return {...state, loading: true}
    }
    else if (action.type === ADOPT_DOG_SUCCESS) {
        return {...state, loading: false}
    }
    else if (action.type === ADOPT_DOG_ERROR) {
        return {...state, error: action.error, loading: false}
    }

    return state

}