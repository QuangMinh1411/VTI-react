import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    dispatch(reset());
    setIncrementAmount(0);
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={(e) => dispatch(increment())}>Increment</button>
        <button onClick={(e) => dispatch(decrement())}>Decrement</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={(e) => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
