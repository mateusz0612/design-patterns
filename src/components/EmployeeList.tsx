import React from "react";
import { EmployeeFactory } from "../Factory/EmployeeFactory";

const EmployeeList: React.FC = () => {
  const employeeFactory = new EmployeeFactory();
  const developerJhon = employeeFactory.createEmployee("Jhon", "Developer");
  const testerMatt = employeeFactory.createEmployee("Matt", "Tester");

  return (
    <div>
      <h1>Factory pattern example </h1>
      <p>
        {developerJhon.getName()} is a {developerJhon.getType()}
      </p>
      <p>
        {testerMatt.getName()} is a {testerMatt.getType()}
      </p>
    </div>
  );
};

export default EmployeeList;
