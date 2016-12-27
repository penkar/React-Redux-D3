'use strict'
import { CHART, ChangeChart } from '../actions'

const initialState = {
  graph: "BarChart",
  index: 0,
}

export default function randGraph(state = initialState, action){
  switch (action.type) {
    case CHART:
      let { graph } = action;
      return Object.assign({}, state, {graph});
    default:
      return state;
  }
}
