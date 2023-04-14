import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import EmployeeDetails from '../EmployeeDetails';
import EmployeeForm from '../EmployeeForm';

function Routing() {
  return (
    <Routes>
      <Route path="/employeedetails" element={<EmployeeDetails />} />
      <Route path="/" element={<EmployeeForm />} />
    </Routes>
  );
}

export default Routing;
