import { createStore } from 'redux'

const ACTION = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  TOGGLE: 'TOGGLE',
}

const defaultState = {
  counter: 0,
  hideCounter: false,
}

const reducerCounter = (store = defaultState, action) => {
  switch (action.type) {
    case ACTION.DECREMENT:
      return { ...store, counter: store.counter - action.amount }
    case ACTION.INCREMENT:
      return { ...store, counter: store.counter + action.amount }
    case ACTION.TOGGLE:
      return {
        ...store,
        hideCounter: !store.hideCounter,
      }
    default:
      return store
  }
}

const store = createStore(reducerCounter)

export default store
