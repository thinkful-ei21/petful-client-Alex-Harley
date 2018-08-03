import {
    DISPLAY_CAT_REQUEST,
    DISPLAY_CAT_SUCCESS,
    ADOPT_CAT_REQUEST,
    ADOPT_CAT_SUCCESS,
    ADOPT_CAT_ERROR,
} from '../actions/cat'

const initialState = {
    currentCat: {},
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === DISPLAY_CAT_REQUEST) {
        return {...state, loading:true}
    }
    else if (action.type === DISPLAY_CAT_SUCCESS) {
        return {...state, currentCat: action.cat, error: null, loading: false}
    }
    else if (action.type === ADOPT_CAT_REQUEST) {
        return {...state, loading: true}
    }
    else if (action.type === ADOPT_CAT_SUCCESS) {
        return {...state, loading: false}
    }
    else if (action.type === ADOPT_CAT_ERROR) {
        return {...state, error: action.error, loading: false}
    }

    return state

}