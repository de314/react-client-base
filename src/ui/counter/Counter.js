import React from "react";

import { connect } from "react-redux";

const Counter = ({ count, onIncrement, onIncrementAsync }) => (
  <div className="Counter">
    <h1>Counter: {count}</h1>
    <p>
      <button onClick={() => onIncrement(1)}>+1</button>
      <button onClick={() => onIncrement(-1)}>-1</button>
    </p>
    <p>
      <button onClick={() => onIncrementAsync(10)}>+10... slow</button>
      <button onClick={() => onIncrementAsync(-10)}>-10... slow</button>
    </p>
  </div>
);

export default connect(
  state => ({
    count: state.count
  }),
  ({ count: { increment, incrementAsync } }) => ({
    onIncrement: amt => increment(amt),
    onIncrementAsync: amt => incrementAsync(amt)
  })
)(Counter);
