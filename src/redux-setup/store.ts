import {createStore,applyMiddleware} from '@reduxjs/toolkit';
import {routerMiddleware} from 'connected-react-router';
import rootReducer from './rootReducer'
import history from './history';
//import {createLogger} from 'redux-logger';
import tokenMiddleware from '../redux-middlewares-enhancers/token-middleware'
import Logger from '../components/Logger'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import LoginSaga from '../features/login-flow/login-sagas';
// const Tlogger=createLogger({
//     predicate:(getState ,action)=>
//     {
//          return true
//     },
//     level:(data,...temp)=>{
//         console.log("level",data,temp);
//         return "info";
//     },
//     stateTransformer:(state)=>{
//         switch(state.type){
//             case "@@router/LOCATION_CHANGE":
//                 return state.router;
//             default:
//                 return state;
//         }
//     },
//     actionTransformer:(action)=>{
//         switch(action.type){
//             case "@@router/LOCATION_CHANGE":
//                 return {
//                     type:action.type,
//                     action:action.payload.action,
//                     path:action.payload.location.path
//                 };
//             default:
//                 return action;
//         }
//     },
//     diffPredicate:(getState,action)=>{
//         console.log("diffPred",getState(),action);
//         return true;
//     },
//     collapsed:(getState,action)=>{
//         console.log(action.type);
//         return true;
//     },
//     logger:{
//         log:console.log,
//         info:console.info
//     }
// }) 
const sagaMiddleware  = createSagaMiddleware();
const LoggerMiddlwareCustom=()=>(next: any)=>(action: any)=>{
    Logger.log({LogType:"ReduxAction",logData:action})
    next(action);
}
const persistConfig={
    key:'root',
    storage
}
const store=createStore(
    persistReducer(persistConfig,rootReducer),
    applyMiddleware(sagaMiddleware,routerMiddleware(history), tokenMiddleware ,LoggerMiddlwareCustom)
)
sagaMiddleware.run(LoginSaga);
const storeConfig={store,persistor:persistStore(store)}
export default storeConfig;
