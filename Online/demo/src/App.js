import "./App.css";
import { Car } from "./Car";
import { Person } from "./Person";
import { Link } from "./Link";
import { NavItem } from "./NavItem";
import { Input } from "./Input";
import GoalList from "./GoalList";
import Header from "./Header";
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
  const configObj = {
    href: "https://vnexpress.net",
    download: true,
  };
  const emailInput = {
    type: "email",
    placeholder: "Enter your email",
  };
  const numberInput = {
    type: "number",
    value: 0,
  };

  const data = [
    {
      id: 1,
      title: "Learn React",
      content: "Testing 1",
    },
    {
      id: 2,
      title: "Learn Vue",
      content: "Testing 2",
    },
    {
      id: 3,
      title: "Learn Angular",
      content: "Testing 3",
    },
  ];
  return (
    <>
      <h1>Danh sach lop hoc</h1>
      <ul>{listElement}</ul>
      <Car model="Toyota" />
      <Car model="Honda" />
      <Car model="BMW" />
      <Link config={configObj}>Show</Link>
      <Input config={emailInput} />
      <Input config={numberInput} />
      <NavItem target="https://vnexpress.net" text="Test" />
      <Header title="Objective of React Course" />
      <GoalList data={data} />
    </>
  );
}

export default App;
