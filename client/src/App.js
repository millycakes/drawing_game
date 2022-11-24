// import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import {Link, Routes, Route} from "react-router-dom"
import Home from './components/Home'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to = "/ " >Home</Link></li>
          <li><Link to = "/test " >Test</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/test" element = {<Test />} />
      </Routes>
    </>
  );
}

export default App;
