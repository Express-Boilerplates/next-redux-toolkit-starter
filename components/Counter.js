import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../store/reducers/counter'

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default connect(({ counter }) => ({ counter }), {
  increment,
  decrement
})(Counter)
