import "./App.css";
import { Car } from "./Car";
function App() {
  const list = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Mark",
    },
    {
      id: 3,
      name: "Mary",
    },
  ];
  console.log(list.length);
  const listElements = list.map((item) => (
    <li key={item.id}>
      {item.id}:{item.name}
    </li>
  ));

  return (
    <>
      <h1>Danh sach lop hoc</h1>
      <ul>{listElements}</ul>
      {/* <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {item.id} - {item.name}
            </li>
          );
        })}
      </ul> */}
      <Car model="Toyota" />
    </>
  );
}

export default App;
