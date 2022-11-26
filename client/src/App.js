// import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from "react-router-dom"
<<<<<<< Updated upstream
import Home from './pages/Home/index';


function App() {
  return (
    <>
      <nav>
        <ul>

        </ul>
      </nav>
      <Routes>
          <Route path = "/" element = {<Home />}/>
=======
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import Canvas from './pages/Canvas';

function App() {
  return (
      <Routes>
          <Route path = "/"  element = {<Home />}/>
          <Route path = "/avatar"  element = {<Avatar />}/>
          <Route path = "/canvas"  element = {<Canvas />}/>
>>>>>>> Stashed changes
      </Routes>
  );
}

export default App;
