import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/about" element = {<About/>}> </Route>
      </Routes>
    </>
  );
}

export default App;
