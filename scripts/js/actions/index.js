'use strict'
export const MORPH = "MORPH";
export const VISIBLE = "VISIBLE"
export const CHART = "CHART"
export const CREATE_CHART = "CREATE_CHART"
export const SCROLL_CHART = "SCROLL_CHART"
export const REMOVE_CHART = "REMOVE_CHART"

export function MorphShape(shape){
  return {type: MORPH, shape}
}

export function ChangeVisible(visible){
  return {type: VISIBLE, visible}
}

export function ChangeChart(graph){
  return {type: CHART, graph}
}

export function CreateChart(data){ // Chart Data Reducer
  return {type: CREATE_CHART, data}
}

export function ScrollChart(index){ // Chart Data Reducer
  return {type: SCROLL_CHART, index}
}

export function RemoveChart(index){ // Chart Data Reducer
  return {type: REMOVE_CHART, index}
}
