'use strict'
import { CREATE_CHART, SCROLL_CHART, REMOVE_CHART } from '../actions'

const initialState = {
  graphData: [
    {
      data: [40, 18, 15, 16, 23, 42, 8, 44, 32, 5],
      title: "First Default Chart",
    }
  ],
}

export default function chartData(state = initialState, action){
  switch (action.type) {
    case CREATE_CHART:
      let {graphData} = state;//action.data
      console.log(action);
      graphData.push(action.graph)
      return Object.assign({}, state, {graphData})
    case SCROLL_CHART:
      let { index } = action
      return Object.assign({}, state, index);
    case REMOVE_CHART:
      return state; //Object.assign({}, state, chart);
    default:
      return state;
  }
}
