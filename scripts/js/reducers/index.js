import { combineReducers } from 'redux'
import randShape from './shapeReducer'
import randVisible from './visibleReducer'
import randGraph from './graphReducer'

const randapp = combineReducers({
  randVisible,
  randShape,
  randGraph,
})

export default randapp;
