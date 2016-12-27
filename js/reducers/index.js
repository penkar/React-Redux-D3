'use strict'
import { combineReducers } from 'redux'
import randShape from './shapeReducer'
import randVisible from './visibleReducer'
import randGraph from './graphReducer'
import chartData from './chartData'

const randapp = combineReducers({
  chartData,
  randVisible,
  randShape,
  randGraph,
})

export default randapp;
