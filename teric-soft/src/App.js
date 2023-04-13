import logo from './logo.svg';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/> 
      <EmployeeForm/>
    </div>
  );
}

export default App;
