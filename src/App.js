import React from 'react'
import './App.css';
import Landing from "./Component/Landing";
import Lesson from './Component/Lesson';
import Navbar from './Component/Navbar';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Sidebar from './Component/Navbar';

function App() {

  return (
    <div className="App">
        <Landing/>
        <div className='main-content'>
                <Navbar/>
                <Lesson/>
        </div>
    </div>
  );
}

export default App;
