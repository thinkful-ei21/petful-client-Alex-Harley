import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import cats from './reducers/cats'
import dogs from './reducers/dogs'

const reducers = combineReducers({cats, dogs})

const store = createStore(reducers, applyMiddleware(thunk))

export default store