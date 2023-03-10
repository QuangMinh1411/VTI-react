import { useState } from "react";

function Add() {
  const intialNumbers = {
    first: 0,
    second: 0,
  };
  const [enteredNumbers, setEnteredNumbers] = useState(intialNumbers);

  function changeFirstNumberHandler(event) {
    setEnteredNumbers((prevState) => ({
      first: +event.target.value,
      second: prevState.second,
    }));
  }

  function changeSecondNumberHandler(event) {
    setEnteredNumbers((prevState) => ({
      first: prevState.first,
      second: +event.target.value,
    }));
  }

  const result = enteredNumbers.first + enteredNumbers.second;

  return (
    <p>
      <input type="number" onChange={changeFirstNumberHandler} /> +{" "}
      <input type="number" onChange={changeSecondNumberHandler} /> = {result}
    </p>
  );
}

export default Add;
