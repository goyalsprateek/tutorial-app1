import React from "react";
import EmployeeJSX from "./EmployeeJSX";

function ListRendering() {
  const employees = [
      { name: "Prateek", dept: "IT", age: "36" },
      { name: "Prateek 2", dept: "IT", age: "36" },
      { name: "Prateek 3", dept: "IT", age: "36" },
    ];

  return (
    <div>
      {employees.map((x, index) => (
        <EmployeeJSX key={index} emp={x} />
      ))}
    </div>
  );
}

export default ListRendering;
