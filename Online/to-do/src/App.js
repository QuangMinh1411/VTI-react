import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
function App() {
  const INITIAL_PRODUCTS = [
    { id: "p1", title: "React - The Complete Guide [Course]", price: 19.99 },
    { id: "p2", title: "Stylish Chair", price: 329.49 },
    { id: "p3", title: "Ergonomic Chair", price: 269.99 },
    { id: "p4", title: "History Video Game Collection", price: 99.99 },
  ];
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  // let product = {
  //   id: new Date().toString(),
  //   title:"",
  //   price:0
  // }
  const setTitle = (e) => {
    setProducts({
      id: new Date().toString(),
    });
  };
  const setPrice = (e) => {};

  const submit = (e) => {};
  return (
    <div className="App">
      <ToDoForm
        handleTitle={setTitle}
        handlePrice={setPrice}
        handleSubmit={submit}
      />
    </div>
  );
}

export default App;
