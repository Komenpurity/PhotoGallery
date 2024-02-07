import './App.css';
import Home from './components/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import Signup from './components/Signup'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes >
          <Route path = "/" element = {<Home/>}/> 
          <Route path = "/signup" element = {<Signup/>}/> 
          <Route path = "/landing" element = {<Landing/>}/> 
         </Routes> 
      </BrowserRouter>
  );
}

export default App;
