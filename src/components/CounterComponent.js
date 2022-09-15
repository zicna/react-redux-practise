import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {ACTION} from '../store/index'

const CounterComponent = (props) => {
  const [increment, setIncrement] = useState(1)
  const counter = useSelector((state) => {
    return state.counter
  })
  const hideCounter = useSelector((state) => {
    return state.hideCounter
  })

  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: ACTION.INCREMENT, amount: 1 })
  }
  const decrementHandler = () => {
    dispatch({ type: ACTION.DECREMENT, amount: 1 })
  }

  const incrementChangeHandler = (event) => {
    setIncrement(event.target.value)
  }

  const incrementByHandler = () => {
    dispatch({ type: ACTION.INCREMENT, amount: parseInt(increment) })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
  }
  return (
    <div>
      <h2>Hello from reducer</h2>
      <div>{!hideCounter && counter}</div>
      <button onClick={incrementHandler}>UP</button>
      <div>
        <button onClick={incrementByHandler}>UP by</button>
        <input
          type="number"
          onChange={incrementChangeHandler}
          defaultValue={1}
        />
      </div>
      <button onClick={decrementHandler}>DOWN</button>
      <div>
        <button onClick={toggleCounterHandler}>TOGGLE COUNTER</button>
      </div>
    </div>
  )
}

export default CounterComponent
