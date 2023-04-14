import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Routing from './components/Routes/Routing';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/> 
      <Routing/>
    </div>
  );
}

export default App;
