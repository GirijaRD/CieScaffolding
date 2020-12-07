import {combineReducers} from '@reduxjs/toolkit'
import reducer from '../features/login-flow'
import {connectRouter} from 'connected-react-router'
import history from './history'
console.log("reducer",reducer)
const rootReducer=combineReducers({
    login:reducer,
    router: connectRouter(history)
})

export default rootReducer