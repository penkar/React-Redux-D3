'use strict'
import { VISIBLE } from '../actions'

const initialState = {
  visible: true
}

export default function randVisible(state = initialState, action){
  switch (action.type) {
    case VISIBLE:
      let visible = action.visible;
      return Object.assign({}, state, visible);
    default:
      return state;
  }
}
