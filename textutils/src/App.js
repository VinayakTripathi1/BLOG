import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
  <>
<Navbar title="Enigma Entries"/>
<div className="container my-3"></div>
<About/>


</>
  );
}

export default App;
