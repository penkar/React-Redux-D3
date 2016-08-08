'use strict'
export const MORPH = "MORPH";
export const VISIBLE = "VISIBLE"
export const CHART = "CHART"
export const CREATE_CHART = "CREATE_CHART"
export const SCROLL_CHART = "SCROLL_CHART"
export const REMOVE_CHART = "REMOVE_CHART"

export function MorphShape(shape) {
  return { type: MORPH, shape }
}

export function ChangeVisible(visible) {
  return { type: VISIBLE, visible }
}

export function ChangeChart(graph) {
  return { type: CHART, graph }
}

export function CreateChart(size) {
  let title = size.toString() + " Charts Created Total"
  let data = Array.from({length: 10}, () => Math.floor(Math.random() * 50));
  let graph = {title, data}
  return {type: CREATE_CHART, graph}
}

export function ScrollChart(index) {
  return {type: SCROLL_CHART, index}
}

export function RemoveChart(index) {
  return {type: REMOVE_CHART, index}
}
