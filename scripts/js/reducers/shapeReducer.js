import { MORPH, MorphShape } from '../actions'

const initialState = {
  shape: "circle",
}

export default function randShape(state = initialState, action){
  switch (action.type) {
    case MORPH:
      let shape = action.shape;
      return Object.assign({}, state, shape);
    default:
      return state;
  }
}
