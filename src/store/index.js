import {createStore} from 'redux'

const ACTION = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

const defaultStore = {
  counter: 0
}

const reducerCounter = (store = defaultStore, action) => {
  switch (action.type) {
    case ACTION.DECREMENT:
      return {
        counter: store.counter - action.amount,
      }
    case ACTION.INCREMENT:
      return {
        counter: store.counter + action.amount,
      }
    default:
      return store
  }
}

const store = createStore(reducerCounter)

export default store
