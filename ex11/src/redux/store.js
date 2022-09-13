import {createStore} from 'redux'
import { root } from './reducers/index'

export const store=createStore(root)
console.log(store.getState());