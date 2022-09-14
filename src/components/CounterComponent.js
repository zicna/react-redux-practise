import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const CounterComponent = (props) => {
  const [increment, setIncrement] = useState(1)
  const counter = useSelector((state) => {
    return state.counter
  })

  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT', amount: 1 })
  }
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' ,amount: 1})
  }

  const incrementChangeHandler = (event) => {
    setIncrement(event.target.value)
  }

  const incrementByHandler = () => {
    dispatch({type: "INCREMENT", amount: parseInt(increment)})
  }
  return (
    <div>
      <h2>Hello from reducer</h2>
      <div>{counter}</div>
      <button onClick={incrementHandler}>UP</button>
      <div>
        <button onClick={incrementByHandler}>UP by</button>
        <input type="number" onChange={incrementChangeHandler} defaultValue={1}/>
      </div>
      <button onClick={decrementHandler}>DOWN</button>
    </div>
  )
}

export default CounterComponent
