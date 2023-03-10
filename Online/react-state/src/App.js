import "./App.css";
import Add from "./components/Add";
import Counter from "./components/Counter";
import Divide from "./components/Divide";
// import EmailInput from "./components/EmailInput";
// import Multiply from "./components/Multiply";
// import Subtract from "./components/Subtract";
// function App() {
//   return (
//     <div className="App">
//       <Counter />
//       <EmailInput />
//       <Add />
//       <Subtract />
//       <Multiply />
//       <Divide />

//     </div>
//   );
// }

// export default App;
import { useState } from "react";

import Calculation from "./components/Calculation";
import Result from "./components/Result";

function App() {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });
  const [chosenOperation, setChosenOperation] = useState("add"); // valid values: 'add', 'subtract', 'multiply', 'divide'

  function changeFirstNumberHandler(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value,
      second: prevNumbers.second,
    }));
  }

  function changeSecondNumberHandler(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }

  function updateOperationHandler(event) {
    setChosenOperation(event.target.value);
  }

  let result;

  if (chosenOperation === "add") {
    result = enteredNumbers.first + enteredNumbers.second;
  } else if (chosenOperation === "subtract") {
    result = enteredNumbers.first - enteredNumbers.second;
  } else if (chosenOperation === "multiply") {
    result = enteredNumbers.first * enteredNumbers.second;
  } else {
    result = enteredNumbers.first / enteredNumbers.second;
  }

  return (
    <>
      <Calculation
        onFirstNumberChanged={changeFirstNumberHandler}
        onSecondNumberChanged={changeSecondNumberHandler}
        onOperationChanged={updateOperationHandler}
      />
      <Result calculationResult={result} />
    </>
  );
}

export default App;
