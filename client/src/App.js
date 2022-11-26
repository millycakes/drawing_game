// import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from "react-router-dom"
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
      </Routes>
    </>
  );
}

export default App;
