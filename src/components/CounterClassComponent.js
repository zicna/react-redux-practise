import React, { Component } from 'react'
import store, { ACTION } from '../store'

import { connect } from 'react-redux'

class CounterClassComponent extends Component {
  // ! since we do NOT have any state we do not need to initialize it
  // constructor(){
  //     super(),
  //     store
  // }
  incrementHandler() {
    this.props.increment()
    console.log('increment')
  }
  decrementHandler() {
    this.props.decrement()
    console.log('idecremented')
  }

  toggleCounterHandler() {}

  render() {
    return (
      <div>
        <h2>Hello from reducer</h2>
        <div>{true && this.props.counter}</div>
        <button onClick={this.incrementHandler.bind(this)}>UP</button>
        {/* <div>
          <button onClick={incrementByHandler}>UP by</button>
          <input
            type="number"
            onChange={incrementChangeHandler}
            defaultValue={1}
          />
        </div> */}
        <button onClick={this.decrementHandler.bind(this)}>DOWN</button>
        <div>
          <button onClick={this.toggleCounterHandler}>TOGGLE COUNTER</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT', amount: 1 }),
    decrement: () => dispatch({ type: 'DECREMENT', amount: 1 }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterClassComponent)
