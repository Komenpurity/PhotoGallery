import './App.css';
import Home from './components/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import Signup from './components/Signup'
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import AlbumInfo from './components/AlbumInfo';
import PhotoInfo from './components/PhotoInfo';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes >
          <Route path = "/" element = {<Home/>}/> 
          <Route path = "/signup" element = {<Signup/>}/> 
          <Route path = "/landing" element = {<Landing/>}/> 
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/userinfo" element = {<UserInfo/>}/> 
          <Route path = "/album" element = {<AlbumInfo/>}/>
          <Route path = "/photo" element = {<PhotoInfo/>}/>
         </Routes> 
      </BrowserRouter>
  );
}

export default App;
