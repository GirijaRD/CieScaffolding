import {createStore,applyMiddleware} from '@reduxjs/toolkit';
import {routerMiddleware} from 'connected-react-router';
import rootReducer from './rootReducer'
import history from './history';
import thunk from "redux-thunk";
import logger,{createLogger} from 'redux-logger';
import tokenMiddleware from '../redux-middlewares-enhancers/token-middleware'
const Tlogger=createLogger({
    predicate:(getState ,action)=>
    {
         console.log("predicate", getState());
         console.log(action.constructor.name)
         return true
    },
    level:(data)=>{
        switch(data.type){
            case "@@router/LOCATION_CHANGE":
                return "info";
            default:
                return "log";
        }
    },
    stateTransformer:(state)=>{
        switch(state.type){
            case "@@router/LOCATION_CHANGE":
                return state.router;
            default:
                return state;
        }
    },
    actionTransformer:(action)=>{
        switch(action.type){
            case "@@router/LOCATION_CHANGE":
                return {
                    type:action.type,
                    action:action.payload.action,
                    path:action.payload.location.path
                };
            default:
                return action;
        }
    },
    diffPredicate:(getState,action)=>{
        console.log("diffPred",getState(),action);
        return true;
    },
    collapsed:(getState,action)=>{
        console.log(action.type);
        return true;
    }
}) 
const store=createStore(
    rootReducer,
    applyMiddleware(routerMiddleware(history),thunk, tokenMiddleware ,Tlogger)
)

export default store;
