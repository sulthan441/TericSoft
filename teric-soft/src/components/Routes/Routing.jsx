import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import EmployeeDetails from '../../Pages/EmployeeDetails';
import EmployeeUpdation from '../../Pages/EmployeeUpdation';
import EmployeeForm from '../../Pages/EmployeeForm';
import PageNotFound from '../../Pages/PageNotFound';

function Routing() {
  return (
    <Routes>
         <Route path="/" element={<EmployeeForm />} />
      <Route path="/employeedetails" element={<EmployeeDetails />} />
      <Route path="/employeedetails/:id" element={<EmployeeUpdation />} />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
}

export default Routing;
