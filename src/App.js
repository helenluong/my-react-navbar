import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainPage'
import React, { Component }  from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import navbar from "./components/navbar"
import about from './components/mainPage/about';
function App() {
  return (
    <div className="">
      <MainPage/>
      <BrowserRouter>
      <Routes>
      <navbar />
    
        <Route path='/' exact component={about} />
     
    </Routes>
    </BrowserRouter>
      
    
      {/* <Component/> */}
    </div>
  );
}

export default App;

