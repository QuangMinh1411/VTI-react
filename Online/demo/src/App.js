import "./App.css";
import { Car } from "./Car";
import { Person } from "./Person";
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

  // let str = [];

  // list.forEach((item) => {
  //   str.push(
  //     <li key={item.id}>
  //       {item.id}:{item.name}
  //     </li>
  //   );
  // });
  const handleClick = (name) => {
    console.log("Testing " + name);
  };
  const listElement = list.map((item) => (
    <Person
      key={item.id}
      id={item.id}
      name={item.name}
      clickElement={(e) => handleClick(item.name)}
    ></Person>
  ));

  return (
    <>
      <h1>Danh sach lop hoc</h1>
      <ul>{listElement}</ul>
      <Car model="Toyota" />
      <Car model="Honda" />
      <Car model="BMW" />
    </>
  );
}

export default App;
