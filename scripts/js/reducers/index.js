import { combineReducers } from 'redux'
import randShape from './shapeReducer'
import randVisible from './visibleReducer'

const randapp = combineReducers({
  randVisible,
  randShape
})

export default randapp;
