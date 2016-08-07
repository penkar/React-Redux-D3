'use strict'
import { CREATE_CHART, SCROLL_CHART, REMOVE_CHART } from '../actions'

const initialState = {
  index: 0,
  graphData: [
    {
      data: [40, 18, 15, 16, 23, 42, 8, 44, 32, 5],
      title: "First Default Chart",
    }
  ],
}

export default function chartData(state = initialState, action){
  let {graphData} = state;//action.data
  switch (action.type) {
    case CREATE_CHART:
      graphData.push(action.graph)
      return Object.assign({}, state, {graphData}, {index: graphData.length - 1})
    case SCROLL_CHART:
      let { index } = action
      return Object.assign({}, state, {index});
    case REMOVE_CHART:
      graphData.splice(action.index, 1);
      return Object.assign({}, state, {graphData});
    default:
      return state;
  }
}
