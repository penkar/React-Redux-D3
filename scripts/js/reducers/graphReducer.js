import { CHART, ChangeChart } from '../actions'

const initialState = {
  graph: "barChart",
}

export default function randGraph(state = initialState, action){
  switch (action.type) {
    case CHART:
      let chart = action.chart;
      return Object.assign({}, state, chart);
    default:
      return state;
  }
}
