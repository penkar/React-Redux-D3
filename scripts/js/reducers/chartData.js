import { CREATE_CHART, SCROLL_CHART, REMOVE_CHART } from '../actions'

const initialState = {
  graphData: [],
}

export default function chartData(state = initialState, action){
  switch (action.type) {
    case CREATE_CHART:
      let data = action.data
      return Object.assign({}, state, data);
    case SCROLL_CHART:
      return state; //Object.assign({}, state, chart);
    case REMOVE_CHART:
      return state; //Object.assign({}, state, chart);
    default:
      return state;
  }
}
