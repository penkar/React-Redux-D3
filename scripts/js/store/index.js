import { createStore } from 'redux'
import randapp from '../reducers'

// let store = createStore(randapp)
export default function configureStore(initialState) {
  const store = createStore(randapp, initialState);

  return store;
}
