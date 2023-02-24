import React from "react";

function Person({ name, age }) {
  return (
    <div>
      <p>FullName:{name}</p>
      <p>Age:{age}</p>
    </div>
  );
}

export default Person;
