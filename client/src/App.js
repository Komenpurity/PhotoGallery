import './App.css';
import Home from './components/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes >
          <Route path = "/" element = {<Home/>}/> 
          <Route path = "/login" element = {<Login/>}/> 
          <Route path = "/landing" element = {<Landing/>}/> 
         </Routes> 
      </BrowserRouter>
  );
}

export default App;
