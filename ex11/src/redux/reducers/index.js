import {MoneyReducer} from './moneyreducer';
import {combineReducers} from 'redux';
 export const root=combineReducers({
    balance : MoneyReducer,
 })