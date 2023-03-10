import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  // const [value,setValue] = useState(intialValue);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div>Counter {counter}</div>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button>
    </>
  );
};

export default Counter;

// a + b =
// a- b =
// a*b =
// a/b =
