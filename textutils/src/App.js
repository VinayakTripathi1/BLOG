import logo from './logo.svg';
import './App.css';
import { Button, Carousel } from 'bootstrap';
import Navbar from './components/Navbar';
import About from './components/About';
import Carousell from './components/Carousell';
import carousel1 from './components/Carousel1';
import Carousel1 from './components/Carousel1';
import Login from './components/Login';
import Blog_enter from './components/Blog_enter';
function App() {
  return (
  <>
  <div>
<Navbar title="Enigma Entries"/>

<div className="container my-3"/></div>

<Login/>
<Carousell/>
<br></br>
<Carousel1/>
<Blog_enter/>
<About/>

</>

  );
}

export default App;
