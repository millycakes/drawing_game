// import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import Canvas from './pages/Canvas';

function App() {
  return (
      <Routes>
          <Route path = "/"  element = {<Home />}/>
          <Route path = "/avatar"  element = {<Avatar />}/>
          <Route path = "/canvas"  element = {<Canvas />}/>
      </Routes>
  );
}

export default App;
